import { NodeDefinition, ThemeDecorators } from "../src/interfaces";
import color from "ansi-colors";

export default class CSSDecorators implements ThemeDecorators<string> {
  private and(text: string, definition?: NodeDefinition) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  private braces(text: string) {
    return color.red(text);
  }

  private brackets(text: string, _definition?: NodeDefinition) {
    return `\u001b[92m${text}\u001b[0m`;
  }

  private colon(text: string) {
    return color.white(text);
  }

  private comment(text: string, _definition?: NodeDefinition) {
    return color.gray(text);
  }

  private className(text: string, definition?: NodeDefinition) {
    return `\u001b[32;1m${text}\u001b[0m`;
  }

  private comma(text: string) {
    return color.white(text);
  }

  private doubleQuotes(text: string, _definition?: NodeDefinition) {
    return `\u001b[35m${text}\u001b[0m`;
  }
  private hash(text: string, definition?: NodeDefinition) {
    return `\u001b[96m${text}\u001b[0m`;
  }

  private featureName(text: string, definition?: NodeDefinition) {
    return `\u001b[32;1m${text}\u001b[0m`;
  }

  private functionName(text: string, definition?: NodeDefinition) {
    return `\u001b[32;1m${text}\u001b[0m`;
  }

  private generic(text: string, definition?: NodeDefinition) {
    return text;
  }

  private idName(text: string, definition?: NodeDefinition) {
    return `\u001b[32;1m${text}\u001b[0m`;
  }

  private import(text: string, definition?: NodeDefinition) {
    return `\u001b[32;1m${text}\u001b[0m`;
  }

  private integerValue(text: string, definition?: NodeDefinition) {
    return color.white(text);
  }

  private media(text: string, definition?: NodeDefinition) {
    return `\u001b[32;1m${text}\u001b[0m`;
  }

  private missingProperty(text: string, definition?: NodeDefinition) {
    return `\u001b[32;1m${text}\u001b[0m`;
  }

  private newLine() {
    return "\n";
  }

  private parens(text: string) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  private plainValue(text: string) {
    return color.white(text);
  }

  private property(text: string, definition?: NodeDefinition) {
    return color.blue(text);
    // return `\u001b[32;1m${text}\u001b[0m`;
  }

  private semicolon(text: string, definition?: NodeDefinition) {
    return color.white(text);
  }

  private stringValue(text: string, definition?: NodeDefinition) {
    return text;
  }

  private tagName(text: string, definition?: NodeDefinition) {
    return color.red(text);
  }

  private unit(text: string, _definition?: NodeDefinition) {
    return color.white(text);
  }

  private universalSelector(text: string, definition?: NodeDefinition) {
    return `\u001b[35m${text}\u001b[0m`;
  }

  public createToken(text: string, type?: string, definition?: NodeDefinition) {
    switch (type) {
      case "*": {
        return this.universalSelector(text, definition);
      }
      case ",": {
        return this.comma(text);
      }
      case "#": {
        return this.hash(text, definition);
      }
      case ":": {
        this.colon(text);
      }
      case ";": {
        return this.semicolon(text, definition);
      }
      case "(":
      case ")": {
        return this.parens(text);
      }
      case "{":
      case "}": {
        return this.braces(text);
      }
      case "@media": {
        return this.media(text, definition);
      }
      case "@import": {
        return this.import(text, definition);
      }
      case "and": {
        return this.and(text, definition);
      }
      case "class_name": {
        return this.className(text, definition);
      }
      case "comment": {
        return this.comment(text, definition);
      }
      case "feature_name": {
        return this.featureName(text, definition);
      }
      case "function_name": {
        return this.functionName(text, definition);
      }
      case "id_name": {
        return this.idName(text, definition);
      }
      case "integer_value": {
        return this.integerValue(text, definition);
      }
      case "missing_property": {
        return this.missingProperty(text, definition);
      }
      case "new_line": {
        return this.newLine();
      }
      case "plain_value": {
        return this.plainValue(text);
      }
      case "property": {
        return this.property(text, definition);
      }
      case "string_value": {
        return this.stringValue(text, definition);
      }
      case "tag_name": {
        return this.tagName(text, definition);
      }
      case "unit": {
        return this.unit(text, definition);
      }
      default:
        return this.generic(text, definition);
    }
  }
}
