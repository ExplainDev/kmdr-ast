import { NodePoint } from "./interfaces";
import { ASTNode } from ".";

/**
 *
 */
export default class ASTNodePoint implements NodePoint {
  public static areEqualRanges(range1: ASTNodePoint[], range2: ASTNodePoint[]): boolean {
    return (
      range1[0].row === range2[0].row &&
      range1[0].column === range2[0].column &&
      range1[1].row === range2[1].row &&
      range1[1].column === range2[1].column
    );
  }

  public static deserializeRange(serialized: string): NodePoint[] {
    const [start, end] = serialized.split("-");

    const startPosition = start.split(",").map((n) => parseInt(n, 10));
    const endPosition = end.split(",").map((n) => parseInt(n, 10));

    return [
      new ASTNodePoint({ row: startPosition[0], column: startPosition[1] }),
      new ASTNodePoint({ row: endPosition[0], column: endPosition[1] }),
    ];
  }

  /**
   * Checks if a point is inside a node range
   *
   * @param range the range (start, end positions) of a node
   * @param point the point defined by row and column
   */
  public static isInRange(range: ASTNodePoint[], point: ASTNodePoint): boolean {
    const [startPosition, endPosition] = range;

    const rangeSpansMultipleLines = startPosition.row !== endPosition.row;

    if (rangeSpansMultipleLines) {
      // If the node spans 3 lines or more, just check if point it's in the middle...
      if (point.row > startPosition.row && point.row < endPosition.row) {
        return true;
      } else if (
        (point.row === startPosition.row && point.column >= startPosition.column) ||
        (point.row === endPosition.row && point.column < endPosition.column)
      ) {
        return true;
      }
    }

    return (
      startPosition.row <= point.row &&
      startPosition.column <= point.column &&
      endPosition.row >= point.row &&
      endPosition.column > point.column
    );
  }

  /**
   *
   * @param range
   * @param subrange
   */
  public static rangeContainsRange(range: ASTNodePoint[], subrange: ASTNodePoint[]): boolean {
    return (
      range[0].row <= subrange[0].row &&
      range[0].column <= subrange[0].column &&
      range[1].row >= subrange[1].row &&
      range[1].column >= subrange[1].column
    );
  }

  public static serializeRange(startPosition: ASTNodePoint, endPosition: ASTNodePoint): string {
    return `${startPosition.row},${startPosition.column}-${endPosition.row},${endPosition.column}`;
  }

  public column: number;
  public row: number;

  constructor(nodePoint: NodePoint) {
    const { column, row } = nodePoint;

    this.column = column;
    this.row = row;
  }
}
