export type plateauShape = "Square" | "Rectangle";

export type Grid = [number, number];

export type CoOrds = { x: number; y: number };

export interface PlateauCorners {
  lowerLeftCorner: CoOrds;
  upperRightCorner: CoOrds;
}

type obstacles = Array<Grid>;
export let obstaclesOnPlateau: obstacles = [];