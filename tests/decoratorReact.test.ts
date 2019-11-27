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
import DecoratorReact from "../src/decoratorReact";

describe("Decorator in React mode", () => {
  let decorator: DecoratorReact;

  beforeAll(() => {
    const decorators = {
      argument: (node: ArgumentNode) => {
        const { kind, word } = node;
        return createElement("span", { kind }, word);
      },

      option: (node: OptionNode) => {
        const {
          kind,
          opt,
          optionSchema: { summary, long, short, expectsArg }
        } = node;
        return createElement("span", { kind, summary }, opt);
      },
      optionWithArg: (node: OptionWithArgNode) => {
        const { arg, kind, option } = node;
        const optionElement = decorators.option(option);

        const argumentElement = decorators.argument(arg);

        return createElement("span", { kind }, [
          optionElement,
          "=",
          argumentElement
        ]);
      },
      subcommand: (node: SubcommandNode) => {
        const {
          kind,
          schema: { summary, name },
          word
        } = node;
        return createElement("span", { kind, summary }, word);
      }
    };

    decorator = new DecoratorReact(decorators);
  });

  test("wraps an OptionNode in a span element", () => {
    const node: OptionNode = {
      kind: "option",
      opt: "--user",
      optPos: [0, 6],
      optionSchema: {
        long: ["--user"],
        summary: "Sets the username"
      },
      pos: [0, 7],
      word: "--user"
    };

    const decoratedNode = decorator.decorate(node);
    const tree = renderer.create(decoratedNode).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("wraps a SubcommandNode in a span element", () => {
    const node: SubcommandNode = {
      kind: "subcommand",
      pos: [4, 10],
      schema: {
        name: "commit",
        summary: "commit changes to repository"
      },
      word: "commit"
    };

    const decoratedNode = decorator.decorate(node);
    const tree = renderer.create(decoratedNode).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("wraps an ArgumentNode in a span element", () => {
    const node: ArgumentNode = {
      kind: "argument",
      pos: [0, 4],
      word: "value"
    };

    const decoratedNode = decorator.decorate(node);
    const tree = renderer.create(decoratedNode).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("wraps an OptionWithArg node in a span element", () => {
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

    const decoratedNode = decorator.decorate(node);
    const tree = renderer.create(decoratedNode).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
