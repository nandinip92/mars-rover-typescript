import { Boundary, CoOrds } from "../plateau/setPlateau.types";
import { setRoverAndExecute } from "../rovers/setRoverAndExecute";

/*
*----------*
|ALGORITHM |
*----------*
1. Rover position must be x and Y cooradinates along with Direction it is facing ie., 3 4 E
    (1a) As the given input is String split the input and chek if the first two elements are 'numbers' 
        and the last element must be any of the compass directions.
*/

//This function will check if the given input position of the rover is  valid or not
export function getRoverInputs(
  plateauBoundary: Boundary,
  initialPosition: string
) {
  let currentPosition = initialPosition
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map((ele) => (isNaN(parseInt(ele)) ? ele : parseInt(ele))); //Convering to numbers

  if (checkCurrentPositionValidity(currentPosition)) {
    setRoverAndExecute(plateauBoundary, currentPosition);
  }
}

function checkCurrentPositionValidity(
  currentPosition: Array<string | number>
): boolean {
  if (currentPosition.length < 3 || currentPosition.length > 3)
    throw new Error(
      "Invalid input. Input must contain X and Y co-ordinates and a compass direction (N|E|S|W) seperated by space - X Y Direction"
    );
  if (
    typeof currentPosition[2] === "number" ||
    typeof currentPosition[1] === "string" ||
    typeof currentPosition[1] === "string"
  )
    throw new Error(
      "Invalid input. Input must contain X and Y co-ordinates and a compass direction (N|E|S|W) seperated by space - X Y Direction"
    );
  let directions = ["N", "E", "S", "W"];
  if (!directions.includes(currentPosition[2]))
    throw new Error("Invalid input. compass direction must be (N|E|S|W)");

  return true;
}
