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
  ): string {
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
            this.decorateNode(wordInRange, nodes[currentToken], definitions)
          );
          wordInRange = "";
          currentToken += 1;
          inRange = false;
        }
      } else {
        if (inRange) {
          decoratedStrings.push(
            this.decorateNode(wordInRange, nodes[currentToken], definitions)
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

    return decoratedStrings.join("");
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
              this.decorateText(wordInRange, matches[currentToken].type)
            );
            wordInRange = "";
            currentToken += 1;
            inRange = false;
          }
        } else {
          if (inRange) {
            decoratedStrings.push(
              this.decorateText(wordInRange, matches[currentToken].type)
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

    return decoratedStrings.join("");
  }

  private decorateText(text: string, type: string): string {
    switch (type) {
      case "`":
        return super.backtick(text);
      case "|":
        return super.pipeline(text);
      case "&&":
        return super.operator(text);
      case "(":
      case "$(":
        return super.openingParens(text);
      case "{":
        return super.openingBraces(text);
      case "}":
        return super.closingBraces(text);
      case ")":
        return super.closinParens(text);
      case ">":
      case ">&":
        return super.redirect(text);
      case ";":
        return super.semicolon(text);
      case "=":
        return super.equal(text);
      case "command_name":
      case "program":
        return super.program(text);
      case "comment":
        return super.comment(text);
      case "do":
        return super.do(text);
      case "done":
        return super.done(text);
      case "file_descriptor":
        return super.fileDescriptor(text);
      case "for":
        return super.for(text);
      case "function":
        return super.fn(text);
      case "in":
        return super.in(text);
      case "option":
        return super.option(text);
      case "optionArg":
        return super.optionArg(text);
      case "subcommand":
        return super.subcommand(text);
      case "variable_name":
        return super.variableName(text);
      case "while":
        return super.while(text);
      default:
        return super.word(text);
    }
  }
}
