import { NodeDefinition, ThemeDecorators } from "../src/interfaces";

export default class BashDecorators implements ThemeDecorators<string> {
  public readonly language: "bash" | "css" = "bash";

  public argument(text: string, definition?: NodeDefinition) {
    return `${text}`;
  }

  public arithmeticOperator(text: string, definition?: NodeDefinition) {
    return `\u001b[97m${text}\u001b[0m`;
  }

  public backtick(text: string, definition?: NodeDefinition) {
    return `\u001b[97m${text}\u001b[0m`;
  }

  public bitwiseOperator(text: string, definition?: NodeDefinition) {
    return `\u001b[97m${text}\u001b[0m`;
  }

  public braces(text: string, definition?: NodeDefinition) {
    return `\u001b[92m${text}\u001b[0m`;
  }

  public brackets(text: string, definition?: NodeDefinition) {
    return `\u001b[92m${text}\u001b[0m`;
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

  public elif(text: string, definition?: NodeDefinition) {
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

  public missingProgram(text: string, definition?: NodeDefinition) {
    return `\u001b[32;1m${text}\u001b[0m`;
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

  public parens(text: string, definition?: NodeDefinition) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  public pipeline(text: string, definition?: NodeDefinition) {
    return `\u001b[91m${text}\u001b[0m`;
  }

  public program(text: string, definition?: NodeDefinition) {
    return `\u001b[32;1m${text}\u001b[0m`;
  }

  public property(text: string) {
    return text;
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

  public while(text: string, definition?: NodeDefinition) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  public word(text: string, definition?: NodeDefinition) {
    return text;
  }

  public createToken(text: string, type: string, definition?: NodeDefinition) {
    switch (type) {
      case "`":
        return this.backtick(text, definition);
      case `"`:
        return this.doubleQuotes(text);
      case "|":
        return this.pipeline(text, definition);
      case "&&":
      case "||":
      case "!":
        return this.logicalOperator(text, definition);
      case "(":
      case "$(":
      case ")":
        return this.parens(text, definition);
      case "{":
      case `\${`:
      case "}":
        return this.braces(text, definition);
      case "[[":
      case "]]":
      case "[":
      case "]":
        return this.brackets(text, definition);
      case ">":
      case ">&":
      case ">>":
      case "&>":
        return this.redirect(text, definition);
      case ";":
        return this.semicolon(text, definition);
      case "=":
        return this.equal(text, definition);
      case "==":
      case "!=":
      case "<":
      case "<=":
      case ">=":
        return this.relationalOperator(text, definition);
      case "argument":
        return this.argument(text, definition);
      case "command_name":
      case "program":
        return this.program(text, definition);
      case "comment":
        return this.comment(text, definition);
      case "do":
        return this.do(text, definition);
      case "done":
        return this.done(text, definition);
      case "file_descriptor":
        return this.fileDescriptor(text, definition);
      case "for":
        return this.for(text, definition);
      case "function":
        return this.fn(text, definition);
      case "if":
        return this.if(text, definition);
      case "else":
        return this.else(text, definition);
      case "elif":
        return this.elif(text, definition);
      case "fi":
        return this.fi(text, definition);
      case "in":
        return this.in(text, definition);
      case "missing_program":
        return this.missingProgram(text, definition);
      case "new_line":
        return this.newLine();
      case "option":
        return this.option(text, definition);
      case "optionArg":
        return this.optionArg(text, definition);
      case "pipeline":
        return this.bitwiseOperator(text, definition);
      case "subcommand":
        return this.subcommand(text, definition);
      case "test_operator":
        return this.testOperator(text, definition);
      case "then":
        return this.then(text, definition);
      case "variable_name":
        return this.variableName(text, definition);
      case "while":
        return this.while(text, definition);
      default:
        return this.word(text, definition);
    }
  }
}
