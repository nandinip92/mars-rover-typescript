# Mars Rover

Mars rover technical task

👾 🚀 You are working in an Engineering Squad for the 🎶 Melody Mars Mission, tasked with designing software to manage robots 🤖 and
cool vehicles for space exploration! 👽 🛸🌏

Develop an API that translates the commands sent from earth to instructions that are understood by the rover.

## How the Mars Rover Works

### 🗺 Representation of a Rover’s Position on the Plateau

The Plateau is divided into a grid. A Rover’s position is represented by x and y co-ordinates and the letters N, S, W, E to represent North,
South, West, East (the four cardinal compass points) respectively.

### 🗺Instructing a Rover to Move Around the Plateau

💻 To move a Rover around the Plateau, a string of letters is sent to a Rover.
Here are the letters and their resultant action:

| Letter |                                       Action                                        |
| :----- | :---------------------------------------------------------------------------------: |
| L      | Spins the Rover 90 degrees _Left_ without moving from the current coordinate point  |
| R      | Spins the Rover 90 degrees _Right_ without moving from the current coordinate point |
| M      |  Spins the Rover 90 degrees Right without moving from the current coordinate point  |

---

## How this application will work

This app takes inputs for `plateau` and `rover`.
Shape of the plateau can be Square/Rectangle.

### Input to the `plateau`:

First input will be the upper-right will be X and Y integers representing the coordinates of plateau, (x,y)

```
5 5
```

❗ NOTE: _Lower-left coordinate will coincide with (0,0)_.

### Input to the `Rover`:

There will be two inputs to the rover.

1. Rover's position- which is represented by two integers X and Y coordinates and a letter representing where the Rover is facing.

2. Rovers Instructions - A string of letters representing the instructions to move the Rover around the Plateau.

```
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
```

#### 📏 Rover movement Rules

Rovers move sequentially, this means that the first Rover needs to finish moving first before the next one can move.

### ➡️ Output

For each Rover, the output represents its final position (final coordinates and where it is facing).

**Example Test Case**

_Lines of Input to the Program:_

```
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
```

_Expected Output:_

```
1 3 N
5 1 E
```

## Creating Your application

This app is a mini-adventure story which runs in the console.

👉 First, fork and clone this repository.

👉 Then run this command:

```
npm install

```

👉 You can then run

```
npm start
```

## How application works?

👉 After start it will take Plateau CoOrdinates as First Input

![plateauInputs](images/plateauInputs.png)

👉 Will take Rover Initial positionas as second Input

![RoverCoordinatesInput](images/RoverCoordinatesInput.png)

👉 And it will take Plateau CoOrdinates as final Input and displays final rover position

![RoverInstructions](images/RoverInstructions.png)

👉 To continuation it will prompt if user wants to continue launching the rover on same plateau or not, if yes it will take same plateau coOrdinates

![YesOrNoPrompt](images/YesOrNoPrompt.png)

#### Core logic files :

```
src/plateau/isInsidePlateau.ts
src/rover/setRoverAndExecute.ts
```

#### FlowChart on how input data is being processed in the business logic:

[![flowChart](images/businessLogicFlowChart.png)](images/MarsRoverFlowChart.pdf)<base target="_blank">

#### Input data flow from UI Files to Core files :

```
    index.ts
    |
    getPlateauInputs.ts ---->   getPlateauCorners.ts    ---->   isOnPlateau.ts
    |                                   |
    startSettingRover   ---->   getRoverPosition.ts
                        |               |
                        ----->  getRoverInstructions.ts
                        |               |
                        ----->  setRoverAndExecute.ts   ---->   isOnPlateau.ts

```

### ❗NOTE:

- This application can take lower Left coordinates of the plateau as input as well.
- Currently the shape of the plateau is Square/Rectangle only.
- There are no obstacles for now, current business logic works if in future any obstacles are being considered on the plateau.

## 💁💡Future thoughts

Considering obstacles, Rover collisions and other plateau shapes.
