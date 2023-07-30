type Grid = [number, number];
type plateauShape = "Square" | "Rectangle";
//type Boundary = [Grid, Grid];

/*
RULES:
----------
Lower Left corner of the Square/Rectangle will always concide with origin [0,0]
Input will be a upperRight corner of a Square/Rectangle

ALGORITHM:
----------
1. Check if the given input 'CoOrds'[x,y] should be greater than 0 i.e, x>0 and y>0. If so then throw an error.
2.In this case first we are considering Square/Rectangle and the lower left corner is [0,0] fixedCoOrds. 
Just in case if in future  co0ordinates are not fixed, setting the fixedCoords as optional parameter
3. Setting the lowerBound and upperBound coordinates for the Plateau. This helps while moving the Rover as it should be inside the platues only.

*/
export function setPlateauCoOrdintes(coOrds: Grid, fixedCoOrds?: Grid) {
  if (coOrds[0] <= 0 || coOrds[1] <= 0)
    throw new Error("Plateau co-ordinates must be >0 ");

  const coOrdsLowerBound = fixedCoOrds === undefined ? [0, 0] : fixedCoOrds;

  const plateauBoundary = [coOrdsLowerBound, coOrds];

  return plateauBoundary;
}
