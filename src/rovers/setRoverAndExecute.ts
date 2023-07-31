import { Boundary, CoOrds, Grid } from "../plateau/setPlateau.types";
import { isInsidePlateau } from "../plateau/isInsidePlateau";
import { Interface } from "readline";
type compassDirections = "N" | "E" | "S" | "W";

interface RoverPosition {
  coOrds: Grid;
  currentDirection: compassDirections;
}

const turningDirection = {
  L: { N: "W", W: "S", S: "E", E: "N" },
  R: { N: "E", E: "S", S: "W", W: "N" },
};

// To get to the next point in respective directions from (0,0).
// i.e, To get to  respective direction from (X,Y)
// North = (X,Y+1), East = (X+1,Y), West =(X-1,Y), South= (X,Y-1)
const NEWS = { N: [0, 1], E: [1, 0], W: [-1, 0], S: [0, -1] };

/*
*------------------------------*
|What setRoverAndExecute does? |
*------------------------------*
This function will get plateauBoundary, initialPosition and roverInstructions as inputs
plateauBoundary is to check if the moving position is inside the plateau boundaries
*/

//This function will check if the given input position of the rover is  valid or not
export function setRoverAndExecute(
  plateauBoundary: Boundary,
  initialPosition: RoverPosition,
  roverInstructions: string
) {
  // Assigning the initial roverPosition to respective variables
  let roverDirection = initialPosition.currentDirection;
  let currentCoOrds = initialPosition.coOrds;
  //Splitting the string of instructions into an array
  let instructions = roverInstructions.split("");

  //Looping each instruction and executing them [L,M,L,M,L,M,L,M,M]
  // if direction === M then move the rover in the current direction by 1
  // else only turn the rover into the direction
  instructions.forEach((direction) => {
    if (direction === "M") {
      currentCoOrds = moveRover(currentCoOrds, roverDirection);
    } else {
      //roverDirection = turningDirection[direction][roverDirection];
      roverDirection =
        direction === "L"
          ? getNewDirection("L", roverDirection)
          : getNewDirection("R", roverDirection);
    }
  });
}

function moveRover(
  currentRoverCoOrds: Grid,
  currentDirection: compassDirections
): Grid {
  //get the coOrdinates of the respective direction
  //add them to the currentRoverCoOrdinates
  //check if the new Rover CoOrdinates are with in the plateau
  //If with in the plateau return new coOrdinates
  //else return old coordinates
  return [1, 2];
}
function getNewDirection(
  turnDirection: "L" | "R",
  roverDirection: compassDirections
): compassDirections {
  return "N";
}
