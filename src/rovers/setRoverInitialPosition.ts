import { Boundary, CoOrds } from "../plateau/setPlateau.types";
type compassDirections = "N" | "E" | "S" | "W";
type RoverPosition = { coOrds: CoOrds; currentDirection: compassDirections };

/*
*----------*
|ALGORITHM |
*----------*

*/

//This function will check if the given input position of the rover is  valid or not
export function setRoverInitialPosition(
  plateauBoundary: Boundary,
  initialPosition: Array<string | number>
) {}
