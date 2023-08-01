import { clear, print, askQuestion } from "../ui/console";
import { Grid, plateauShape, PlateauCorners } from "./plateau.types";
import { RoverPosition } from "../rovers/rover.types";
import { startMission } from "../index";

/*
'getPlateauInputs' takes the user input for the plateau coordinates and check if given coordinates are valid or not
*/
export function getPlateauInputs(inputCoOrds: string): void {
  const coOrdinates = inputCoOrds
    .replace(/\s+/g, " ") //replaces extra whitespaces to single space Eg:3   5 -> 3 5
    .trim()
    .split(" ")
    .map((ele) => (isNaN(parseInt(ele)) ? ele : parseInt(ele))); //converts every digit in the sting into number

  if (
    !coOrdinates.every(Number) &&
    coOrdinates.length !== 4 &&
    coOrdinates.length !== 2
  ) {
    print(
      "\n🚫🚫🚫 Invalid input, please check the❗NOTE❗below and give valid inputs 🚫🚫🚫"
    );
    return startMission();
  }

  if (coOrdinates.length === 2) {
    const xCoOrds: number = coOrdinates[0] as number;
    const yCoOrds: number = coOrdinates[1] as number;
    isValidCoOrdinates([xCoOrds, yCoOrds]); //passing only upperRight coordinates
  }
  if (coOrdinates.length === 4) {
    const x1: number = coOrdinates[0] as number;
    const y1: number = coOrdinates[1] as number;
    const x2: number = coOrdinates[2] as number;
    const y2: number = coOrdinates[3] as number;
    isValidCoOrdinates([x2, y2], [x1, y1]); //passing upperRight coordinates and lower-left coordinates
  }
}

/*
RULES:
----------
If only one coOrdinate is given as input then
Lower Left corner of the Square/Rectangle will always concide with origin [0,0]
Given input will be upperRight corner of a Square/Rectangle

ALGORITHM:
----------
Assuming the lower-left corner to be (0,0) as an example
1. Check if the given input 'CoOrds'[x,y] are less than (0,0) i.e, x<0 and y<0. If so then throw an error.
2.In this case first we are considering Square/Rectangle to be plateau shape and the lower left corner is [0,0]. 
Just in case if in future lowerleft co0ordinates are not fixed on origin[0,0], setting the lowerLeftCorner as an optional parameter
3. Setting the lowerBound and upperBound coordinates for the Plateau.This helps while moving the Rover as it should be within the platues boundaries.

lowerLeftCorner --> OptionalInput,
upperRightCorner --->Input
*/
function isValidCoOrdinates(upperRightCorner: Grid, lowerLeftCorner?: Grid) {
  console.log(isValidCoOrdinates.name);
  const lowerLeft = lowerLeftCorner === undefined ? [0, 0] : lowerLeftCorner;
  //upper right coordinates must always be greater than the lower left coordinates
  if (
    upperRightCorner[0] <= lowerLeft[0] ||
    upperRightCorner[1] <= lowerLeft[1]
  ) {
    print(
      `\n🚫🚫🚫 Invalid input, upper-right corner coOrdinates must always be greater than lower-left corner coOrdinates.
      \tPlease check the❗NOTE❗below and give valid inputs 🚫🚫🚫`
    );
    return startMission();
  }
  //initializing the plateauCorners dictionary
  const plateauCorners: PlateauCorners = {
    lowerLeftCorner: { x: lowerLeft[0], y: lowerLeft[1] },
    upperRightCorner: { x: upperRightCorner[0], y: upperRightCorner[1] },
  };
  console.log(plateauCorners);
}
