import { isOnPlateau } from "../../src/plateau/isOnPlateau";

describe("isInsidePlateau", () => {
  test("Checking if the given coOrdinate is with in the Square plateau or not", () => {
    let boundary = {
      lowerLeftCorner: { x: 0, y: 0 },
      upperRightCorner: { x: 5, y: 5 },
    };
    expect(isOnPlateau(boundary, "SQUARE", [4, 5])).toBe(true);
    expect(isOnPlateau(boundary, "SQUARE", [1, 2])).toBe(true);
    expect(isOnPlateau(boundary, "SQUARE", [5, 5])).toBe(true);
    expect(isOnPlateau(boundary, "SQUARE", [12, 12])).toBe(false);

    boundary = {
      lowerLeftCorner: { x: 1, y: 1 },
      upperRightCorner: { x: 5, y: 5 },
    };

    expect(isOnPlateau(boundary, "SQUARE", [0, 0])).toBe(false);
    expect(isOnPlateau(boundary, "SQUARE", [8, 9])).toBe(false);
    expect(isOnPlateau(boundary, "SQUARE", [3, 4])).toBe(true);
    expect(isOnPlateau(boundary, "SQUARE", [1, 5])).toBe(true);
  });
  test("Checking if the given coOrdinate is with in the Rectangle plateau or not", () => {
    let boundary = {
      lowerLeftCorner: { x: 0, y: 0 },
      upperRightCorner: { x: 10, y: 4 },
    };
    expect(isOnPlateau(boundary, "RECTANGLE", [6, 2])).toBe(true);
    expect(isOnPlateau(boundary, "RECTANGLE", [10, 3])).toBe(true);
    expect(isOnPlateau(boundary, "RECTANGLE", [4, 5])).toBe(false);
    expect(isOnPlateau(boundary, "RECTANGLE", [12, 12])).toBe(false);
  });
});
