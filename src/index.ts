import { clear, print, askQuestion } from "./ui/console";
import { Grid, plateauShape, PlateauCorners } from "./plateau/plateau.types";
import { RoverPosition } from "./rovers/rover.types";

function welcomeToMarsMission(): void {
  clear(false);
  print("*-------------------------------------------------*");
  print("| 🌏🛸👽 Welcome to Mars Rover Mission !!! 👽🛸🌏 |");
  print("*-------------------------------------------------*");

  startMission();
}

function startMission() {
  const plateauBoundraies = getPlateauCoOrdinates();
  const roverPositiosn = getRoverPosition();
  const instructionsToRover = getInstructions();
  //setRoverAndExecute(plateauBoundraies, roverPositiosn, instructionsToRover);
}
function getPlateauCoOrdinates() {}
function getRoverPosition() {}
function getInstructions() {}

welcomeToMarsMission();
