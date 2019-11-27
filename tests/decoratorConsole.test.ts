import { createElement } from "react";
import renderer from "react-test-renderer";
import {
  ArgumentNode,
  AssignmentNode,
  OptionNode,
  OptionWithArgNode,
  ProgramNode,
  RedirectNode,
  StickyOptionNode,
  SubcommandNode,
  OperatorNode,
  OperandNode
} from "../src";
import DecoratorConsole from "../src/decoratorConsole";

describe("Decorator in console", () => {
  let decorator: DecoratorConsole;

  beforeAll(() => {
    const decorators = {
      argument: (node: ArgumentNode) => {
        const { word } = node;
        return `\u001b[31m${word}\u001b[0m`;
      },
      assignment: (node: AssignmentNode) => {
        const { name, value } = node;
        const decoratedName = `\u001b[31m${name}\u001b[0m`;
        const decoratedValue = `\u001b[31m${value}\u001b[0m`;
        return `${decoratedName}=${decoratedValue}`;
      },
      fileDescriptor: (str: string) => {
        return `\u001b[33m${str}\u001b[0m`;
      },
      operand: (node: OperandNode) => {
        const { word } = node;
        return `\u001b[33m${word}\u001b[0m`;
      },
      operator: (node: OperatorNode) => {
        const { op } = node;
        return `\u001b[34m${op}\u001b[0m`;
      },
      option: (node: OptionNode) => {
        const { word } = node;
        return `\u001b[35m${word}\u001b[0m`;
      },
      optionWithArg: (node: OptionWithArgNode) => {
        const { arg, option } = node;
        const decoratedOption = decorators.option(option);
        const decoratedArgument = decorators.argument(arg);
        return `${decoratedOption}=${decoratedArgument}`;
      },
      pipe: (s: string) => `\u001b[31;1m${s}\u001b[0m`,
      program: (node: ProgramNode) => {
        const { word } = node;
        return `\u001b[32;1m${word}\u001b[0m`;
      },
      redirect: (node: RedirectNode) => {
        const { input, output, output_fd, type } = node;
        let decoratedNode = "";
        if (input !== null) {
          decoratedNode = decorators.fileDescriptor(input.toString());
        }

        decoratedNode += `\u001b[33;1m${type}\u001b[0m`;

        if (output === null && output_fd) {
          decoratedNode += decorators.fileDescriptor(output_fd.toString());
        } else if (typeof output === "object" && output.kind === "word") {
          decoratedNode += ` ${decorators.word(output.word)}`;
        }
        return decoratedNode;
      },
      reservedword: (s: string) => `\u001b[34;1m${s}\u001b[0m`,
      subcommand: (s: string) => `\u001b[36;1m${s}\u001b[0m`,
      sudo: (s: string) => `\u001b[37;1m${s}\u001b[0m`,
      word: (s: string) => `\u001b[35m${s}\u001b[0m`
    };

    decorator = new DecoratorConsole(decorators);
  });

  test("wraps an ArgumentNode in red color", () => {
    const node: ArgumentNode = {
      kind: "argument",
      pos: [0, 4],
      word: "bar"
    };

    const decoratedString = decorator.decorate(node);
    expect(decoratedString).toStrictEqual("[31mbar[0m");
  });

  test("wraps token parts in an AssignmentNode in red color, leave the '=' without decoration", () => {
    const node: AssignmentNode = {
      kind: "assignment",
      name: "foo",
      name_pos: [0, 4],
      pos: [0, 7],
      value: "bar",
      value_pos: [4, 7],
      word: "foo=bar"
    };

    const decoratedString = decorator.decorate(node);
    expect(decoratedString).toStrictEqual("[31mfoo[0m=[31mbar[0m");
  });

  test("wraps token parts in an OptionWithArg individually", () => {
    // --user=root
    // 0123456789A
    const node: OptionWithArgNode = {
      kind: "optionWithArg",
      arg: {
        arg: "root",
        kind: "argument",
        pos: [7, 11],
        word: "root"
      },
      option: {
        kind: "option",
        opt: "--user",
        optPos: [0, 6],
        optionSchema: {
          long: ["--user"],
          summary: "Sets the username"
        },
        pos: [0, 7],
        word: "--user"
      },
      word: "--user=root",
      pos: [0, 11]
    };

    const decoratedString = decorator.decorate(node);
    expect(decoratedString).toStrictEqual("[35m--user[0m=[31mroot[0m");
  });

  test("wraps a RedirectNode", () => {
    const node: RedirectNode = {
      kind: "redirect",
      type: ">",
      output: {
        kind: "word",
        pos: [5, 14],
        word: "/dev/null"
      },
      input: null,
      pos: [3, 14]
    };

    const decoratedString = decorator.decorate(node);
    expect(decoratedString).toStrictEqual("[33;1m>[0m [35m/dev/null[0m");
  });

  test("wraps a ProgramNode in green color", () => {
    const node: ProgramNode = {
      kind: "program",
      pos: [0, 5],
      programName: "kmdr",
      word: "kmdr",
      schema: {
        name: "kmdr",
        summary: "The ultimate CLI learning tool"
      }
    };

    const decoratedString = decorator.decorate(node);
    expect(decoratedString).toStrictEqual("[32;1mkmdr[0m");
  });
});
