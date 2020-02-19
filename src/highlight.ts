import { ASTNode } from ".";
import ASTNodePoint from "./astNodePoint";
import Decorate from "./decorate";
import { NodeDefinition } from "./interfaces";
import Tree from "./tree";

export default class Highlight extends Decorate {
  private static findNodeDefinition(
    node: ASTNode,
    definitions: NodeDefinition[]
  ) {
    const matches = definitions.filter(definition => {
      const definitionRange = [
        definition.startPosition,
        definition.endPosition
      ];
      const nodeRange = [node.startPosition, node.endPosition];

      return (
        ASTNodePoint.areEqualRanges(nodeRange, definitionRange) ||
        ASTNodePoint.rangeContainsRange(nodeRange, definitionRange)
      );
    });

    return matches;
  }

  private mode: string;

  constructor(decorators: any, mode: string) {
    super(decorators);
    this.mode = mode;
  }

  public source(
    source: string,
    tree: Tree,
    definitions: NodeDefinition[]
  ): string | string[] {
    const nodes = tree.flatten();

    let currentToken = 0;
    let inRange = false;
    let wordInRange = "";
    let row = 0;

    const decoratedStrings: string[] = [];
    let columnAtLine = 0;

    for (let column = 0; column < source.length; column++) {
      const char = source[column];

      if (char === `\n`) {
        decoratedStrings.push(`\n`);
        wordInRange = "";

        if (nodes[currentToken].type === "\n") {
          currentToken += 1;
        }
        inRange = false;
        row++;
        columnAtLine = 0;
        continue;
      }

      const { startPosition, endPosition } = nodes[currentToken];
      const point = new ASTNodePoint({ row, column: columnAtLine });

      if (
        currentToken < nodes.length &&
        ASTNodePoint.isInRange([startPosition, endPosition], point)
      ) {
        inRange = true;
        wordInRange += char;
        // if there's a token that spans till the end of the string
        if (
          column === source.length - 1 ||
          columnAtLine === nodes[currentToken].endPosition.column - 1
        ) {
          decoratedStrings.push(
            ...this.decorateNode(wordInRange, nodes[currentToken], definitions)
          );
          wordInRange = "";
          currentToken += 1;
          inRange = false;
        }
      } else {
        if (inRange) {
          decoratedStrings.push(
            ...this.decorateNode(wordInRange, nodes[currentToken], definitions)
          );
          wordInRange = "";
          currentToken += 1;
          inRange = false;
        }
        // if the current char is not part of any token, then append it to the array
        decoratedStrings.push(char);
      }
      columnAtLine++;
    }
    if (this.mode === "console") {
      return decoratedStrings.join("");
    } else {
      return decoratedStrings;
    }
  }

  private decorateNode(
    text: string,
    node: ASTNode,
    definitions: NodeDefinition[]
  ) {
    const decoratedStrings = [];
    const { startPosition } = node;
    let currentToken = 0;
    let inRange = false;
    let wordInRange = "";

    const matches = Highlight.findNodeDefinition(node, definitions);

    if (matches.length === 0) {
      decoratedStrings.push(this.decorateText(text, node.type));
    } else {
      for (let column = 0; column < text.length; column++) {
        // get the current character
        const char = text[column];
        // calculate the column position relative to the startPosition
        // of the node
        const columnInNode = startPosition.column + column;

        // new points to check if character is within a range of
        // a node definition
        const point = new ASTNodePoint({
          column: columnInNode,
          row: startPosition.row
        });

        if (
          currentToken < matches.length &&
          ASTNodePoint.isInRange(
            [
              matches[currentToken].startPosition,
              matches[currentToken].endPosition
            ],
            point
          )
        ) {
          inRange = true;
          wordInRange += char;
          // if there's a token that spans till the end of the string
          if (
            column === text.length - 1 ||
            columnInNode === matches[currentToken].endPosition.column - 1
          ) {
            decoratedStrings.push(
              this.decorateText(
                wordInRange,
                matches[currentToken].type,
                matches[currentToken]
              )
            );
            wordInRange = "";
            currentToken += 1;
            inRange = false;
          }
        } else {
          if (inRange) {
            decoratedStrings.push(
              this.decorateText(
                wordInRange,
                matches[currentToken].type,
                matches[currentToken]
              )
            );
            wordInRange = "";
            currentToken += 1;
            inRange = false;
          }
          // if the current char is not part of any token, then append it to the string
          // decoratedStrings.push(char);
          decoratedStrings.push(this.decorateText(char, node.type));
        }
      }
    }
    if (this.mode === "console") {
      return decoratedStrings.join("");
    } else {
      return decoratedStrings;
    }
  }

  private decorateText<T>(
    text: string,
    type: string,
    definition?: NodeDefinition
  ): T | string {
    switch (type) {
      case "`":
        return super.backtick(text);
      case "|":
        return super.pipeline(text, definition);
      case "&&":
        return super.operator(text, definition);
      case "(":
      case "$(":
        return super.openingParens(text);
      case "{":
        return super.openingBraces(text);
      case "}":
        return super.closingBraces(text);
      case ")":
        return super.closingParens(text, definition);
      case ">":
      case ">&":
        return super.redirect(text, definition);
      case ";":
        return super.semicolon(text, definition);
      case "=":
        return super.equal(text, definition);
      case "command_name":
      case "program":
        return super.program(text, definition);
      case "comment":
        return super.comment(text, definition);
      case "do":
        return super.do(text, definition);
      case "done":
        return super.done(text, definition);
      case "file_descriptor":
        return super.fileDescriptor(text, definition);
      case "for":
        return super.for(text, definition);
      case "function":
        return super.fn(text, definition);
      case "in":
        return super.in(text, definition);
      case "option":
        return super.option(text, definition);
      case "optionArg":
        return super.optionArg(text, definition);
      case "subcommand":
        return super.subcommand(text, definition);
      case "variable_name":
        return super.variableName(text, definition);
      case "while":
        return super.while(text, definition);
      default:
        return super.word(text, definition);
    }
  }
}
