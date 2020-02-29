import { SubcommandSchema } from "kmdr-parser";
import ASTNodePoint from "../astNodePoint";
import { NodeDefinition } from "../interfaces";

/**
 *
 */
export default class SubcommandNodeDefinition implements NodeDefinition {
  public readonly startPosition: ASTNodePoint;
  public readonly endPosition: ASTNodePoint;
  public readonly type: string = "subcommand";
  public readonly metadata: SubcommandSchema;

  constructor(
    startPosition: ASTNodePoint,
    endPosition: ASTNodePoint,
    subcommandSchema: SubcommandSchema
  ) {
    this.startPosition = startPosition;
    this.endPosition = endPosition;
    this.metadata = {
      name: subcommandSchema.name,
      summary: subcommandSchema.summary
    };
  }
}
