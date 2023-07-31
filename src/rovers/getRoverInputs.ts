import { Boundary, CoOrds } from "../plateau/setPlateau.types";
import { isInsidePlateau } from "../plateau/isInsidePlateau";
import { setRoverAndExecute } from "../rovers/setRoverAndExecute";

// type compassDirections = "N" | "E" | "S" | "W";
// type RoverPosition = { coOrds: CoOrds; currentDirection: compassDirections };

/*
*----------*
|PsudoCode |
*----------*
1. 'getRoverInputs' fucntion takes plateauBoundary, initialPosition and instructions as inputs.
  (1a) Rover position must be x and Y cooradinates along with Direction it is facing ie., 3 4 E
    (i) As the given input('initialPosition') is String split the input and check if the first two elements are 'numbers' 
        and the last element must be any of the compass directions.->checkGivenPositionValidity(givenPosition).
  (1b). Rover instructions must contain only Left,Right and Move (L,R,M) ->isValidInstruction()

  (1c). If both the Inputs to the rover are valid then we will place the rover in the given position and start executing instructions.
        setRoverAndExecute()
*/

//This function will check if the given input position of the rover is  valid or not
export function getRoverInputs(
  plateauBoundary: Boundary,
  initialPosition: string,
  instructions: string
) {
  let givenPosition = initialPosition
    .replace(/\s+/g, " ") //If the given input has more spaces between the characters this will replace them into one space
    .trim()
    .split(" ")
    .map((ele) => (isNaN(parseInt(ele)) ? ele : parseInt(ele))); //Convering digits from string to number and leaves strings as is

  const roverInstructions = instructions.replace(/\s+/g, "").split("");

  if (isValidPositon(givenPosition) && isValidInstruction(roverInstructions)) {
    setRoverAndExecute(plateauBoundary, givenPosition, instructions);
  }
}

function isValidPositon(givenPosition: Array<string | number>): boolean {
  if (givenPosition.length < 3 || givenPosition.length > 3)
    throw new Error(
      "Invalid input. Input must contain X and Y co-ordinates and a compass direction (N|E|S|W) seperated by space - X Y Direction"
    );
  if (
    typeof givenPosition[2] === "number" ||
    typeof givenPosition[1] === "string" ||
    typeof givenPosition[1] === "string"
  )
    throw new Error(
      "Invalid input. Input must contain X and Y co-ordinates and a compass direction (N|E|S|W) seperated by space - X Y Direction"
    );
  let directions = ["N", "E", "S", "W"];
  if (!directions.includes(givenPosition[2]))
    throw new Error("Invalid input. compass direction must be (N|E|S|W)");

  return true;
}

function isValidInstruction(roverInstructions: Array<string>): boolean {
  const isValid = roverInstructions.map((i) => ["L", "R", "M"].includes(i));
  if (!isValid.every(Boolean))
    throw new Error(
      "Invalid Input, please enter Valid instructions [L | R |M]"
    );
  return true;
}
