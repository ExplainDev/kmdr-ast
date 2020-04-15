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
  childCount?: number;
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
  argument(text: string, node?: Node, definition?: NodeDefinition): T;
  arithmeticOperator(text: string, node?: Node, definition?: NodeDefinition): T;
  backtick(text: string, node?: Node, definition?: NodeDefinition): T;
  bitwiseOperator(text: string, node?: Node, definition?: NodeDefinition): T;
  braces(text: string, node?: Node, definition?: NodeDefinition): T;
  brackets(text: string, node?: Node, definition?: NodeDefinition): T;
  command(text: string, node?: Node): T;
  comment(text: string, node?: Node, definition?: NodeDefinition): T;
  do(text: string, node?: Node, definition?: NodeDefinition): T;
  doubleQuotes(text: string, node?: Node, definition?: NodeDefinition): T;
  done(text: string, node?: Node, definition?: NodeDefinition): T;
  elif(text: string, node?: Node, definition?: NodeDefinition): T;
  else(text: string, node?: Node, definition?: NodeDefinition): T;
  equal(text: string, node?: Node, definition?: NodeDefinition): T;
  fi(text: string, node?: Node, definition?: NodeDefinition): T;
  fileDescriptor(text: string, node?: Node, definition?: NodeDefinition): T;
  fn(text: string, node?: Node, definition?: NodeDefinition): T;
  for(text: string, node?: Node, definition?: NodeDefinition): T;
  if(text: string, node?: Node, definition?: NodeDefinition): T;
  in(text: string, node?: Node, definition?: NodeDefinition): T;
  newLine(): T;
  option(text: string, node?: Node, definition?: NodeDefinition): T;
  optionArg(text: string, node?: Node, definition?: NodeDefinition): T;
  logicalOperator(text: string, node?: Node, definition?: NodeDefinition): T;
  parens(test: string, node?: Node, definition?: NodeDefinition): T;
  pipeline(text: string, node?: Node, definition?: NodeDefinition): T;
  program(text: string, node?: Node, definition?: NodeDefinition): T;
  redirect(text: string, node?: Node, definition?: NodeDefinition): T;
  relationalOperator(text: string, node?: Node, definition?: NodeDefinition): T;
  semicolon(text: string, node?: Node, definition?: NodeDefinition): T;
  space(): T;
  subcommand(text: string, node?: Node, definition?: NodeDefinition): T;
  testOperator(text: string, node?: Node, definition?: NodeDefinition): T;
  then(text: string, node?: Node, definition?: NodeDefinition): T;
  variableName(text: string, node?: Node, definition?: NodeDefinition): T;
  while(text: string, node?: Node, definition?: NodeDefinition): T;
  word(text: string, node?: Node, definition?: NodeDefinition): T;
}
