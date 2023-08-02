export type PlateauShape = "SQUARE" | "RECTANGLE";

export type Grid = [number, number];

export type CoOrds = { x: number; y: number };

export type PlateauCorners = {
  lowerLeftCorner: CoOrds;
  upperRightCorner: CoOrds;
};

type Obstacles = Array<Grid>;
