import { Option } from "kmdr-parser";
import { OptionNodeDefinition } from "../src/nodeDefinition";
import { NodeDefinition } from "../src/interfaces";

describe("NodeDefinition", () => {
  test("A node definition for an option", () => {
    const option = new Option({ summary: "set the username", short: ["-u"] });

    const endPosition = { row: 0, column: 2 };

    const startPosition = { row: 0, column: 0 };

    const astNodeDefinition = new OptionNodeDefinition(
      startPosition,
      endPosition,
      option
    );
    expect(astNodeDefinition).toMatchObject({
      startPosition,
      endPosition,
      metadata: {
        summary: "set the username"
      }
    });
  });
});
