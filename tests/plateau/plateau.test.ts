import { getPlateauCoOrdintes } from "../../src/plateau/plateau";

describe("getPlateauCoOrdintes", () => {
  test("throws an error if invalid input is passed", () => {
    //Arrange, Act and Assert
    expect(() => {
      getPlateauCoOrdintes([0, 0]);
    }).toThrow("Plateau co-ordinates must be >0 ");
  });

  test("", () => {
    //expect(getPlateauCoOrdintes([])).toBe("I");
  });
});
