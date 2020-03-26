import { Node, NodePoint } from "./interfaces";

export default class ASTNode implements Node {
  public readonly childCount?: number;
  public readonly children?: Node[];
  public readonly endPosition: NodePoint;
  public readonly hasError?: boolean;
  public readonly isMissing?: boolean;
  public readonly isNamed?: boolean;
  public readonly parent?: ASTNode;
  public readonly startPosition: NodePoint;
  public readonly type: string;
  public readonly text?: string;

  constructor(node: Node, parent?: Node) {
    const {
      childCount,
      children,
      endPosition,
      hasError,
      isMissing,
      isNamed,
      startPosition,
      type,
      text
    } = node;

    this.childCount = childCount;
    this.endPosition = endPosition;
    this.hasError = hasError;
    this.isMissing = isMissing;
    this.isNamed = isNamed;
    this.startPosition = startPosition;
    this.type = type;
    this.text = text;
    this.parent = parent;

    // Create children AST nodes
    if (children?.length) {
      this.children = children.map(child => new ASTNode(child, this));
    }
  }
}
