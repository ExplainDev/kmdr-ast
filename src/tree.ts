/**
 * Copyright 2019 Eddie Ramirez
 */

import ASTNode from "./astNode";
import { Node } from "./interfaces";
import TreeCursor from "./treeCursor";

export default class Tree {
  public readonly rootNode: ASTNode;

  constructor(rootNode: Node) {
    this.rootNode = new ASTNode(rootNode);
  }

  public walk(): TreeCursor {
    return new TreeCursor(this.rootNode);
  }

  public flatten(): ASTNode[] {
    const cursor = this.walk();
    const stack = new Array(cursor.currentNode);

    let flatTree: ASTNode[] = [];

    while (stack.length) {
      const current = stack.pop();

      if (current) {
        if (current.children) {
          stack.push(...current.children);
        }

        if (current.children === undefined || current.children.length === 0) {
          flatTree = [current, ...flatTree];
        }
      }
    }

    return flatTree;
  }

  public *flattenGenerator() {
    const cursor = this.walk();
    const stack = new Array(cursor.currentNode);

    while (stack.length) {
      const current = stack.pop();

      if (current) {
        if (current.children) {
          stack.push(...current.children.reverse());
        }

        if (current.children === undefined || current.children.length === 0) {
          yield current;
        }
      }
    }
  }
}
