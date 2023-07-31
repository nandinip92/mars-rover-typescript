import { Boundary, CoOrds } from "../plateau/setPlateau.types";
type compassDirections = "N" | "E" | "S" | "W";
type RoverPosition = { coOrds: CoOrds; currentDirection: compassDirections };

/*
*----------*
|ALGORITHM |
*----------*
1. Rover position must be x and Y cooradinates along with Direction it is facing ie., 3 4 E
    (1a) As the given input is String split the input and chek if the first two elements are 'numbers' 
        and the last element must be any of the compass directions.
*/

//This function will check if the given input position of the rover is  valid or not
export function setRoverInitialPosition(
  plateauBoundary: Boundary,
  initialPosition: Array<string | number>
) {}
