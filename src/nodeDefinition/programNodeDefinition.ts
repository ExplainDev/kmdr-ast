import { Program, ProgramSchema } from "kmdr-parser";
import ASTNodePoint from "../astNodePoint";
import { DefinitionFeedback, NodeDefinition } from "../interfaces";

/**
 *
 */
export default class ProgramNodeDefinition implements NodeDefinition {
  public readonly startPosition: ASTNodePoint;
  public readonly endPosition: ASTNodePoint;
  public readonly type: string = "program";
  public readonly metadata: ProgramSchema;
  public readonly definition: DefinitionFeedback;

  constructor(startPosition: ASTNodePoint, endPosition: ASTNodePoint, program: Program, definition: DefinitionFeedback) {
    this.startPosition = startPosition;
    this.endPosition = endPosition;

    this.metadata = {
      name: program.name,
      summary: program.summary,
    };

    this.definition = definition;
  }
}
