export type PlateauShape = "SQUARE" | "RECTANGLE";

export type Grid = [number, number];

export type CoOrds = { x: number; y: number };

export type PlateauCorners = {
  lowerLeftCorner: CoOrds;
  upperRightCorner: CoOrds;
};

export type PlateauERROR = "INVALID_INPUT";
export type Obstacles = Array<Grid>; //💁❗FUTURE DEVELOPMENT: for obstacles
export let obstaclesOnPlateau: Obstacles = []; //💁❗FUTURE DEVELOPMENT
