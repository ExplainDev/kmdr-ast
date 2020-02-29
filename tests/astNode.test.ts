import ASTNode from "../src/astNode";
import { Node } from "../src/interfaces";

describe("ASTNode", () => {
  test("A node is created", () => {
    const node: Node = {
      endPosition: { row: 0, column: 2 },
      hasError: false,
      isMissing: false,
      startPosition: { row: 0, column: 0 },
      text: "ls",
      type: "word"
    };

    const astNode = new ASTNode(node);
    expect(astNode).toMatchObject(node);
  });

  test("A node with children", () => {
    const node: Node = {
      children: [
        {
          endPosition: {
            column: 0,
            row: 3
          },
          startPosition: {
            column: 0,
            row: 0
          },
          type: "word"
        },
        {
          endPosition: {
            column: 0,
            row: 5
          },

          startPosition: {
            column: 0,
            row: 3
          },
          type: "word"
        }
      ],
      endPosition: { row: 0, column: 5 },
      hasError: false,
      isMissing: false,
      startPosition: { row: 0, column: 0 },
      text: "ls",
      type: "word"
    };

    const astNode = new ASTNode(node);
    expect(astNode.children?.length).toEqual(2);
  });
});
