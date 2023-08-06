import { getRoverInstructions } from "../../src/rovers/getRoverInstructions";

describe("getRoverInstructions", () => {
  test("Return Valid Instruction String", () => {
    expect(getRoverInstructions("LMLMLMLMLM")).toBe("LMLMLMLMLM");
    expect(getRoverInstructions("LMLRMRMLMLM")).toBe("LMLRMRMLMLM");
    expect(getRoverInstructions("MMRMMRMRRM")).toBe("MMRMMRMRRM");
  });
  test("Return ERROR for inavlid Instruction String", () => {
    expect(getRoverInstructions("LKMN")).toBe("INVALID_ROVER_INSTRUCTION");
    expect(getRoverInstructions("jsdaksdhashfoi")).toBe(
      "INVALID_ROVER_INSTRUCTION"
    );
  });
});
