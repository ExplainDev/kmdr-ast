import color from "ansi-colors";
import { NodeDefinition, ThemeDecorators } from "../src/interfaces";

export default class HTMLDecorators implements ThemeDecorators<string> {
  public createToken(text: string, type: string, definition: NodeDefinition) {
    switch (type) {
      case "<":
      case "</":
      case "<!":
      case "/>":
      case ">": {
        return this.angleBrackets(text);
      }
      case '"':
      case "'": {
        return this.quote(text);
      }
      case "=": {
        return this.equals(text);
      }
      case "attribute_name": {
        return this.attributeName(text, definition);
      }
      case "attribute_value": {
        return this.attributeValue(text, definition);
      }
      case "comment": {
        return this.comment(text, definition);
      }
      case "doctype": {
        return this.doctype(text, definition);
      }
      case "element":
      case "tag_name": {
        return this.tagName(text, definition);
      }
      case "new_line": {
        return "\n";
      }
      case "raw_text": {
        return this.rawText(text);
      }
      case "text":
      default: {
        return this.text(text);
      }
    }
  }
  private angleBrackets(text: string) {
    return color.red(text);
  }

  private attributeName(text: string, _definition: NodeDefinition) {
    return color.green(text);
  }

  private attributeValue(text: string, _definition: NodeDefinition) {
    return color.magenta(text);
  }

  private comment(text: string, _definition: NodeDefinition) {
    return color.gray(text);
  }

  private doctype(text: string, _definition: NodeDefinition) {
    return color.red(text);
  }

  private equals(text: string) {
    return color.white(text);
  }

  private quote(text: string) {
    return color.white(text);
  }

  private rawText(text: string) {
    return text;
  }

  private tagName(text: string, _definition?: NodeDefinition) {
    return color.red(text);
  }

  private text(text: string, _definition?: NodeDefinition) {
    return text;
  }
}
