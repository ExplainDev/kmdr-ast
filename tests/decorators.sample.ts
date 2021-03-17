import { Decorators, Node, NodeDefinition } from "../src/interfaces";

export default class ConsoleDecorators implements Decorators<string> {
  public argument(text: string, node: Node, definition?: NodeDefinition) {
    return `${text}`;
  }

  public arithmeticOperator(text: string, node: Node, definition?: NodeDefinition) {
    return `\u001b[97m${text}\u001b[0m`;
  }

  public backtick(text: string, node: Node) {
    return `\u001b[97m${text}\u001b[0m`;
  }

  public bitwiseOperator(text: string, node: Node, definition?: NodeDefinition) {
    return `\u001b[97m${text}\u001b[0m`;
  }

  public braces(text: string, node: Node) {
    return `\u001b[92m${text}\u001b[0m`;
  }

  public brackets(text: string, node: Node) {
    return `\u001b[92m${text}\u001b[0m`;
  }

  public command(text: string, node: Node) {
    return text;
  }

  public comment(text: string, node: Node, definition?: NodeDefinition) {
    return `\u001b[90m${text}\u001b[0m`;
  }

  public do(text: string, node: Node, definition?: NodeDefinition) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  public doubleQuotes(text: string, node: Node, definition?: NodeDefinition) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  public done(text: string, node: Node, definition?: NodeDefinition) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  public elif(text: string, node: Node, definition?: NodeDefinition) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  public else(text: string, node: Node, definition?: NodeDefinition) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  public equal(text: string, node: Node, definition?: NodeDefinition) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  public fi(text: string, node: Node, definition?: NodeDefinition) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  public fileDescriptor(text: string, node: Node, definition?: NodeDefinition) {
    return `\u001b[96m${text}\u001b[0m`;
  }

  public fn(text: string, node: Node, definition?: NodeDefinition) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  public for(text: string, node: Node, definition?: NodeDefinition) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  public if(text: string, node: Node, definition?: NodeDefinition) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  public in(text: string, node: Node, definition?: NodeDefinition) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  public logicalOperator(text: string, node: Node, definition?: NodeDefinition) {
    return `\u001b[34m${text}\u001b[0m`;
  }

  public missingProgram(text: string, node: Node, definition?: NodeDefinition) {
    return `\u001b[32;1m${text}\u001b[0m`;
  }
  public newLine() {
    return "\n";
  }

  public option(text: string, node: Node, definition?: NodeDefinition) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  public optionArg(text: string, node: Node, definition?: NodeDefinition) {
    return `\u001b[31m${text}\u001b[0m`;
  }

  public parens(text: string, node: Node) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  public pipeline(text: string, node: Node, definition?: NodeDefinition) {
    return `\u001b[91m${text}\u001b[0m`;
  }

  public program(text: string, node: Node, definition?: NodeDefinition) {
    return `\u001b[32;1m${text}\u001b[0m`;
  }

  public property(text: string) {
    return text;
  }

  public redirect(text: string, node: Node, definition?: NodeDefinition) {
    return `\u001b[34m${text}\u001b[0m`;
  }

  public relationalOperator(text: string, node: Node, definition?: NodeDefinition) {
    return `\u001b[97m${text}\u001b[0m`;
  }

  public semicolon(text: string, node: Node, definition?: NodeDefinition) {
    return `\u001b[94m${text}\u001b[0m`;
  }

  public space() {
    return " ";
  }

  public subcommand(text: string, node: Node, definition?: NodeDefinition) {
    return `\u001b[36;1m${text}\u001b[0m`;
  }

  public testOperator(text: string, node: Node, definition?: NodeDefinition) {
    return `\u001b[97m${text}\u001b[0m`;
  }

  public then(text: string, node: Node, definition?: NodeDefinition) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  public variableName(text: string, node: Node, definition?: NodeDefinition) {
    return `\u001b[36;1m${text}\u001b[0m`;
  }

  public while(text: string, node: Node) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  public word(text: string, node: Node, definition?: NodeDefinition) {
    return text;
  }
}
