import ASTNodePoint from "../src/astNodePoint";
import { NodePoint } from "../src/interfaces";
import { ASTNode } from "../src";

describe("ASTNodePoint", () => {
  test("A node point is created", () => {
    const nodePoint: NodePoint = {
      column: 2,
      row: 0
    };

    const astNodePoint = new ASTNodePoint(nodePoint);
    expect(astNodePoint).toMatchObject(nodePoint);
  });

  describe("Static functions", () => {
    test("A point is within a range", () => {
      const nodePoint = new ASTNodePoint({ column: 10, row: 0 });

      const range = [
        new ASTNodePoint({ column: 0, row: 0 }),
        new ASTNodePoint({ column: 11, row: 0 })
      ];

      expect(ASTNodePoint.isInRange(range, nodePoint)).toBeTruthy();
    });

    test("A point is not within a range", () => {
      const nodePoint = new ASTNodePoint({ column: 11, row: 0 });

      const range = [
        new ASTNodePoint({ column: 0, row: 0 }),
        new ASTNodePoint({ column: 11, row: 0 })
      ];

      expect(ASTNodePoint.isInRange(range, nodePoint)).toBeFalsy();
    });

    test("Two ranges are the same", () => {
      const range1 = [
        new ASTNodePoint({ column: 0, row: 0 }),
        new ASTNodePoint({ column: 11, row: 0 })
      ];

      const range2 = [
        new ASTNodePoint({ column: 0, row: 0 }),
        new ASTNodePoint({ column: 11, row: 0 })
      ];

      expect(ASTNodePoint.areEqualRanges(range1, range2)).toBeTruthy();
    });

    test("Two ranges are not the same", () => {
      const range1 = [
        new ASTNodePoint({ column: 0, row: 0 }),
        new ASTNodePoint({ column: 10, row: 0 })
      ];

      const range2 = [
        new ASTNodePoint({ column: 0, row: 0 }),
        new ASTNodePoint({ column: 11, row: 0 })
      ];

      expect(ASTNodePoint.areEqualRanges(range1, range2)).toBeFalsy();
    });

    test("a range contains another range", () => {
      const range = [
        new ASTNodePoint({ column: 0, row: 0 }),
        new ASTNodePoint({ column: 10, row: 0 })
      ];
      const subrange = [
        new ASTNodePoint({ column: 0, row: 0 }),
        new ASTNodePoint({ column: 9, row: 0 })
      ];

      expect(ASTNodePoint.rangeContainsRange(range, subrange)).toBeTruthy();
    });

    test("a range doesn't contain another range", () => {
      const range = [
        new ASTNodePoint({ column: 0, row: 0 }),
        new ASTNodePoint({ column: 10, row: 0 })
      ];
      const subrange = [
        new ASTNodePoint({ column: 0, row: 0 }),
        new ASTNodePoint({ column: 11, row: 0 })
      ];

      expect(ASTNodePoint.rangeContainsRange(range, subrange)).toBeFalsy();
    });

    test("a range is serialized", () => {
      const startPosition = new ASTNodePoint({ column: 0, row: 0 });
      const endPosition = new ASTNodePoint({ column: 10, row: 0 });

      expect(ASTNodePoint.serializeRange(startPosition, endPosition)).toEqual(
        "0,0-0,10"
      );
    });

    test("a range is deserialized", () => {
      const serialized = "2,10-2,100";

      const startPosition = new ASTNodePoint({ column: 10, row: 2 });
      const endPosition = new ASTNodePoint({ column: 100, row: 2 });

      expect(ASTNodePoint.deserializeRange(serialized)).toEqual([
        startPosition,
        endPosition
      ]);
    });
  });
});
