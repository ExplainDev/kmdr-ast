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

class DecoratorReact implements Decorator {
  private decorators: Decorators;

  constructor(decorators: Decorators) {
    this.decorators = decorators;
  }

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
  ) {
    return this.decorators[token.kind](token);
  }
}

export default DecoratorReact;
