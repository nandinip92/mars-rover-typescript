import { Boundary, Grid } from "../plateau/setPlateau.types";
import { isInsidePlateau } from "../plateau/isInsidePlateau";
import { Interface } from "readline";
type compassDirections = "N" | "E" | "S" | "W";
type compassDirectionType = {
  N: Grid;
  E: Grid;
  W: Grid;
  S: Grid;
};

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
const NEWS: compassDirectionType = {
  N: [0, 1],
  E: [1, 0],
  W: [-1, 0],
  S: [0, -1],
};

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
  let roverDirection = initialPosition.currentDirection; //Eg: N
  let currentCoOrds = initialPosition.coOrds; //Eg: [1,2]
  //Splitting the string of instructions into an array
  let instructions = roverInstructions.split(""); //Eg: [L,M,L,M,L,M,L,M,M]

  //Looping each instruction and executing them [L,M,L,M,L,M,L,M,M]
  // if direction === M then move the rover in the current direction by 1
  // else only turn the rover into the direction
  instructions.forEach((direction) => {
    if (direction === "M") {
      currentCoOrds = moveRover(plateauBoundary, currentCoOrds, roverDirection);
    } else {
      roverDirection = turningDirection[direction][roverDirection];
      // roverDirection =
      //   direction === "L"
      //     ? getNewDirection("L", roverDirection)
      //     : getNewDirection("R", roverDirection);
    }
  });
}

/*
 * moveRover() function will move the rover one step ahead in the direction it is facing
 * and returns the new (X,Y) coordinates
 */
function moveRover(
  plateauBoundary: Boundary,
  currentRoverCoOrds: Grid,
  currentDirection: compassDirections
): Grid {
  //get the coOrdinates of the respective direction
  const roverDirection = NEWS[currentDirection]; //W:[0,1]

  //add them to the currentRoverCoOrdinates [1,2]+[0,1] = [1+0,2+1]=[1,3]
  const newX = currentRoverCoOrds[0] + roverDirection[0];
  const newY = currentRoverCoOrds[1] + roverDirection[1];
  const newPosition: Grid = [newX, newY];

  //check if the new Rover CoOrdinates are with in the plateau
  //If with in the plateau return new coOrdinates
  //else return old coordinates
  return isInsidePlateau(plateauBoundary, newPosition)
    ? newPosition
    : currentRoverCoOrds;
}

/*
 * getNewDirection() function will return
 */
function getNewDirection(
  turnDirection: "L" | "R",
  roverDirection: compassDirections
): compassDirections {
  //
  return "N";
}
