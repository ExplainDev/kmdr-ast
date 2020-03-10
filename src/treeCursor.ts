import ASTNode from "./astNode";

export default class TreeCursor {
  public currentNode: ASTNode;

  constructor(currentNode: ASTNode) {
    this.currentNode = currentNode;
  }

  public gotoParent(): boolean {
    if (this.currentNode.parent) {
      this.currentNode = this.currentNode.parent;
      return true;
    }

    return false;
  }

  public gotoFirstChild(): boolean {
    if (this.currentNode.children?.length) {
      this.currentNode = this.currentNode.children[0];
      return true;
    }

    return false;
  }

  public gotoClosestCommandAncestor(): boolean {
    let current = this.currentNode;

    while (true) {
      if (current.parent && current.parent.type !== "command") {
        current = current.parent;
      } else if (current.parent?.type === "command") {
        this.currentNode = current.parent;
        return true;
      } else if (current.parent === undefined) {
        break;
      }
    }

    return false;
  }
}
