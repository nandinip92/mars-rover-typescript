import { setPlateauCoOrdintes } from "../../src/plateau/setPlateau";

describe("setPlateauCoOrdintes", () => {
  test("throws an error if invalid input is passed", () => {
    //Arrange, Act and Assert
    expect(() => {
      setPlateauCoOrdintes([0, 0]);
    }).toThrow("Plateau co-ordinates must be >0 ");

    expect(() => {
      setPlateauCoOrdintes([-1, 3]);
    }).toThrow("Plateau co-ordinates must be >0 ");
    expect(() => {
      setPlateauCoOrdintes([9, -6]);
    }).toThrow("Plateau co-ordinates must be >0 ");
  });

  test("Getting the upper bound and lower bound values for plateau", () => {
    expect(setPlateauCoOrdintes([5, 5])).toEqual([
      [0, 0],
      [5, 5],
    ]);
  });
});
