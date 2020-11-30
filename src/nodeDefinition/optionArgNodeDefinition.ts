import { Option, OptionSchema } from "kmdr-parser";
import ASTNodePoint from "../astNodePoint";
import { DefinitionFeedback, NodeDefinition } from "../interfaces";

/**
 *
 */
export default class OptionArgNodeDefinition implements NodeDefinition {
  public readonly startPosition: ASTNodePoint;
  public readonly endPosition: ASTNodePoint;
  public readonly type: string = "optionArg";
  public readonly metadata: OptionSchema;
  public readonly definition?: DefinitionFeedback;

  constructor(startPosition: ASTNodePoint, endPosition: ASTNodePoint, option: Option, definition: DefinitionFeedback) {
    this.startPosition = startPosition;
    this.endPosition = endPosition;

    this.metadata = {
      defaultValue: option.defaultValue,
      expectsArg: option.expectsValue,
      long: option.long,
      short: option.short,
      summary: option.summary,
    };

    this.definition = definition;
  }
}
