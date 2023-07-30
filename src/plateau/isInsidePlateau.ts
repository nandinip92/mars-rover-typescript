import { Grid, Boundary } from "./setPlateau.types";
/*
This function is to check if the given coordinates is inside the plateau or not.
It is valid if they are inside the plateau boundary
lowerBound.x <= coOrdinate.x <= upperBound.x && lowerBound.y<=coOrdinate.y<= upperBound.y
*/

export function isInsidePlateau(
  plateauBoundary: Boundary,
  coOrdinate: Grid
): Boolean {
  const x =
    plateauBoundary.lowerBound.x <= coOrdinate[0] &&
    coOrdinate[0] <= plateauBoundary.upperBound.x;
  const y =
    plateauBoundary.lowerBound.y <= coOrdinate[1] &&
    coOrdinate[1] <= plateauBoundary.upperBound.y;

  return x && y;
}
