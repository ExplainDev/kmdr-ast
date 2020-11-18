import { Option, OptionSchema } from "kmdr-parser";
import ASTNodePoint from "../astNodePoint";
import { DefinitionFeedback, NodeDefinition } from "../interfaces";

/**
 *
 */
export default class OptionNodeDefinition implements NodeDefinition {
  public readonly startPosition: ASTNodePoint;
  public readonly endPosition: ASTNodePoint;
  public readonly type: string = "option";
  public readonly metadata: OptionSchema;
  public readonly definitionFeedback?: DefinitionFeedback;

  constructor(
    startPosition: ASTNodePoint,
    endPosition: ASTNodePoint,
    option: Option,
    definitionFeedback?: DefinitionFeedback
  ) {
    this.startPosition = startPosition;
    this.endPosition = endPosition;
    this.metadata = {
      defaultValue: option.defaultValue,
      expectsArg: option.expectsValue,
      long: option.long,
      short: option.short,
      summary: option.summary,
    };
    this.definitionFeedback = definitionFeedback;
  }
}
