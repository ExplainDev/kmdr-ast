import { Argument } from "kmdr-parser";
import ASTNodePoint from "../astNodePoint";
import { DefinitionFeedback, NodeDefinition } from "../interfaces";

/**
 *
 */
export default class ArgumentNodeDefinition implements NodeDefinition {
  public readonly startPosition: ASTNodePoint;
  public readonly endPosition: ASTNodePoint;
  public readonly type: string = "argument";
  public readonly metadata: Argument;
  public readonly definition: DefinitionFeedback;

  constructor(startPosition: ASTNodePoint, endPosition: ASTNodePoint, argument: Argument, definition: DefinitionFeedback) {
    this.startPosition = startPosition;
    this.endPosition = endPosition;
    this.metadata = {
      ...argument,
    };

    this.definition = definition;
  }
}
