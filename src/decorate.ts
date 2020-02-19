import { NodeDefinition } from "./interfaces";

export default class Decorate {
  private decorators: any;

  constructor(decorators: any) {
    this.decorators = decorators;
  }

  public backtick<T>(text: string): T {
    try {
      return this.decorators.backtick(text);
    } catch (err) {
      console.error(err);
      return this.word<T>(text);
    }
  }

  public closingBraces<T>(text: string): T {
    try {
      return this.decorators.closingBraces(text);
    } catch (err) {
      console.error(err);
      return this.word<T>(text);
    }
  }

  public closingParens<T>(text: string, definition?: NodeDefinition): T {
    try {
      return this.decorators.closingParens(text, definition);
    } catch (err) {
      console.error(err);
      return this.word<T>(text, definition);
    }
  }

  public comment<T>(text: string, definition?: NodeDefinition): T {
    try {
      return this.decorators.comment(text, definition);
    } catch (err) {
      console.error(err);
      return this.word<T>(text, definition);
    }
  }

  public do<T>(text: string, definition?: NodeDefinition): T {
    try {
      return this.decorators.do(text, definition);
    } catch (err) {
      console.error(err);
      return this.word<T>(text, definition);
    }
  }

  public done<T>(text: string, definition?: NodeDefinition): T {
    try {
      return this.decorators.done(text, definition);
    } catch (err) {
      console.error(err);
      return this.word<T>(text, definition);
    }
  }

  public equal<T>(text: string, definition?: NodeDefinition): T {
    try {
      return this.decorators.equal(text, definition);
    } catch (err) {
      console.error(err);
      return this.word<T>(text, definition);
    }
  }

  public fileDescriptor<T>(text: string, definition?: NodeDefinition): T {
    try {
      return this.decorators.fileDescriptor(text, definition);
    } catch (err) {
      console.error(err);
      return this.word<T>(text, definition);
    }
  }

  public fn<T>(text: string, definition?: NodeDefinition): T {
    try {
      return this.decorators.fn(text, definition);
    } catch (err) {
      console.error(err);
      return this.word<T>(text, definition);
    }
  }

  public for<T>(text: string, definition?: NodeDefinition): T {
    try {
      return this.decorators.for(text, definition);
    } catch (err) {
      console.error(err);
      return this.word<T>(text, definition);
    }
  }

  public in<T>(text: string, definition?: NodeDefinition): T {
    try {
      return this.decorators.in(text, definition);
    } catch (err) {
      console.error(err);
      return this.word<T>(text, definition);
    }
  }

  public openingBraces<T>(text: string): T {
    try {
      return this.decorators.openingBraces(text);
    } catch (err) {
      console.error(err);
      return this.word<T>(text);
    }
  }

  public openingParens<T>(text: string, definition?: NodeDefinition): T {
    try {
      return this.decorators.openingParens(text, definition);
    } catch (err) {
      console.error(err);
      return this.word<T>(text, definition);
    }
  }

  public operator<T>(text: string, definition?: NodeDefinition): T {
    try {
      return this.decorators.operator(text, definition);
    } catch (err) {
      console.error(err);
      return this.word<T>(text, definition);
    }
  }

  public option<T>(text: string, definition?: NodeDefinition): T {
    try {
      return this.decorators.option(text, definition);
    } catch (err) {
      console.error(err);
      return this.word<T>(text, definition);
    }
  }

  public pipeline<T>(text: string, definition?: NodeDefinition): T {
    try {
      return this.decorators.pipeline(text, definition);
    } catch (err) {
      console.error(err);
      return this.word<T>(text, definition);
    }
  }

  public optionArg<T>(text: string, definition?: NodeDefinition): T {
    try {
      return this.decorators.optionArg(text, definition);
    } catch (err) {
      console.error(err);
      return this.word<T>(text, definition);
    }
  }

  public program<T>(text: string, definition?: NodeDefinition): T {
    try {
      return this.decorators.program(text, definition);
    } catch (err) {
      console.error(err);
      return this.word<T>(text, definition);
    }
  }

  public redirect<T>(text: string, definition?: NodeDefinition): T {
    try {
      return this.decorators.redirect(text, definition);
    } catch (err) {
      console.error(err);
      return this.word<T>(text, definition);
    }
  }

  public semicolon<T>(text: string, definition?: NodeDefinition): T {
    try {
      return this.decorators.semicolon(text, definition);
    } catch (err) {
      console.error(err);
      return this.word<T>(text);
    }
  }

  public subcommand<T>(text: string, definition?: NodeDefinition): T {
    try {
      return this.decorators.subcommand(text, definition);
    } catch (err) {
      console.error(err);
      return this.word<T>(text, definition);
    }
  }

  public variableName<T>(text: string, definition?: NodeDefinition): T {
    try {
      return this.decorators.variableName(text, definition);
    } catch (err) {
      console.error(err);
      return this.word<T>(text, definition);
    }
  }

  public word<T>(text: string, definition?: NodeDefinition): T {
    return this.decorators.word(text, definition);
  }

  public while<T>(text: string, definition?: NodeDefinition): T {
    try {
      return this.decorators.while(text, definition);
    } catch (err) {
      console.error(err);
      return this.word<T>(text, definition);
    }
  }
}
