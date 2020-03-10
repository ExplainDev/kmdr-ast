import { Node } from "../src/interfaces";
import Tree from "../src/tree";

describe("Tree", () => {
  test("A tree is created", () => {
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

    expect(tree.rootNode).toMatchObject(node);
  });

  test("A tree is flatten", () => {
    const node: Node = {
      children: [
        {
          children: [
            {
              children: [
                {
                  children: [],
                  endPosition: { row: 0, column: 2 },
                  hasError: false,
                  isMissing: false,
                  startPosition: { row: 0, column: 0 },
                  type: "word",
                  text: "rm"
                }
              ],
              endPosition: { row: 0, column: 2 },
              hasError: false,
              isMissing: false,
              startPosition: { row: 0, column: 0 },
              type: "command_name"
            },
            {
              children: [],
              endPosition: { row: 0, column: 6 },
              hasError: false,
              isMissing: false,
              startPosition: { row: 0, column: 3 },
              type: "word",
              text: "-rf"
            },
            {
              children: [],
              endPosition: { row: 0, column: 17 },
              hasError: false,
              isMissing: false,
              startPosition: { row: 0, column: 7 },
              type: "word",
              text: "directory/"
            }
          ],
          endPosition: { row: 0, column: 17 },
          hasError: false,
          isMissing: false,
          startPosition: { row: 0, column: 0 },
          type: "command"
        }
      ],
      endPosition: { row: 0, column: 17 },
      hasError: false,
      isMissing: false,
      startPosition: { row: 0, column: 0 },
      type: "program"
    };

    const tree = new Tree(node);

    expect(tree.flatten().length).toEqual(3);
  });

  test("A tree is flatten with generators", () => {
    const node: Node = {
      children: [
        {
          children: [
            {
              children: [
                {
                  children: [],
                  endPosition: { row: 0, column: 2 },
                  hasError: false,
                  isMissing: false,
                  startPosition: { row: 0, column: 0 },
                  type: "word",
                  text: "rm"
                }
              ],
              endPosition: { row: 0, column: 2 },
              hasError: false,
              isMissing: false,
              startPosition: { row: 0, column: 0 },
              type: "command_name"
            },
            {
              children: [],
              endPosition: { row: 0, column: 6 },
              hasError: false,
              isMissing: false,
              startPosition: { row: 0, column: 3 },
              type: "word",
              text: "-rf"
            },
            {
              children: [],
              endPosition: { row: 0, column: 17 },
              hasError: false,
              isMissing: false,
              startPosition: { row: 0, column: 7 },
              type: "word",
              text: "directory/"
            }
          ],
          endPosition: { row: 0, column: 17 },
          hasError: false,
          isMissing: false,
          startPosition: { row: 0, column: 0 },
          type: "command"
        }
      ],
      endPosition: { row: 0, column: 17 },
      hasError: false,
      isMissing: false,
      startPosition: { row: 0, column: 0 },
      type: "program"
    };

    const tree = new Tree(node);

    const g = tree.flattenGenerator();
    expect(g.next()).toMatchObject({ done: false });
    expect(g.next()).toMatchObject({ done: false });
    expect(g.next()).toMatchObject({ done: false });
    expect(g.next()).toMatchObject({ done: true });
  });
});
