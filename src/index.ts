import { clear, print, askQuestion } from "./ui/console";
import { getPlateauInputs } from "./plateau/getPlateauInputs";
import { getRoverInputs } from "./rovers/getRoverInputs";
import { setRoverAndExecute } from "./rovers/setRoverAndExecute";
import { RoverPosition } from "./rovers/rover.types";
import {
  PlateauCorners,
  PlateauShape,
  Obstacles,
  obstaclesOnPlateau,
} from "./plateau/plateau.types";
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

  if (plateauInputs === "INVALID_INPUT") startMission();
  else {
    let [plateauCorners, plateauShape, obstacles] = plateauInputs;
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

export function startSettingRover(
  plateauCorners: PlateauCorners,
  plateauShape: PlateauShape,
  flag: Boolean
): void {
  //if this function is called for the first time or when given invalid inputs
  // then display ❗Note on how to given rover values
  //else prompt the user about next steps.
  if (flag) {
    print(`\nNOTE: To move the 🦸Rover🦸 we need its current coordinates of the plateau along with the direction it is facing.
              And we need a set of instruction on to maneuver the 🦸Rover🦸. Input formats are given below:
            1️⃣ For the Rover position should be (X,Y) coordiates followed by compass direction N⬆️|E➡️|⬅️W|S⬇️ seperateby a space
               Eg: 1 2 N
            2️⃣Movement instructionsshould contain on L, R and M (L-Left, R-Right, M-Move) Eg: LMLMLMLMM
            `);
  } // else {
  //   const userResponse = askQuestion(
  //     "Do you want to continue launching 🦸Rovers🦸 on same Plateau? (y/n)"
  //   );
  //   // if the user doesnot wish to continue on the same plateau then start the mission again.
  //   if (checkResponse(userResponse) === "N") startMission();
  // }

  const inputPosition = askQuestion(
    "Enter 🦸Rover's🦸 coOrdinates on plateau and its direction"
  );

  const [roverPosition, roverInstructions] = getRoverInputs(
    plateauCorners,
    plateauShape,
    inputPosition
  );
  // console.log(roverPosition);
  // console.log(roverInstructions);

  const latestPosition = setRoverAndExecute(
    plateauCorners,
    plateauShape,
    roverPosition as RoverPosition,
    roverInstructions as string
  );
  console.log(`Rovers new position is ${latestPosition}`);
}

////💁❗FUTURE DEVELOPMENT: looping through console
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
