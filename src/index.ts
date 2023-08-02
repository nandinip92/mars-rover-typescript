import { clear, print, askQuestion } from "./ui/console";
import { getPlateauInputs } from "./plateau/getPlateauInputs";
import {
  PlateauCorners,
  PlateauShape,
  obstaclesOnPlateau,
} from "./plateau/plateau.types";
//export let obstaclesOnPlateau: Obstacles = [];

function welcomeToMarsMission(): void {
  clear(false);
  print("*-------------------------------------------------*");
  print("| 🌏🛸👽 Welcome to Mars Rover Mission !!! 👽🛸🌏 |");
  print("*-------------------------------------------------*");

  startMission();
}

export function startMission() {
  print(
    `❗NOTE: We need lower-left co-ordinates and upper-right coordinates of the Plateau.
    \tIf only one coordinate is given then, it will be considered as upper-right corner,
    \tlower-left corner of the plateau will be consider as origin i.e (0,0).
    \tGive the coOrdinates in the order as lower-left coordinates and then upper-right coordinates.
    `
  );

  const inputCoOrds: string = askQuestion(
    "Enter the plateau co-ordinates seperated with spaces Eg: X Y"
  );

  const [plateauCorners, plateauShape, obstacles] =
    getPlateauInputs(inputCoOrds);
  //console.log([plateauCorners, plateauShape, obstacles]);
}

welcomeToMarsMission();
