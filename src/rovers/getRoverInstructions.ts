import { askQuestion, print } from "../ui/console";
import { RoverERRORS } from "./rover.types";

/*
`isValidInstruction` checks if the instruction is valid or not.

Instruction must contain only L,R and M
*/

export function getRoverInstructions(): string | RoverERRORS {
  const instruction = askQuestion("Enter Rover instructions");
  const validInstruction = isValidInstruction(instruction);
  return validInstruction;
}

export function isValidInstruction(instructions: string): string {
  const roverInstructions = instructions.replace(/\s+/g, "").trim();
  const isValidInstruction = roverInstructions
    .split("")
    .map((i) => ["L", "R", "M"].includes(i));

  if (!isValidInstruction.every(Boolean)) {
    print(
      "\n🚫🚫🚫Invalid Input, please enter Valid instructions [L | R |M] eEg:LMLLRMM🚫🚫🚫"
    );
    return "INVALID_ROVER_INSTRUCTION"; // ❌ERROR: so get correct inputs -> this will prompt for valid inputs untill you enter one
  }
  return roverInstructions;
}
