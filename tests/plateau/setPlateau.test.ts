import { setPlateauCoOrdintes } from "../../src/plateau/setPlateau";

describe("setPlateauCoOrdintes", () => {
  test("throws an error if invalid input is passed", () => {
    //Arrange, Act and Assert
    expect(() => {
      setPlateauCoOrdintes([0, 0]);
    }).toThrow("Plateau co-ordinates must be > fixed values");

    expect(() => {
      setPlateauCoOrdintes([-1, 3]);
    }).toThrow("Plateau co-ordinates must be > fixed values ");
    expect(() => {
      setPlateauCoOrdintes([9, -6]);
    }).toThrow("Plateau co-ordinates must be > fixed values ");
  });

  test("Getting the upper bound and lower bound values for plateau", () => {
    const boundary = { lowerBound: { x: 0, y: 0 }, upperBound: { x: 5, y: 5 } };
    expect(setPlateauCoOrdintes([5, 5])).toEqual(boundary);
  });
});
