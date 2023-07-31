import { setRoverAndExecute } from "../../src/rovers/setRoverAndExecute";

describe("setRoverInitialPosition", () => {
  test("Return the final position of the rover", () => {
    //Arrange
    const boundary = { lowerBound: { x: 0, y: 0 }, upperBound: { x: 5, y: 5 } };

    //Act and Assert
    expect(
      setRoverAndExecute(
        boundary,
        { coOrds: [1, 2], currentDirection: "N" },
        "LMLMLMLMM"
      )
    ).toBe("1 3 N");

    expect(
      setRoverAndExecute(
        boundary,
        { coOrds: [3, 3], currentDirection: "E" },
        "MMRMMRMRRM"
      )
    ).toBe("5 1 E");
  });

  test("Rover should not move outside the Plateau boundary", () => {
    const boundary = { lowerBound: { x: 0, y: 0 }, upperBound: { x: 5, y: 5 } };
    expect(
      setRoverAndExecute(
        boundary,
        { coOrds: [2, 3], currentDirection: "S" },
        "MMMMMMMMM"
      )
    ).toBe("2 0 S");

    expect(
      setRoverAndExecute(
        boundary,
        { coOrds: [3, 3], currentDirection: "E" },
        "MMMMMMMMM"
      )
    ).toBe("5 3 E");
  });

  test("Testing if the lower right corner of the plateau is not on origin (0,0)", () => {
    const boundary = {
      lowerBound: { x: -2, y: -2 },
      upperBound: { x: 5, y: 5 },
    };
    expect(
      setRoverAndExecute(
        boundary,
        { coOrds: [2, 3], currentDirection: "W" },
        "MMMMMMMMM"
      )
    ).toBe("-2 3 W");
    expect(
      setRoverAndExecute(
        boundary,
        { coOrds: [-1, 3], currentDirection: "N" },
        "MMMMMMMMM"
      )
    ).toBe("-1 5 N");

    expect(
      setRoverAndExecute(
        boundary,
        { coOrds: [-1, -1], currentDirection: "E" },
        "MMLMRMM"
      )
    ).toBe("3 0 E");
  });
});
