import { setRoverAndExecute } from "../../src/rovers/setRoverAndExecute";

describe("setRoverInitialPosition", () => {
  test("Checking if rover is giving", () => {
    //Arrange
    let boundary = { lowerBound: { x: 0, y: 0 }, upperBound: { x: 5, y: 5 } };

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

    expect(
      setRoverAndExecute(
        boundary,
        { coOrds: [2, 3], currentDirection: "S" },
        "MMMMMMMMM"
      )
    ).toBe("2 0 S");
  });
});
