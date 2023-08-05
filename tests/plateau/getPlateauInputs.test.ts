import { getPlateauInputs } from "../../src/plateau/getPlateauInputs";

describe("getPlateauInputs", () => {
  test("Checking if the given input coOrdinates are only numbers", () => {
    //Arrange Act and Assert
    expect(getPlateauInputs("hello world!!!!")).toBe("INVALID_INPUT");
    expect(getPlateauInputs("hey 12346")).toBe("INVALID_INPUT");
  });
  test("Checking if 2 or 4 integers are only given as input", () => {
    //Arrange Act and Assert

    expect(getPlateauInputs("12 3 4 5 6 7 ")).toBe("INVALID_INPUT");
    expect(getPlateauInputs("6 3    5 7 8")).toBe("INVALID_INPUT");
  });

  test("Checking if lower-left coordinates are set to origin (0,0) if only 2 integers/upperRight coordinates are given", () => {
    //Arrange
    const plateauCorners = {
      lowerLeftCorner: { x: 0, y: 0 },
      upperRightCorner: { x: 12, y: 12 },
    };
    const output = [plateauCorners, "SQUARE", []];

    //Act and Assert
    expect(getPlateauInputs("12 12")).toEqual([plateauCorners, "SQUARE", []]);
    expect(getPlateauInputs("12     12")).toEqual(output);
  });
  test("Checking if upperRight corniates are always geater than lower left coordniates", () => {
    //Arrange
    let plateauCorners = {
      lowerLeftCorner: { x: 3, y: 5 },
      upperRightCorner: { x: 8, y: 6 },
    };
    const output = [plateauCorners, "SQUARE", []];
    //Act and Assert
    expect(getPlateauInputs("3 5 8 6")).toEqual([plateauCorners, "SQUARE", []]);

    plateauCorners = {
      lowerLeftCorner: { x: 5, y: 5 },
      upperRightCorner: { x: 1, y: 1 },
    };
    expect(getPlateauInputs("5 5 1 1")).toEqual("INVALID_INPUT");
  });
});
