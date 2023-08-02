import { getRoverInputs } from "../../src/rovers/getRoverInputs";

describe("getRoverInputs", () => {
  test("Returns the rover position and set of instructions", () => {
    // //Arrange, Act and Assert
    let boundary = {
      lowerLeftCorner: { x: 0, y: 0 },
      upperRightCorner: { x: 5, y: 5 },
    };
    let output = { coOrds: [1, 2], currentDirection: "N" };

    expect(() => {
      getRoverInputs(boundary, "SQUARE", "1 2 N");
    }).toBe(output);

    output = { coOrds: [3, 3], currentDirection: "E" };
    expect(() => {
      getRoverInputs(boundary, "SQUARE", "1 2 N");
    }).toBe(output);
  });
});
// const boundary = { lowerBound: { x: 0, y: 0 }, upperBound: { x: 5, y: 5 } };
// expect(() => {
//   getRoverInputs(boundary, "12345", "LMLMLMLM");
// }).toThrow(
//   "Invalid input. Input must contain X and Y co-ordinates and a compass direction (N|E|S|W) seperated by space - X Y Direction"
// );
// expect(() => {
//   getRoverInputs(boundary, "1 3 5 2 7", "RMRMRMRM");
// }).toThrow(
//   "Invalid input. Input must contain X and Y co-ordinates and a compass direction (N|E|S|W) seperated by space - X Y Direction"
// );
// expect(() => {
//   getRoverInputs(boundary, " 5 T N", "MMMM   MMM");
// }).toThrow(
//   "Invalid input. Input must contain X and Y co-ordinates and a compass direction (N|E|S|W) seperated by space - X Y Direction"
// );
// expect(() => {
//   getRoverInputs(boundary, " 3 4 Y", "RMLMRMLM");
// }).toThrow("Invalid input. compass direction must be (N|E|S|W)");
// expect(() => {
//   getRoverInputs(boundary, " 3 4 Y", "RMLMKJRLM");
// }).toThrow("Invalid Input, please enter Valid instructions [L | R |M]");
// });
// });
