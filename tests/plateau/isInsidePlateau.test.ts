import exp from "constants";
import { isInsidePlateau } from "../../src/plateau/isInsidePlateau";

describe("isInsidePlateau", () => {
  test("Checking if the given coOrdinate is with in the plateau or not", () => {
    const boundary = { lowerBound: { x: 0, y: 0 }, upperBound: { x: 5, y: 5 } };
    expect(isInsidePlateau(boundary, [4, 5])).toBe(true);
    expect(isInsidePlateau(boundary, [1, 2])).toBe(true);
    expect(isInsidePlateau(boundary, [5, 5])).toBe(true);
    expect(isInsidePlateau(boundary, [12, 12])).toBe(false);
  });
});
