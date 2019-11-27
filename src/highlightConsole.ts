import AST, { NodeAST } from ".";

import { Decorators, FlatAST, Highlight } from "./interfaces";
import DecoratorConsole from "./decoratorConsole";

class HighlightConsole extends DecoratorConsole implements Highlight {
  constructor(decorators: Decorators) {
    super(decorators);
  }

  public highlight(query: string, ast: NodeAST): string {
    let decoratedString: string = "";
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
          decoratedString += super.decorate(tokens[currentToken]);
          inRange = false;
          wordInRange = "";
          currentToken += 1;
        }
      } else {
        if (inRange) {
          inRange = false;
          decoratedString += super.decorate(tokens[currentToken]);
          wordInRange = "";
          currentToken += 1;
        }
        // if the current char is not part of any token, then append it to the string
        decoratedString += char;
      }
    }

    return decoratedString;
  }

  public inRange(pos: number, range: number[]): boolean {
    const [start, stop] = range;

    return pos >= start && pos < stop;
  }
}

export default HighlightConsole;
