import { Grid, Boundary } from "./setPlateau.types";

type plateauShape = "Square" | "Rectangle";

/*
RULES:
----------
Lower Left corner of the Square/Rectangle will always concide with origin [0,0]
Input will be a upperRight corner of a Square/Rectangle

ALGORITHM:
----------
1. Check if the given input 'CoOrds'[x,y] should be greater than 0 i.e, x>0 and y>0. If so then throw an error.
2.In this case first we are considering Square/Rectangle and the lower left corner is [0,0] fixedCoOrds. 
Just in case if in future lower left co0ordinates are not fixed to origin[0,0], setting the fixedCoords as optional parameter
3. Setting the lowerBound and upperBound coordinates for the Plateau.This helps while moving the Rover as it should be inside the platues only.

LowerLeft coOrdinates ---> fixedCoOrds --> OptionalInput,
upperRight coOrdinates ---> coOrds --->Input
*/
export function setPlateauBoundary(
  lowerLeftCoOrds: Grid,
  upperRightcoOrds: Grid,
  plateauShape?: plateauShape
) {
  // const coOrdsLowerBound = fixedCoOrds === undefined ? [0, 0] : fixedCoOrds;
  // //upper right coordinates must always be greater than the lower left coordinates
  // if (coOrds[0] <= coOrdsLowerBound[0] || coOrds[1] <= coOrdsLowerBound[1])
  //   throw new Error("Plateau co-ordinates must be > fixed values ");

  const plateauBoundary = {
    lowerBound: { x: lowerLeftCoOrds[0], y: lowerLeftCoOrds[1] },
    upperBound: { x: upperRightcoOrds[0], y: upperRightcoOrds[1] },
  };

  return plateauBoundary;
}
