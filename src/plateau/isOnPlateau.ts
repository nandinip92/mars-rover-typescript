import { Grid, Boundary, plateauShape } from "./setPlateau.types";
/*
This function is to check if the given coordinates is inside the plateau or not.
For Square or Rectangle Plateau
It is valid if they are inside the plateau boundary
lowerBound.x <= coOrdinate.x <= upperBound.x && lowerBound.y<=coOrdinate.y<= upperBound.y
*/

export function isOnPlateau(
  plateauBoundary: Boundary,
  plateauShape: plateauShape,
  newCoOrdinate: Grid
): Boolean {
  let isValidCoOrdinate: Boolean = false;
  //Checking if the shape of the plateau is Square or Rectanle
  if (plateauShape === "Square" || plateauShape === "Rectangle") {
    isValidCoOrdinate = isOnSquareOrRectanglePlateau(
      plateauBoundary,
      newCoOrdinate
    );
  }
  return isValidCoOrdinate;
}

function isOnSquareOrRectanglePlateau(
  plateauBoundary: Boundary,
  newCoOrdinate: Grid
): Boolean {
  const x =
    plateauBoundary.lowerLeftCorner.x <= newCoOrdinate[0] &&
    newCoOrdinate[0] <= plateauBoundary.upperRightCorner.x;
  const y =
    plateauBoundary.lowerLeftCorner.y <= newCoOrdinate[1] &&
    newCoOrdinate[1] <= plateauBoundary.upperRightCorner.y;

  return x && y;
}
