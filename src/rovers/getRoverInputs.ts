import { print } from "../ui/console";
import { startSettingRover } from "..";
import { getRoverInstructions } from "./getRoverInstructions";

import {
  PlateauCorners,
  CoOrds,
  PlateauShape,
  Grid,
} from "../plateau/plateau.types";
import { isOnPlateau } from "../plateau/isOnPlateau";
import { RoverPosition, compassDirections, RoverERRORS } from "./rover.types";

/*
 * *----------*
 * |PsudoCode |
 **----------*
 * 1. 'getRoverInputs' fucntion takes plateauBoundary, initialPosition and instructions as inputs.
 *  (1a) Rover position must be x and Y cooradinates along with Direction it is facing ie., 3 4 E
 *    (i) As the given input('initialPosition') is String split the input and check if the first two elements are 'numbers'
 *        and the last element must be any of the compass directions.->checkGivenPositionValidity(givenPosition).
 * (1b). Rover instructions must contain only Left,Right and Move (L,R,M) ->isValidInstruction()
 *
 * (1c). If both the Inputs to the rover are valid then we will place the rover in the given position and start executing instructions.
 *       setRoverAndExecute()
 */

//This function will check if the given input position of the rover is  valid or not

export function getRoverPosition(
  plateauCorners: PlateauCorners,
  plateauShape: PlateauShape,
  initialPosition: string
): RoverPosition | RoverERRORS {
  const isValidCoOrds: Array<Grid | string> | RoverERRORS = isValidInputFormat(
    plateauCorners,
    plateauShape,
    initialPosition
  );
  // console.log("isValidCoOrds", isValidCoOrds);
  let roverPosition = {};
  if (isValidCoOrds === "INVALID_ROVER_POSITION") return isValidCoOrds;
  else {
    const [coOrds, currentDirection] = isValidCoOrds;
    roverPosition = {
      coOrds: coOrds as Grid,
      currentDirection: currentDirection as compassDirections,
    };
  }
  return roverPosition as RoverPosition;
}

/*
 * This function will take the given input/ initial position of the Rover
 * and check if given format is correct by calling isValidPosition()
 * if so it will check if it is on the plateau or not by calling isOnPlateau() from isOnPlateau.ts
 */
function isValidInputFormat(
  plateauCorners: PlateauCorners,
  plateauShape: PlateauShape,
  initialPosition: string
): Array<Grid | string> | RoverERRORS {
  let givenPosition = initialPosition
    .replace(/\s+/g, " ") //If the given input has more spaces between the characters this will replace them into one space
    .trim()
    .split(" ")
    .map((ele) => (isNaN(parseInt(ele)) ? ele : parseInt(ele))); //Convering digits from string to number and leaves strings as is
  console.log(givenPosition);

  if (!isValidPositon(givenPosition)) {
    print("➡️PleaseCheck the Note below 👇 and enter valid input ");
    // startSettingRover(plateauCorners, plateauShape, true); // ❌ERROR: so Start settign rover again
    return "INVALID_ROVER_POSITION"; // ❌ERROR: so Start settign rover again. this will indicate to startSettingRover() in index.ts
  }

  // Since given input format is valid i.e, Eg: 1 2 N
  //check if the given coordinates(first two elements of the array) is on the plateau or not
  // if it is on plateau it isvalidCoordinate
  //else invalid position
  const xCoOrd: number = givenPosition[0] as number;
  const yCoOrd: number = givenPosition[1] as number;
  const isValidCoOrd = isOnPlateau(plateauCorners, plateauShape, [
    xCoOrd,
    yCoOrd,
  ]);
  if (!isValidCoOrd) {
    print(
      "🚫🚫🚫 Given coordinates of the Rover is not on the plateau. Please give valid coOrdinates 🚫🚫🚫"
    );
    return "INVALID_ROVER_POSITION"; // ❌ERROR: so Start settign rover again
  }

  return [[xCoOrd, yCoOrd], givenPosition[2] as string];
}

function isValidPositon(givenPosition: Array<string | number>): boolean {
  // givenPosition length must be 3
  if (givenPosition.length !== 3) {
    print(
      "🚫🚫🚫 Invalid input. Input must contain X and Y co-ordinates and a compass direction (N|E|S|W) seperated by space - X Y Direction🚫🚫🚫"
    );
    return false;
  }
  if (
    typeof givenPosition[0] !== "number" ||
    typeof givenPosition[1] !== "number"
  ) {
    print(
      "🚫🚫🚫Invalid input. Input must contain X and Y co-ordinates and they must be numbers🚫🚫🚫"
    );
    return false;
  }
  let directions = ["N", "E", "S", "W"];
  if (
    typeof givenPosition[2] === "string" &&
    !directions.includes(givenPosition[2])
  ) {
    print("🚫🚫🚫Invalid input. compass direction must be (N|E|S|W)🚫🚫🚫");
    return false;
  }

  return true;
}
