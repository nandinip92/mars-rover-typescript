import { setRoverAndExecute } from "../../src/rovers/setRoverAndExecute";

describe("setRoverInitialPosition", () => {
  test("Checking if the given position is valid string or not", () => {
    //Arrange
    const boundary = { lowerBound: { x: 0, y: 0 }, upperBound: { x: 5, y: 5 } };

    const output1 = { coOrds: [1, 2], currentDirection: "N" };
    //Act and Assert
    expect(setRoverAndExecute(boundary, [1, 2, "N"])).toBe(output1);

    const output2 = { coOrds: [3, 3], currentDirection: "E" };
    expect(setRoverAndExecute(boundary, [3, 3, "E"])).toBe(output2);
  });
});
