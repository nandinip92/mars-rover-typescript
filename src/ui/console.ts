/* 
	Console-based code isolated from the rest of the app with some handy wrappers.
*/

import * as readline from "node:readline";

export function print(str: string): void {
  console.log(str);
  console.log();
}

export function clear(addTopBorder: boolean): void {
  console.clear();
  if (addTopBorder) {
    print("------------------------------------");
  }
}

const readlineSync = require(`readline-sync`);

// this function allows us to prompt the user with a question, and call a callback function with whatever string has been input
export function askQuestion(question: string) {
  return readlineSync.question(`❓ ${question} 👉 `);
  //return new Promise((resolve) => readlineSync.question(`❓ ${question} 👉 `));
}
