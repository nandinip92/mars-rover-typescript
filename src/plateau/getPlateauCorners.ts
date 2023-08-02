import { clear, print, askQuestion } from "../ui/console";
import { Grid, PlateauShape, PlateauCorners } from "./plateau.types";
import { RoverPosition } from "../rovers/rover.types";
import { startMission } from "../index";

/*
'getPlateauCorners' takes the array of plateau coordinates and check if given coordinates are valid or not
*/
export function getPlateauCorners(coOrdinates: Array<number>): PlateauCorners {
  // if coOrdinates.length === 2 then pass only upperRight coordinates into 'isValidCoOrdinates()'
  // else pass both upperRight coordinates and lowerLeft coordinates into 'isValidCoOrdinates()'
  // return value will assigned to 'plateauCorners' variable
  const plateauCorners: PlateauCorners =
    coOrdinates.length === 2
      ? isValidCoOrdinates([coOrdinates[0] as number, coOrdinates[1] as number])
      : isValidCoOrdinates(
          [coOrdinates[2] as number, coOrdinates[3] as number],
          [coOrdinates[0] as number, coOrdinates[1] as number]
        );
  return plateauCorners;
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
function isValidCoOrdinates(
  upperRightCorner: Grid,
  lowerLeftCorner?: Grid
): PlateauCorners {
  const lowerLeft = lowerLeftCorner === undefined ? [0, 0] : lowerLeftCorner;
  //upper right coordinates must always be greater than the lower left coordinates
  if (
    upperRightCorner[0] <= lowerLeft[0] ||
    upperRightCorner[1] <= lowerLeft[1]
  ) {
    print(
      `\n🚫🚫🚫 Invalid input, upper-right corner coOrdinates must always be greater than lower-left corner coOrdinates.
      \tPlease check the❗NOTE❗below and give valid inputs 🚫🚫🚫`
    ); // ❌ERROR: so Start again
    startMission();
  }
  //initializing the plateauCorners dictionary
  const plateauCorners: PlateauCorners = {
    lowerLeftCorner: { x: lowerLeft[0], y: lowerLeft[1] },
    upperRightCorner: { x: upperRightCorner[0], y: upperRightCorner[1] },
  };
  return plateauCorners;
}
