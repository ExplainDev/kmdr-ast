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

  test("gotoParent", () => {
    const root: Node = {
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
    const tree = new Tree(root);
    const cursor = tree.walk();

    expect(cursor.gotoFirstChild()).toBeTruthy();
    expect(cursor.gotoParent()).toBeTruthy();
    const parent = root;
    expect(cursor.currentNode).toMatchObject(parent);
  });

  test("gotoClosestCommandAncestor", () => {
    const root: Node = {
      children: [
        {
          children: [
            {
              children: [
                {
                  endPosition: { row: 0, column: 4 },
                  hasError: false,
                  isMissing: false,
                  isNamed: true,
                  startPosition: { row: 0, column: 0 },
                  type: "word",
                  text: "sudo"
                }
              ],
              endPosition: { row: 0, column: 4 },
              hasError: false,
              isMissing: false,
              isNamed: true,
              startPosition: { row: 0, column: 0 },
              type: "command_name"
            },
            {
              endPosition: { row: 0, column: 7 },
              hasError: false,
              isMissing: false,
              isNamed: true,
              startPosition: { row: 0, column: 5 },
              type: "word",
              text: "rm"
            },
            {
              endPosition: { row: 0, column: 11 },
              hasError: false,
              isMissing: false,
              isNamed: true,
              startPosition: { row: 0, column: 8 },
              type: "word",
              text: "-rf"
            }
          ],
          endPosition: { row: 0, column: 11 },
          hasError: false,
          isMissing: false,
          isNamed: true,
          startPosition: { row: 0, column: 0 },
          type: "command"
        },
        {
          endPosition: { row: 1, column: 0 },
          hasError: false,
          isMissing: false,
          isNamed: false,
          startPosition: { row: 0, column: 11 },
          type: "\n",
          text: "\n"
        }
      ],
      endPosition: { row: 1, column: 0 },
      hasError: false,
      isMissing: false,
      isNamed: true,
      startPosition: { row: 0, column: 0 },
      type: "program"
    };

    const tree = new Tree(root);
    const cursor = tree.walk();

    expect(cursor.gotoFirstChild()).toBeTruthy(); // go to command
    expect(cursor.gotoFirstChild()).toBeTruthy(); // go to command_name
    expect(cursor.gotoFirstChild()).toBeTruthy(); // go to word
    expect(cursor.gotoClosestCommandAncestor()).toBeTruthy();

    if (root.children && root.children[0]) {
      expect(cursor.currentNode).toMatchObject(root.children[0]);
    }
  });
});
