import { Boundary, Grid } from "../plateau/setPlateau.types";
export interface RoverPosition {
  coOrds: Grid;
  currentDirection: compassDirections;
}

export type compassDirections = "N" | "E" | "S" | "W";
export type compassDirectionType = {
  N: Grid;
  E: Grid;
  W: Grid;
  S: Grid;
};

// To get to the next point in respective directions from (0,0).
// i.e, To get to  respective direction from (X,Y)
// North = (X,Y+1), East = (X+1,Y), West =(X-1,Y), South= (X,Y-1)
export const NEWS: compassDirectionType = {
  N: [0, 1],
  E: [1, 0],
  W: [-1, 0],
  S: [0, -1],
};

export type TurnDirections = {
  N: compassDirections;
  E: compassDirections;
  W: compassDirections;
  S: compassDirections;
};
export type Turn = {
  L: TurnDirections;
  R: TurnDirections;
};

export const turningDirection: Turn = {
  L: { N: "W", W: "S", S: "E", E: "N" },
  R: { N: "E", E: "S", S: "W", W: "N" },
};
