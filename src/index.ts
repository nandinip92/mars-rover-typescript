import { clear, print, askQuestion } from "./ui/console";
import { getPlateauInputs } from "./plateau/getPlateauInputs";
import { getRoverPosition } from "./rovers/getRoverPosition";
import { setRoverAndExecute } from "./rovers/setRoverAndExecute";
import { RoverPosition, RoverERRORS } from "./rovers/rover.types";
import {
  PlateauCorners,
  PlateauShape,
  Obstacles,
  obstaclesOnPlateau,
} from "./plateau/plateau.types";
import { getRoverInstructions } from "./rovers/getRoverInstructions";
type YesOrNo = "Y" | "N";
// interface inputsToPlateau {
//   plateauCorners: PlateauCorners;
//   plateauShape: PlateauShape;
//   obstacles: Obstacles;
// }
type PlateauInputs = PlateauCorners | PlateauShape | Obstacles;
type PlateauInputType = Array<PlateauInputs>;

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

  const plateauInputs = getPlateauInputs(inputCoOrds);

  if (plateauInputs === "INVALID_INPUT") {
    startMission();
    return;
  } else {
    let [plateauCorners, plateauShape, obstacles] = plateauInputs;
    //console.log(plateauCorners);
    //console.log([plateauCorners, plateauShape, obstacles]);

    //'flag' value is to used to check if the Rover is being placed on a new plateau or on the same plateau
    const flag = true;

    //Now start taking inputs for the rover
    startSettingRover(
      plateauCorners as PlateauCorners,
      plateauShape as PlateauShape,
      flag
    );
  }
}

export async function startSettingRover(
  plateauCorners: PlateauCorners,
  plateauShape: PlateauShape,
  flag: Boolean
) {
  //if this function is called for the first time or when given invalid inputs
  // then display ❗Note on how to given rover values
  //else prompt the user about next steps.
  if (flag) {
    print(`\n❗NOTE: To move the 🦸Rover🦸 we need its current coordinates of the plateau along with the direction it is facing.
              And we need a set of instruction on to maneuver the 🦸Rover🦸. Input formats are given below:
            1️⃣ For the Rover position should be (X,Y) coordiates followed by compass direction N⬆️|E➡️|⬅️W|S⬇️ seperateby a space
               Eg: 1 2 N
            2️⃣Movement instructionsshould contain on L, R and M (L-Left, R-Right, M-Move) Eg: LMLMLMLMM
            `);
  } else {
    const userResponse: string = askQuestion(
      "Do you want to continue launching 🦸Rovers🦸 on same Plateau? (y/n)"
    );
    // if the user doesnot wish to continue on the same plateau then start the mission again.
    if (checkResponse(userResponse) === "N") {
      welcomeToMarsMission();
      return;
    }
  }

  const inputPosition: string = askQuestion(
    "Enter 🦸Rover's🦸 coOrdinates on plateau and its direction"
  );
  //console.log("---> INPUT POSITION ", inputPosition);
  const roverPosition = getRoverPosition(
    plateauCorners,
    plateauShape,
    inputPosition
  );

  if (roverPosition === "INVALID_ROVER_POSITION") {
    startSettingRover(plateauCorners, plateauShape, true);
    return;
  }
  let roverInstructions = "INVALID_ROVER_INSTRUCTION";
  //This will prompt for Valid Instructions untill one is given
  while (roverInstructions === "INVALID_ROVER_INSTRUCTION") {
    const instruction = askQuestion("Enter Rover instructions");
    //console.log("---> Instruction", instruction);
    roverInstructions = getRoverInstructions(instruction);
  }
  // console.log(roverPosition);
  // console.log(roverInstructions);

  const latestPosition = setRoverAndExecute(
    plateauCorners,
    plateauShape,
    roverPosition as RoverPosition,
    roverInstructions as string
  );
  console.log(`🏁🏁🏁🦸Rover's New position🦸🏁🏁🏁 ${latestPosition}`);

  startSettingRover(plateauCorners, plateauShape, false);
  return;
}

////💁❗FUTURE DEVELOPMENT: looping through mission
function checkResponse(userResponse: string): YesOrNo {
  userResponse.trim();
  if (
    userResponse.toUpperCase() === "Y" ||
    userResponse.toUpperCase() === "YES"
  )
    return "Y";
  if (userResponse.toUpperCase() === "N" || userResponse.toUpperCase() === "NO")
    return "N";
  print("❌ Invalid input  ");
  return "N";
}
welcomeToMarsMission();
