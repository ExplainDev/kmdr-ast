import { NodeDefinition } from "./interfaces";

export default class Decorate {
  private decorators: any;

  constructor(decorators: any) {
    this.decorators = decorators;
  }

  public backtick(text: string) {
    try {
      return this.decorators.backtick(text);
    } catch (err) {
      console.error(err);
    }
  }

  public closingBraces(text: string) {
    try {
      return this.decorators.closingBraces(text);
    } catch (err) {
      console.error(err);
    }
  }

  public closingParens(text: string, definition?: NodeDefinition) {
    try {
      return this.decorators.closingParens(text, definition);
    } catch (err) {
      console.error(err);
    }
  }

  public comment(text: string, definition?: NodeDefinition) {
    try {
      return this.decorators.comment(text, definition);
    } catch (err) {
      console.error(err);
    }
  }

  public do(text: string, definition?: NodeDefinition) {
    try {
      return this.decorators.do(text, definition);
    } catch (err) {
      console.error(err);
    }
  }

  public done(text: string, definition?: NodeDefinition) {
    try {
      return this.decorators.done(text, definition);
    } catch (err) {
      console.error(err);
    }
  }

  public equal(text: string, definition?: NodeDefinition) {
    try {
      return this.decorators.equal(text, definition);
    } catch (err) {
      console.error(err);
    }
  }

  public fileDescriptor(text: string, definition?: NodeDefinition) {
    try {
      return this.decorators.fileDescriptor(text, definition);
    } catch (err) {
      console.error(err);
    }
  }

  public fn(text: string, definition?: NodeDefinition) {
    try {
      return this.decorators.fn(text, definition);
    } catch (err) {
      console.error(err);
    }
  }

  public for(text: string, definition?: NodeDefinition) {
    try {
      return this.decorators.for(text, definition);
    } catch (err) {
      console.error(err);
    }
  }

  public in(text: string, definition?: NodeDefinition) {
    try {
      return this.decorators.in(text, definition);
    } catch (err) {
      console.error(err);
    }
  }

  public openingBraces(text: string) {
    try {
      return this.decorators.openingBraces(text);
    } catch (err) {
      console.error(err);
    }
  }

  public openingParens(text: string, definition?: NodeDefinition) {
    try {
      return this.decorators.openingParens(text, definition);
    } catch (err) {
      console.error(err);
    }
  }

  public operator(text: string, definition?: NodeDefinition) {
    try {
      return this.decorators.operator(text, definition);
    } catch (err) {
      console.error(err);
    }
  }

  public option(text: string, definition?: NodeDefinition) {
    try {
      return this.decorators.option(text, definition);
    } catch (err) {
      console.error(err);
    }
  }

  public pipeline(text: string, definition?: NodeDefinition) {
    try {
      return this.decorators.pipeline(text, definition);
    } catch (err) {
      console.error(err);
    }
  }

  public optionArg(text: string, definition?: NodeDefinition) {
    try {
      return this.decorators.optionArg(text, definition);
    } catch (err) {
      console.error(err);
    }
  }

  public program(text: string, definition?: NodeDefinition) {
    try {
      return this.decorators.program(text, definition);
    } catch (err) {
      console.error(err);
    }
  }

  public redirect(text: string, definition?: NodeDefinition) {
    try {
      return this.decorators.redirect(text, definition);
    } catch (err) {
      console.error(err);
    }
  }

  public semicolon(text: string, definition?: NodeDefinition) {
    try {
      return this.decorators.semicolon(text, definition);
    } catch (err) {
      console.error(err);
    }
  }

  public subcommand(text: string, definition?: NodeDefinition) {
    try {
      return this.decorators.subcommand(text, definition);
    } catch (err) {
      console.error(err);
    }
  }

  public variableName(text: string, definition?: NodeDefinition) {
    try {
      return this.decorators.variableName(text, definition);
    } catch (err) {
      console.error(err);
    }
  }

  public word(text: string, definition?: NodeDefinition) {
    return text;
  }

  public while(text: string, definition?: NodeDefinition) {
    try {
      return this.decorators.while(text, definition);
    } catch (err) {
      console.error(err);
    }
  }
}
