import {
  ArgumentSchema,
  OptionSchema,
  ProgramSchema,
  SubcommandSchema
} from "kmdr-parser";

export interface NodePoint {
  row: number;
  column: number;
}

export interface Node {
  children?: Node[];
  endPosition: NodePoint;
  hasError?: boolean;
  isMissing?: boolean;
  isNamed?: boolean;
  parent?: Node;
  startPosition: NodePoint;
  type: string;
  text?: string;
}

export interface NodeDefinition {
  startPosition: NodePoint;
  endPosition: NodePoint;
  type: string;
  metadata: ProgramSchema | SubcommandSchema | OptionSchema | ArgumentSchema;
}
