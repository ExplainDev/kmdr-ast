import { Decorators, NodeDefinition } from "../src/interfaces";

export default class ConsoleDecorators implements Decorators<string> {
  public arithmeticOperator(text: string, definition?: NodeDefinition) {
    return `\u001b[97m${text}\u001b[0m`;
  }

  public backtick(text: string) {
    return `\u001b[97m${text}\u001b[0m`;
  }

  public bitwiseOperator(text: string, definition?: NodeDefinition) {
    return `\u001b[97m${text}\u001b[0m`;
  }

  public braces(text: string) {
    return `\u001b[92m${text}\u001b[0m`;
  }

  public brackets(text: string) {
    return `\u001b[92m${text}\u001b[0m`;
  }

  public command(text: string) {
    return text;
  }

  public comment(text: string, definition?: NodeDefinition) {
    return `\u001b[90m${text}\u001b[0m`;
  }

  public do(text: string, definition?: NodeDefinition) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  public doubleQuotes(text: string, definition?: NodeDefinition) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  public done(text: string, definition?: NodeDefinition) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  public else(text: string, definition?: NodeDefinition) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  public equal(text: string, definition?: NodeDefinition) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  public fi(text: string, definition?: NodeDefinition) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  public fileDescriptor(text: string, definition?: NodeDefinition) {
    return `\u001b[96m${text}\u001b[0m`;
  }

  public fn(text: string, definition?: NodeDefinition) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  public for(text: string, definition?: NodeDefinition) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  public if(text: string, definition?: NodeDefinition) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  public in(text: string, definition?: NodeDefinition) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  public logicalOperator(text: string, definition?: NodeDefinition) {
    return `\u001b[34m${text}\u001b[0m`;
  }

  public newLine() {
    return "\n";
  }

  public option(text: string, definition?: NodeDefinition) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  public optionArg(text: string, definition?: NodeDefinition) {
    return `\u001b[31m${text}\u001b[0m`;
  }

  public parens(text: string) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  public pipeline(text: string, definition?: NodeDefinition) {
    return `\u001b[91m${text}\u001b[0m`;
  }

  public program(text: string, definition?: NodeDefinition) {
    return `\u001b[32;1m${text}\u001b[0m`;
  }

  public redirect(text: string, definition?: NodeDefinition) {
    return `\u001b[34m${text}\u001b[0m`;
  }

  public relationalOperator(text: string, definition?: NodeDefinition) {
    return `\u001b[97m${text}\u001b[0m`;
  }

  public semicolon(text: string, definition?: NodeDefinition) {
    return `\u001b[94m${text}\u001b[0m`;
  }

  public space() {
    return " ";
  }

  public subcommand(text: string, definition?: NodeDefinition) {
    return `\u001b[36;1m${text}\u001b[0m`;
  }

  public testOperator(text: string, definition?: NodeDefinition) {
    return `\u001b[97m${text}\u001b[0m`;
  }

  public then(text: string, definition?: NodeDefinition) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  public variableName(text: string, definition?: NodeDefinition) {
    return `\u001b[36;1m${text}\u001b[0m`;
  }

  public while(text: string) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  public word(text: string, definition?: NodeDefinition) {
    return text;
  }
}
