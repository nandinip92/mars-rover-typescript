import { clear, print, askQuestion } from "../ui/console";
import { Grid, PlateauShape, PlateauCorners, Obstacles } from "./plateau.types";
import { RoverPosition } from "../rovers/rover.types";
import { startMission } from "../index";
import { getPlateauCorners } from "./getPlateauCorners";

interface inputsToPlateau {
  plateauCorners: PlateauCorners;
  plateauShape: PlateauShape;
  obstacles: Obstacles;
}
type PlateauInputs = PlateauCorners | PlateauShape | Obstacles;
/*
'getPlateauInputs' takes the user input for the plateau coordinates and check if given input is valid or not
*/
export function getPlateauInputs(
  inputCoOrds: string,
  shape?: string, //💁❗FUTURE DEVELOPMENT on Shape from user
  obstacles?: string //💁❗FUTURE DEVELOPMENT on obstacles from user
): Array<PlateauInputs> {
  const coOrdinates = inputCoOrds
    .replace(/\s+/g, " ") //replaces extra whitespaces to single space Eg:3   5 -> 3 5
    .trim()
    .split(" ")
    .map((ele) => (isNaN(parseInt(ele)) ? ele : parseInt(ele))); //converts every digit in the sting into number

  if (
    !coOrdinates.every(Number) &&
    coOrdinates.length !== 4 &&
    coOrdinates.length !== 2
  ) {
    print(
      "\n🚫🚫🚫 Invalid input, please check the❗NOTE❗below and give valid inputs 🚫🚫🚫"
    );
    startMission();
  }
  const plateauCorners = getPlateauCorners(coOrdinates as Array<number>);
  const plateauShape = getPlateauShape();
  const obs = getObstacles();
  return [plateauCorners, plateauShape, obs];
}

//💁❗FUTURE DEVELOPMENT: to get shape from user and validate
function getPlateauShape(shape?: string): PlateauShape {
  //➡️Since square and rectangle logic is same, as of now passing "SQUARE" but business logic works for both square and rectangle
  return "SQUARE";
}

//💁❗FUTURE DEVELOPMENT: for validating the shape
//function checkShape(shape:string){}

//💁❗FUTURE DEVELOPMENT: to get Obstacles from user and validate
function getObstacles(obstacles?: string): Obstacles {
  return []; //➡️As of now considering there are no obstacles on the plateau
}