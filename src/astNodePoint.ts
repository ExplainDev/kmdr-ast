import { NodePoint } from "./interfaces";
import { ASTNode } from ".";

/**
 *
 */
export default class ASTNodePoint implements NodePoint {
  public static areEqualRanges(
    range1: ASTNodePoint[],
    range2: ASTNodePoint[]
  ): boolean {
    return (
      range1[0].row === range2[0].row &&
      range1[0].column === range2[0].column &&
      range1[1].row === range2[1].row &&
      range1[1].column === range2[1].column
    );
  }

  public static deserializeRange(serialized: string): NodePoint[] {
    const [start, end] = serialized.split("-");

    const startPosition = start.split(",").map(n => parseInt(n, 10));
    const endPosition = end.split(",").map(n => parseInt(n, 10));

    return [
      new ASTNodePoint({ row: startPosition[0], column: startPosition[1] }),
      new ASTNodePoint({ row: endPosition[0], column: endPosition[1] })
    ];
  }

  public static isInRange(range: ASTNodePoint[], point: ASTNodePoint): boolean {
    const [startPosition, endPosition] = range;

    return (
      startPosition.row <= point.row &&
      startPosition.column <= point.column &&
      endPosition.row >= point.row &&
      endPosition.column > point.column
    );
  }

  public static rangeContainsRange(
    range: ASTNodePoint[],
    subrange: ASTNodePoint[]
  ): boolean {
    return (
      range[0].row <= subrange[0].row &&
      range[0].column <= subrange[0].column &&
      range[1].row >= subrange[1].row &&
      range[1].column >= subrange[1].column
    );
  }

  public static serializeRange(
    startPosition: ASTNodePoint,
    endPosition: ASTNodePoint
  ): string {
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
