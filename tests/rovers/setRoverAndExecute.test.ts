import { setRoverAndExecute } from "../../src/rovers/setRoverAndExecute";

describe("setRoverInitialPosition", () => {
  test("Checking if the given position is valid string or not", () => {
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
    ).toBe("5 2 E");
  });
});
