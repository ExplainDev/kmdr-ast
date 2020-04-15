import { Argument } from "kmdr-parser";
import ASTNodePoint from "../astNodePoint";
import { NodeDefinition } from "../interfaces";

/**
 *
 */
export default class ArgumentNodeDefinition implements NodeDefinition {
  public readonly startPosition: ASTNodePoint;
  public readonly endPosition: ASTNodePoint;
  public readonly type: string = "argument";
  public readonly metadata: Argument;

  constructor(
    startPosition: ASTNodePoint,
    endPosition: ASTNodePoint,
    argument: Argument
  ) {
    this.startPosition = startPosition;
    this.endPosition = endPosition;
    this.metadata = {
      ...argument
    };
  }
}
