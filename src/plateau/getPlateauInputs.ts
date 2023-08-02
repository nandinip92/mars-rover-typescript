import { clear, print, askQuestion } from "../ui/console";
import { Grid, PlateauShape, PlateauCorners } from "./plateau.types";
import { RoverPosition } from "../rovers/rover.types";
import { startMission } from "../index";
import { getPlateauCorners } from "./getPlateauCorners";

/*
'getPlateauInputs' takes the user input for the plateau coordinates and check if given input is valid or not
*/
export function getPlateauInputs(inputCoOrds: string): PlateauCorners {
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
  return getPlateauCorners(coOrdinates as Array<number>);
}

function getPlateauShape(): PlateauShape {
  //const shape = askQuestion("What is the shape of the plateau",checkShape} //FUTURE DEVELOPMENT: to get shape from user

  return "SQUARE"; //Since square and rectangle logic is same, as of now passing "SQUARE" but business logic works for both square and rectangle
}

//function checkShape(shape:string){} //FUTURE DEVELOPMENT: for validating the shape
