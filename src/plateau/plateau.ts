type Grid = [x: number, y: number];

/*
RULES:
----------
Lower Left corner of the Square/Rectangle will always concide with origin [0,0]
Input will be a upperRight corner of a Square/Rectangle

ALGORITHM:
----------
1. Check if the given input 'CoOrds'[x,y] should be greater than 0 i.e, x>0 and y>0. If so then throw an error.
*/
export function getPlateauCoOrdintes(coOdrs: Grid, fixedCoOrds?: Grid) {
  if (coOdrs[0] <= 0 || coOdrs[1] <= 0)
    throw new Error("Plateau co-ordinates must be >0 ");
}
