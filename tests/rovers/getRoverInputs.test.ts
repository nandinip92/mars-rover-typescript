import { getRoverInputs } from "../../src/rovers/getRoverInputs";

describe("getRoverInputs", () => {
  test("throws an error if invalid input is passed", () => {
    //Arrange, Act and Assert
    const boundary = { lowerBound: { x: 0, y: 0 }, upperBound: { x: 5, y: 5 } };
    expect(() => {
      getRoverInputs(boundary, "12345");
    }).toThrow(
      "Invalid input. Input must contain X and Y co-ordinates and a compass direction (N|E|S|W) seperated by space - X Y Direction"
    );

    expect(() => {
      getRoverInputs(boundary, "1 3 5 2 7");
    }).toThrow(
      "Invalid input. Input must contain X and Y co-ordinates and a compass direction (N|E|S|W) seperated by space - X Y Direction"
    );
    expect(() => {
      getRoverInputs(boundary, " 5 T N");
    }).toThrow(
      "Invalid input. Input must contain X and Y co-ordinates and a compass direction (N|E|S|W) seperated by space - X Y Direction"
    );

    expect(() => {
      getRoverInputs(boundary, " 3 4 Y");
    }).toThrow("Invalid input. compass direction must be (N|E|S|W)");
  });
});
