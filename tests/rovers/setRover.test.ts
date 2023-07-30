import { setRoverInitialPosition } from "../../src/rovers/setRover";

describe("setRoverInitialPosition", () => {
  test("throws an error if invalid input is passed", () => {
    //Arrange, Act and Assert
    const boundary = { lowerBound: { x: 0, y: 0 }, upperBound: { x: 5, y: 5 } };
    expect(() => {
      setRoverInitialPosition(boundary, "12345");
    }).toThrow(
      "Invalid input. Input must contain X and Y co-ordinates and a compass direction (N|E|S|W) seperated by space - X Y Direction"
    );

    expect(() => {
      setRoverInitialPosition(boundary, "1 3 5 2 7");
    }).toThrow(
      "Invalid input. Input must contain X and Y co-ordinates and a compass direction (N|E|S|W) seperated by space - X Y Direction"
    );
    expect(() => {
      setRoverInitialPosition(boundary, " 5 T N");
    }).toThrow(
      "Invalid input. Input must contain X and Y co-ordinates and a compass direction (N|E|S|W) seperated by space - X Y Direction"
    );

    expect(() => {
      setRoverInitialPosition(boundary, " 3 4 Y");
    }).toThrow("Invalid input. compass direction must be (N|E|S|W)");
  });

  test("Checking if the given position is valid string or not", () => {
    //Arrange
    const boundary = { lowerBound: { x: 0, y: 0 }, upperBound: { x: 5, y: 5 } };

    const output1 = { coOrds: [1, 2], currentDirection: "N" };
    //Act and Assert
    expect(setRoverInitialPosition(boundary, "1 2 N")).toBe(output1);

    const output2 = { coOrds: [3, 3], currentDirection: "E" };
    expect(setRoverInitialPosition(boundary, "1 2 N")).toBe(output2);
  });
});
