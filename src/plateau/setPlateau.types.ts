export type Grid = [number, number];

export type CoOrds = { x: number; y: number };

export interface Boundary {
  lowerLeftCorner: CoOrds;
  upperRightCorner: CoOrds;
}
