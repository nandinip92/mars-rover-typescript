import { clear, print, askQuestion } from "./ui/console";
import { getPlateauInputs } from "./plateau/getPlateauCorners";

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

  askQuestion(
    "Enter the plateau co-ordinates seperated with spaces Eg: X Y",
    getPlateauInputs
  );
  // const plateauCorners = getPlateauCoOrdinates();
  // const roverPosition = getRoverPosition();
  // const instructionsToRover = getInstructions();
  //setRoverAndExecute(plateauBoundraies, roverPositiosn, instructionsToRover);
}

function getRoverPosition() {}
function getInstructions() {}

welcomeToMarsMission();
