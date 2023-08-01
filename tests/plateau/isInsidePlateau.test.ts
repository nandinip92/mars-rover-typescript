import exp from "constants";
import { isOnPlateau } from "../../src/plateau/isInsidePlateau";

describe("isInsidePlateau", () => {
  test("Checking if the given coOrdinate is with in the Square plateau or not", () => {
    let boundary = {
      lowerLeftCorner: { x: 0, y: 0 },
      upperRightCorner: { x: 5, y: 5 },
    };
    expect(isOnPlateau(boundary, "Square", [4, 5])).toBe(true);
    expect(isOnPlateau(boundary, "Square", [1, 2])).toBe(true);
    expect(isOnPlateau(boundary, "Square", [5, 5])).toBe(true);
    expect(isOnPlateau(boundary, "Square", [12, 12])).toBe(false);

    boundary = {
      lowerLeftCorner: { x: 1, y: 1 },
      upperRightCorner: { x: 5, y: 5 },
    };

    expect(isOnPlateau(boundary, "Square", [0, 0])).toBe(false);
    expect(isOnPlateau(boundary, "Square", [8, 9])).toBe(false);
    expect(isOnPlateau(boundary, "Square", [3, 4])).toBe(true);
    expect(isOnPlateau(boundary, "Square", [1, 5])).toBe(true);
  });
  test("Checking if the given coOrdinate is with in the Rectangle plateau or not", () => {
    let boundary = {
      lowerLeftCorner: { x: 0, y: 0 },
      upperRightCorner: { x: 10, y: 4 },
    };
    expect(isOnPlateau(boundary, "Rectangle", [1, 2])).toBe(true);
    expect(isOnPlateau(boundary, "Rectangle", [5, 5])).toBe(true);
    expect(isOnPlateau(boundary, "Rectangle", [4, 5])).toBe(false);
    expect(isOnPlateau(boundary, "Rectangle", [12, 12])).toBe(false);
  });
});
