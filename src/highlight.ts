import AST, { NodeAST } from ".";
import {
  ArgumentNode,
  AssignmentNode,
  Decorators,
  IHighlight,
  OperandNode,
  OperatorNode,
  OptionNode,
  OptionWithArgNode,
  PipeNode,
  ProgramNode,
  RedirectNode,
  ReservedWordNode,
  SudoNode,
  WordNode
} from "./interfaces";

class Highlight implements IHighlight {
  private decorators: Decorators;

  constructor(decorators: Decorators) {
    this.decorators = decorators;
  }

  public query(query: string, ast: NodeAST): any[] {
    const decoratedNodes = [];
    let currentToken = 0;
    let wordInRange = "";
    let inRange = false;
    const tokens = AST.flatten(ast);

    for (let pos = 0; pos < query.length; pos++) {
      const char = query[pos];
      if (
        currentToken < tokens.length &&
        this.inRange(pos, tokens[currentToken].pos)
      ) {
        inRange = true;
        wordInRange += char;
        // if there's a token that spans till the end of the string
        if (
          pos === query.length - 1 ||
          pos === tokens[currentToken].pos[1] - 1
        ) {
          decoratedNodes.push(this.token(tokens[currentToken]));
          inRange = false;
          wordInRange = "";
          currentToken += 1;
        }
      } else {
        if (inRange) {
          inRange = false;
          decoratedNodes.push(this.token(tokens[currentToken]));
          wordInRange = "";
          currentToken += 1;
        }
        // if the current char is not part of any token, then append it to the string
        decoratedNodes.push(char);
      }
    }

    return decoratedNodes;
  }

  public token(
    token:
      | OptionNode
      | ProgramNode
      | OptionWithArgNode
      | ArgumentNode
      | OperatorNode
      | AssignmentNode
      | PipeNode
      | SudoNode
      | ReservedWordNode
      | RedirectNode
      | WordNode
      | OperandNode,
    fromPropName?: string
  ): any {
    try {
      const decoratedString = this.decorators[token.kind](token, fromPropName);

      return decoratedString;
    } catch (err) {
      throw err;
    }
  }

  private inRange(pos: number, range: number[]): boolean {
    const [start, stop] = range;

    return pos >= start && pos < stop;
  }
}

export default Highlight;
