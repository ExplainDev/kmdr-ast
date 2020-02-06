import { ProgramSchema } from "kmdr-parser";
import ASTNodePoint from "../astNodePoint";
import { NodeDefinition } from "../interfaces";

/**
 *
 */
export default class ProgramNodeDefinition implements NodeDefinition {
  public readonly startPosition: ASTNodePoint;
  public readonly endPosition: ASTNodePoint;
  public readonly type: string = "program";
  public readonly metadata: ProgramSchema;

  constructor(
    startPosition: ASTNodePoint,
    endPosition: ASTNodePoint,
    programSchema: ProgramSchema
  ) {
    this.startPosition = startPosition;
    this.endPosition = endPosition;
    this.metadata = {
      name: programSchema.name,
      summary: programSchema.summary
    };
  }
}
