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
}
