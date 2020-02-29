import { OptionSchema } from "kmdr-parser";
import ASTNodePoint from "../astNodePoint";
import { NodeDefinition } from "../interfaces";

/**
 *
 */
export default class OptionNodeDefinition implements NodeDefinition {
  public readonly startPosition: ASTNodePoint;
  public readonly endPosition: ASTNodePoint;
  public readonly type: string = "option";
  public readonly metadata: OptionSchema;

  constructor(
    startPosition: ASTNodePoint,
    endPosition: ASTNodePoint,
    optionSchema: OptionSchema
  ) {
    this.startPosition = startPosition;
    this.endPosition = endPosition;
    this.metadata = {
      summary: optionSchema.summary,
      expectsArg: optionSchema.expectsValue,
      defaultValue: optionSchema.defaultValue,
      long: optionSchema.long,
      short: optionSchema.short
    };
  }
}
