import AST from "./ast";
import {
  ArgumentNode,
  AssignmentNode,
  Decorators,
  OperandNode,
  OperatorNode,
  OptionNode,
  OptionWithArgNode,
  PipeNode,
  ProgramNode,
  RedirectNode,
  ReservedWordNode,
  SudoNode,
  WordNode,
  Decorator
} from "./interfaces";

class DecoratorConsole implements Decorator {
  private decorators: Decorators;

  constructor(decorators: Decorators) {
    this.decorators = decorators;
  }

  /*
  public decorate(
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
      | OperandNode
  ): any {
    if (this.mode === "console") {
      return this.decorateForConsole(token);
    } else if (this.mode === "react") {
      return this.decorateForReact(token);
    }
  }

  
  private decorateForReact(
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
      | OperandNode
  ) {
    return this.decorators[token.kind](token);
  }
  */
  public decorate(
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
      | OperandNode
  ): string {
    let decoratedString: string = "";

    decoratedString = this.decorators[token.kind](token);

    return decoratedString;
  }
}

export default DecoratorConsole;
