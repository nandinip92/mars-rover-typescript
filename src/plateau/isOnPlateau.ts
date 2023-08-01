import { Grid, Boundary, plateauShape } from "./setPlateau.types";
import { obstaclesOnPlateau } from "./setPlateau.types";
/*
This function is to check if the given coordinates is inside the plateau or not.
And if it is an obstacle or not
It is valid if they are on the plateau boundary
For Square or Rectangle Plateau
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
  return isValidCoOrdinate && isObstacle(newCoOrdinate);
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

function isObstacle(newCoOrd: Grid): Boolean {
  //'obstaclesOnPlateau' contains the list of plateau coordinates that has obstacles. it is Array<Grid> type.
  // if the newCoOrdinates are present in the Obstacles Array it will return 'false' -->its is an obstacle
  //else 'true' -->it is an emptyspace
  let isEmpty = obstaclesOnPlateau.filter(
    (obsCoOrd) => obsCoOrd[0] === newCoOrd[0] && obsCoOrd[1] == newCoOrd[1]
  );
  return isEmpty.length > 0 ? false : true;
}
