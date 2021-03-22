import { ArgumentSchema, OptionSchema, ProgramSchema, SubcommandSchema } from "kmdr-parser";

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
  definition?: Definition;
}

export interface Definition {
  schemaId: string;
  schemaVersion: string;
  path: string[];
  definitionId?: string;
  type: string;
}

export interface DefinitionFeedback {
  schemaId: string;
  schemaVersion: string;
  path: string[];
  definitionId?: string;
  type: string;
}

export interface ThemeDecorators<T extends Element | Text | string | any> {
  createToken(text: string, type?: string, definition?: NodeDefinition): T;
}

export interface BashDecorators<T extends Element | Text | string | any> extends ThemeDecorators<T> {
  argument(text: string, definition?: NodeDefinition): T;
  arithmeticOperator(text: string, definition?: NodeDefinition): T;
  backtick(text: string, definition?: NodeDefinition): T;
  bitwiseOperator(text: string, definition?: NodeDefinition): T;
  braces(text: string, definition?: NodeDefinition): T;
  brackets(text: string, definition?: NodeDefinition): T;
  comment(text: string, definition?: NodeDefinition): T;
  do(text: string, definition?: NodeDefinition): T;
  doubleQuotes(text: string, definition?: NodeDefinition): T;
  done(text: string, definition?: NodeDefinition): T;
  elif(text: string, definition?: NodeDefinition): T;
  else(text: string, definition?: NodeDefinition): T;
  equal(text: string, definition?: NodeDefinition): T;
  fi(text: string, definition?: NodeDefinition): T;
  fileDescriptor(text: string, definition?: NodeDefinition): T;
  fn(text: string, definition?: NodeDefinition): T;
  for(text: string, definition?: NodeDefinition): T;
  if(text: string, definition?: NodeDefinition): T;
  in(text: string, definition?: NodeDefinition): T;
  missingProgram(text: string, definition?: NodeDefinition): T;
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

export interface CSSDecorators<T extends Element | Text | string | any>
  extends ThemeDecorators<Element | Text | string | any> {
  braces(text: string, definition?: NodeDefinition): T;
  brackets(text: string, definition?: NodeDefinition): T;
  /**
   * lang: css
   * A class Selector
   * @param text
   * @param node
   * @param definition
   */
  className?(text: string, definition?: NodeDefinition): T;
  comment(text: string, definition?: NodeDefinition): T;
  doubleQuotes(text: string, definition?: NodeDefinition): T;
  equal(text: string, definition?: NodeDefinition): T;
  parens(test: string, definition?: NodeDefinition): T;
  semicolon(text: string, definition?: NodeDefinition): T;
  space(): T;

  /**
   * lang: css
   * A tag name selector
   * @param text
   * @param node
   * @param definition
   */
  tagName?(text: string, definition?: NodeDefinition): T;

  /**
   * lang: css
   * A universal selector
   * @param text
   * @param node
   * @param definition
   */
  universalSelector?(text: string, definition?: Node): T;

  /**
   * lang: bash
   * A property name
   * @param text
   * @param node
   * @param definition
   */
  property?(text: string, definition?: NodeDefinition): T;
}
