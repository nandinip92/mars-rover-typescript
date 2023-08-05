import { getRoverPosition } from "../../src/rovers/getRoverPosition";

describe("getPlateauInputs", () => {
  test("Returns Valid rover Position", () => {
    //ARRANGE
    let plateauCorner = {
      lowerLeftCorner: { x: 0, y: 0 },
      upperRightCorner: { x: 5, y: 5 },
    };
    let output = {
      coOrds: [1, 2],
      currentDirection: "N",
    };
    //ACT
    let funcOutput = getRoverPosition(plateauCorner, "SQUARE", "1 2 N");
    //ASSERT
    expect(funcOutput).toEqual(output);

    output = {
      coOrds: [3, 3],
      currentDirection: "E",
    };
    //ASSERT
    funcOutput = getRoverPosition(plateauCorner, "SQUARE", "3    3  E");
    expect(funcOutput).toEqual(output);

    //ARRANGE
    plateauCorner = {
      lowerLeftCorner: { x: 4, y: 4 },
      upperRightCorner: { x: 10, y: 10 },
    };
    output = {
      coOrds: [6, 5],
      currentDirection: "S",
    };
    //ACT
    funcOutput = getRoverPosition(plateauCorner, "SQUARE", " 6 5 S ");
    //ASSERT
    expect(funcOutput).toEqual(output);
    plateauCorner = {
      lowerLeftCorner: { x: 0, y: 0 },
      upperRightCorner: { x: 10, y: 4 },
    };
    output = {
      coOrds: [7, 1],
      currentDirection: "W",
    };
    funcOutput = getRoverPosition(plateauCorner, "RECTANGLE", " 7 1 W ");
    expect(funcOutput).toEqual(output);
  });

  test("Returns Error if the invalid Input format is given", () => {
    //ARRANGE
    let plateauCorner = {
      lowerLeftCorner: { x: 0, y: 0 },
      upperRightCorner: { x: 5, y: 5 },
    };
    //ACT
    let funcOutput = getRoverPosition(plateauCorner, "SQUARE", "hello!! ");
    //ASSERT
    expect(funcOutput).toEqual("INVALID_ROVER_POSITION");

    //ACT
    funcOutput = getRoverPosition(plateauCorner, "SQUARE", "1234 ");
    //ASSERT
    expect(funcOutput).toEqual("INVALID_ROVER_POSITION");

    //ACT
    funcOutput = getRoverPosition(plateauCorner, "SQUARE", "1 2 3");
    //ASSERT
    expect(funcOutput).toEqual("INVALID_ROVER_POSITION");

    //ACT
    funcOutput = getRoverPosition(plateauCorner, "SQUARE", "12 H J ");
    //ASSERT
    expect(funcOutput).toEqual("INVALID_ROVER_POSITION");

    //ACT
    funcOutput = getRoverPosition(plateauCorner, "SQUARE", "1 2 N N ");
    //ASSERT
    expect(funcOutput).toEqual("INVALID_ROVER_POSITION");
    //ACT
    funcOutput = getRoverPosition(plateauCorner, "SQUARE", "3 3 E E");
    //ASSERT
    expect(funcOutput).toEqual("INVALID_ROVER_POSITION");
  });
  test("Returns Error if the given coOrdinates are not on the plateau", () => {
    //ARRANGE
    let plateauCorner = {
      lowerLeftCorner: { x: 0, y: 0 },
      upperRightCorner: { x: 5, y: 5 },
    };
    //ACT
    let funcOutput = getRoverPosition(plateauCorner, "SQUARE", " 6 5 S ");

    //ASSERT
    expect(funcOutput).toBe("INVALID_ROVER_POSITION");

    //ARRANGE
    plateauCorner = {
      lowerLeftCorner: { x: 0, y: 0 },
      upperRightCorner: { x: 10, y: 4 },
    };
    //ACT
    funcOutput = getRoverPosition(plateauCorner, "RECTANGLE", "12  5 N ");

    //ASSERT
    expect(funcOutput).toBe("INVALID_ROVER_POSITION");
  });
});
