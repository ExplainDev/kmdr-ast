import { ASTNode } from ".";
import ASTNodePoint from "./astNodePoint";
import { ThemeDecorators, NodeDefinition } from "./interfaces";
import Tree from "./tree";

export default class Highlight<R extends string | Text | Element | any> {
  private static findNodeDefinition(node: ASTNode, definitions: NodeDefinition[]) {
    const matches = definitions.filter((definition) => {
      const definitionRange = [definition.startPosition, definition.endPosition];
      const nodeRange = [node.startPosition, node.endPosition];

      return (
        ASTNodePoint.areEqualRanges(nodeRange, definitionRange) ||
        ASTNodePoint.rangeContainsRange(nodeRange, definitionRange)
      );
    });

    return matches;
  }

  private decorators: ThemeDecorators<R>;

  constructor(decorators: ThemeDecorators<R>) {
    this.decorators = decorators;
  }

  public source(source: string, tree: Tree, definitions?: NodeDefinition[]): R[] {
    const nodes = tree.flatten();
    let currentToken = 0;
    let inRange = false;
    let wordInRange = "";
    let row = 0;

    const decoratedStrings: R[] = [];
    let columnAtLine = 0;

    for (let column = 0; column < source.length; column++) {
      const char = source[column];
      if (char === "\n") {
        if (inRange) {
          // For CSS
          decoratedStrings.push(...this.decorateNode(wordInRange, nodes[currentToken], definitions));
          decoratedStrings.push(this.decorateText("\n", "new_line"));
        } else if (nodes[currentToken]?.type === "text") {
          // For HTML
          decoratedStrings.push(this.decorateText("\n", "new_line"));
          if (currentToken < nodes.length || nodes[currentToken]?.text !== "\n") {
            currentToken += 1;
          }
        } else {
          decoratedStrings.push(this.decorateText("\n", "new_line"));

          if (currentToken < nodes.length && nodes[currentToken].type === "\n") {
            currentToken += 1;
          }
        }

        wordInRange = "";

        row++;
        columnAtLine = 0;
        inRange = false;
        continue;
      }

      if (nodes[currentToken].type === "raw_text" && nodes[currentToken].text === "") {
        currentToken += 1;
        wordInRange = "";
        inRange = false;
      }

      try {
        const { startPosition, endPosition } = nodes[currentToken];
        const point = new ASTNodePoint({ row, column: columnAtLine });

        if (currentToken < nodes.length && ASTNodePoint.isInRange([startPosition, endPosition], point)) {
          inRange = true;
          wordInRange += char;

          // if there's a token that spans till the end of the string
          if (
            column === source.length - 1 ||
            (columnAtLine === nodes[currentToken].endPosition.column - 1 && row === nodes[currentToken].endPosition.row)
          ) {
            decoratedStrings.push(...this.decorateNode(wordInRange, nodes[currentToken], definitions));
            wordInRange = "";
            currentToken += 1;
            inRange = false;
          }
        } else if (inRange) {
          decoratedStrings.push(...this.decorateNode(wordInRange, nodes[currentToken], definitions));
          wordInRange = "";
          currentToken += 1;
          inRange = false;
        } else {
          // if the current char is not part of any token, then append it to the array
          decoratedStrings.push(this.decorateText(char));
        }
      } catch (err) {
        decoratedStrings.push(this.decorateText(char));
      }
      columnAtLine++;
    }

    return decoratedStrings;
  }

  private decorateNode(text: string, node: ASTNode, definitions?: NodeDefinition[]): R[] {
    const decoratedStrings = [];
    const { startPosition } = node;
    let currentToken = 0;
    let inRange = false;
    let wordInRange = "";

    let matches: NodeDefinition[] = [];

    if (definitions) {
      matches = Highlight.findNodeDefinition(node, definitions);
    }

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
          row: startPosition.row,
        });

        if (
          currentToken < matches.length &&
          ASTNodePoint.isInRange([matches[currentToken].startPosition, matches[currentToken].endPosition], point)
        ) {
          inRange = true;
          wordInRange += char;
          // if there's a token that spans till the end of the string
          if (column === text.length - 1 || columnInNode === matches[currentToken].endPosition.column - 1) {
            decoratedStrings.push(this.decorateText(wordInRange, matches[currentToken].type, matches[currentToken]));
            wordInRange = "";
            currentToken += 1;
            inRange = false;
          }
        } else {
          if (inRange) {
            decoratedStrings.push(this.decorateText(wordInRange, matches[currentToken].type, matches[currentToken]));
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

    return decoratedStrings;
  }

  private decorateText(text: string, type?: string, definition?: NodeDefinition): R {
    return this.decorators.createToken(text, type, definition);
    // switch (type) {
    //   case "`":
    //     return this.decorators.backtick(text, node);
    //   case `"`:
    //     return this.decorators.doubleQuotes(text);
    //   case "|":
    //     return this.decorators.pipeline(text, definition);
    //   case "&&":
    //   case "||":
    //   case "!":
    //     return this.decorators.logicalOperator(text, definition);
    //   case "(":
    //   case "$(":
    //   case ")":
    //     return this.decorators.parens(text);
    //   case "{":
    //   case `\${`:
    //   case "}":
    //     return this.decorators.braces(text);
    //   case "[[":
    //   case "]]":
    //   case "[":
    //   case "]":
    //     return this.decorators.brackets(text);
    //   case ">":
    //   case ">&":
    //   case ">>":
    //   case "&>":
    //     return this.decorators.redirect(text, definition);
    //   case ";":
    //     return this.decorators.semicolon(text, definition);
    //   case "=":
    //     return this.decorators.equal(text, definition);
    //   case "==":
    //   case "!=":
    //   case "<":
    //   case "<=":
    //   case ">=":
    //     return this.decorators.relationalOperator(text, definition);
    //   case "argument":
    //     return this.decorators.argument(text, definition);
    //   case "command":
    //     return this.decorators.command(text);
    //   case "command_name":
    //   case "program":
    //     return this.decorators.program(text, definition);
    //   case "comment":
    //     return this.decorators.comment(text, definition);
    //   case "do":
    //     return this.decorators.do(text, definition);
    //   case "done":
    //     return this.decorators.done(text, definition);
    //   case "file_descriptor":
    //     return this.decorators.fileDescriptor(text, definition);
    //   case "for":
    //     return this.decorators.for(text, definition);
    //   case "function":
    //     return this.decorators.fn(text, definition);
    //   case "if":
    //     return this.decorators.if(text, definition);
    //   case "else":
    //     return this.decorators.else(text, definition);
    //   case "elif":
    //     return this.decorators.elif(text, definition);
    //   case "fi":
    //     return this.decorators.fi(text, definition);
    //   case "in":
    //     return this.decorators.in(text, definition);
    //   case "missing_program":
    //     return this.decorators.missingProgram(text, definition);
    //   case "option":
    //     return this.decorators.option(text, definition);
    //   case "optionArg":
    //     return this.decorators.optionArg(text, definition);
    //   case "pipeline":
    //     return this.decorators.bitwiseOperator(text, definition);
    //   case "subcommand":
    //     return this.decorators.subcommand(text, definition);
    //   case "test_operator":
    //     return this.decorators.testOperator(text, definition);
    //   case "then":
    //     return this.decorators.then(text, definition);
    //   case "variable_name":
    //     return this.decorators.variableName(text, definition);
    //   case "while":
    //     return this.decorators.while(text, definition);
    //   /////////////////////////////
    //   // CSS
    //   ////////////////////////////
    //   case "property": {
    //     if (this.decorators.property) return this.decorators.property(text, definition);
    //     return this.decorators.word(text, definition);
    //   }
    //   case "class_name": {
    //     if (this.decorators.className) return this.decorators.className(text, definition);
    //     return this.decorators.word(text, definition);
    //   }
    //   case "*": {
    //     if (this.decorators.universalSelector) return this.decorators.universalSelector(text, definition);
    //     return this.decorators.word(text, definition);
    //   }
    //   case "tag_name": {
    //     if (this.decorators.tagName) return this.decorators.tagName(text, definition);
    //     return this.decorators.word(text, definition);
    //   }
    //   default:
    //     return this.decorators.word(text, definition);
    // }
  }
}
