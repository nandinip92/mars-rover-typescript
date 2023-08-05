import { clear, print, askQuestion } from "../ui/console";
import {
  Grid,
  PlateauShape,
  PlateauCorners,
  PlateauERROR,
} from "./plateau.types";
import { RoverPosition } from "../rovers/rover.types";
import { startMission } from "../index";

/*
'getPlateauCorners' takes the array of plateau coordinates and check if given coordinates are valid or not.
It will take an Array<numbers> as an input and its length will be either 2 or 4 

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


*/

export function getPlateauCorners(
  coOrdinates: Array<number>
): PlateauCorners | PlateauERROR {
  // if coOrdinates.length === 2 then set lowerLeft coOrdinates to [0,0] and given coordinates to upperRight
  // else pass both upperRight coordinates and lowerLeft coordinates into 'isValidCoOrdinates()'
  // return the value that is assigned to 'plateauCorners' variable
  let plateauCorners;
  if (coOrdinates.length === 2) {
    plateauCorners = {
      lowerLeftCorner: { x: 0, y: 0 },
      upperRightCorner: { x: coOrdinates[0], y: coOrdinates[1] },
    };
  } else {
    plateauCorners = isValidCoOrdinates(
      [coOrdinates[2] as number, coOrdinates[3] as number],
      [coOrdinates[0] as number, coOrdinates[1] as number]
    );
  }
  return plateauCorners;
}

function isValidCoOrdinates(
  upperRightCorner: Grid,
  lowerLeftCorner?: Grid
): PlateauCorners | PlateauERROR {
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
    return "INVALID_INPUT"; // ❌ERROR: this will indicate to startMission() in index.ts
  }
  //initializing the plateauCorners dictionary
  const plateauCorners: PlateauCorners = {
    lowerLeftCorner: { x: lowerLeft[0], y: lowerLeft[1] },
    upperRightCorner: { x: upperRightCorner[0], y: upperRightCorner[1] },
  };
  return plateauCorners;
}
