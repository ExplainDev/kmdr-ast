import { Node } from "../src/interfaces";
import Tree from "../src/tree";

describe("TreeCursor", () => {
  test("gotoFirstChild", () => {
    const node: Node = {
      type: "command",
      startPosition: {
        column: 0,
        row: 0
      },
      endPosition: {
        column: 4,
        row: 0
      },
      children: [
        {
          endPosition: {
            column: 4,
            row: 0
          },
          startPosition: {
            column: 0,
            row: 0
          },
          type: "command_name"
        }
      ]
    };

    const tree = new Tree(node);
    const cursor = tree.walk();

    expect(cursor.gotoFirstChild()).toBeTruthy();
    const child = node.children ? node.children[0] : null;
    expect(cursor.currentNode).toMatchObject(child);
  });
});
