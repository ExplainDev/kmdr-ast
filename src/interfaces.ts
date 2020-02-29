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

export interface Decorators<T extends Element | Text | string> {
  arithmeticOperator(text: string, definition?: NodeDefinition): T;
  backtick(text: string, definition?: NodeDefinition): T;
  bitwiseOperator(text: string, definition?: NodeDefinition): T;
  braces(text: string, definition?: NodeDefinition): T;
  brackets(text: string, definition?: NodeDefinition): T;
  comment(text: string, definition?: NodeDefinition): T;
  do(text: string, definition?: NodeDefinition): T;
  doubleQuotes(text: string, definition?: NodeDefinition): T;
  done(text: string, definition?: NodeDefinition): T;
  else(text: string, definition?: NodeDefinition): T;
  equal(text: string, definition?: NodeDefinition): T;
  fi(text: string, definition?: NodeDefinition): T;
  fileDescriptor(text: string, definition?: NodeDefinition): T;
  fn(text: string, definition?: NodeDefinition): T;
  for(text: string, definition?: NodeDefinition): T;
  if(text: string, definition?: NodeDefinition): T;
  in(text: string, definition?: NodeDefinition): T;
  newLine(): T;
  option(text: string, definition?: NodeDefinition): T;
  optionArg(text: string, definition?: NodeDefinition): T;
  logicalOperator(text: string, definition?: NodeDefinition): T;
  parens(test: string, definition?: NodeDefinition): T;
  pipeline(text: string, definition?: NodeDefinition): T;
  program(text: string, definition?: NodeDefinition): T;
  redirect(text: string, definition?: NodeDefinition): T;
  relationalOperator(text: string, definition?: NodeDefinition): T;
  semicolon(text: string, definition?: NodeDefinition): T;
  space(): T;
  subcommand(text: string, definition?: NodeDefinition): T;
  testOperator(text: string, definition?: NodeDefinition): T;
  then(text: string, definition?: NodeDefinition): T;
  variableName(text: string, definition?: NodeDefinition): T;
  while(text: string, definition?: NodeDefinition): T;
  word(text: string, definition?: NodeDefinition): T;
}
