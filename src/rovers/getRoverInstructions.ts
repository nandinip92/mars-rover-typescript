import { askQuestion, print } from "../ui/console";

/*
`isValidInstruction` checks if the instruction is valid or not.

Instruction must contain only L,R and M
*/
let validInstruction = "";
export function getRoverInstructions() {
  const instruction = askQuestion("Enter Rover instructions");
  isValidInstruction(instruction);
  return validInstruction;
}

function isValidInstruction(instructions: string): string {
  const roverInstructions = instructions.replace(/\s+/g, "");
  const isValidInstruction = roverInstructions
    .split("")
    .map((i) => ["L", "R", "M"].includes(i));

  if (!isValidInstruction.every(Boolean)) {
    print(
      "🚫🚫🚫Invalid Input, please enter Valid instructions [L | R |M] eEg:LMLLRMM🚫🚫🚫"
    );
    return getRoverInstructions(); // ❌ERROR: so get correct inputs
  }
  validInstruction = roverInstructions;
  return validInstruction;
}
