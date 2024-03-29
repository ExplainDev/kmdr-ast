import { Subcommand, SubcommandSchema } from "kmdr-parser";
import ASTNodePoint from "../astNodePoint";
import { DefinitionFeedback, NodeDefinition } from "../interfaces";

/**
 *
 */
export default class SubcommandNodeDefinition implements NodeDefinition {
  public readonly startPosition: ASTNodePoint;
  public readonly endPosition: ASTNodePoint;
  public readonly type: string = "subcommand";
  public readonly metadata: SubcommandSchema;
  public readonly definition: DefinitionFeedback;

  constructor(
    startPosition: ASTNodePoint,
    endPosition: ASTNodePoint,
    subcommand: Subcommand,
    definition: DefinitionFeedback
  ) {
    this.startPosition = startPosition;
    this.endPosition = endPosition;
    this.metadata = {
      name: subcommand.name,
      summary: subcommand.summary,
    };
    this.definition = definition;
  }
}
