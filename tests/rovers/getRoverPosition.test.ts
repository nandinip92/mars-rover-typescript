import { getRoverPosition } from "../../src/rovers/getRoverInputs";

describe("getPlateauInputs", () => {
  test("Returns Valid rover Position", () => {
    let plateauCorner = {
      lowerLeftCorner: { x: 0, y: 0 },
      upperRightCorner: { x: 5, y: 5 },
    };
    let output = {
      coOrds: [1, 2],
      currentDirection: "N",
    };
    expect(getRoverPosition(plateauCorner, "SQUARE", "1 2 N")).toEqual(output);
  });
});
