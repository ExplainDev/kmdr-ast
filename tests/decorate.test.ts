import Decorate from "../src/decorate";
import { OptionNodeDefinition } from "../src";
import { consoleDecorators } from "./decorators.sample";

describe("Decorate in console mode", () => {
  let decorate: Decorate;

  beforeAll(() => {
    decorate = new Decorate(consoleDecorators);
  });

  test("Decorates an option string", () => {
    const decoratedStr = decorate.option("--option");
    expect(decoratedStr).toEqual(`\u001b[35m--option\u001b[0m`);
  });

  test("Decorates a program string", () => {
    const decoratedStr = decorate.program("kmdr");

    expect(decoratedStr).toEqual(`\u001b[32;1mkmdr\u001b[0m`);
  });

  test("Decorates a subcommand string", () => {
    const decoratedStr = decorate.subcommand("explain");

    expect(decoratedStr).toEqual(`\u001b[36;1mexplain\u001b[0m`);
  });

  test("Decorates an operator string", () => {
    const decoratedStr = decorate.operator("&&");

    expect(decoratedStr).toEqual(`\u001b[34m&&\u001b[0m`);
  });
});
