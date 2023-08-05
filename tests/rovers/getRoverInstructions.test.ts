import { isValidInstruction } from "../../src/rovers/getRoverInstructions";

describe("getRoverInstructions", () => {
  test("Return Valid Instruction String", () => {
    expect(isValidInstruction("LMLMLMLMLM")).toBe("LMLMLMLMLM");
    expect(isValidInstruction("LMLRMRMLMLM")).toBe("LMLRMRMLMLM");
    expect(isValidInstruction("MMRMMRMRRM")).toBe("MMRMMRMRRM");
  });
  test("Return ERROR for inavlid Instruction String", () => {
    expect(isValidInstruction("LKMN")).toBe("INVALID_ROVER_INSTRUCTION");
    expect(isValidInstruction("jsdaksdhashfoi")).toBe(
      "INVALID_ROVER_INSTRUCTION"
    );
  });
});
