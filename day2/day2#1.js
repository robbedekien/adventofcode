// Day 2.1 https://adventofcode.com/2021/day/2
import fs from "fs";

// Methods
const processSteps = (array) => {
  let horizontal = 0;
  let vertical = 0;

  array.forEach((step) => {
    let instruction = step.split(" ")[0];
    let amount = parseInt(step.split(" ")[1]);

    switch (instruction) {
      case "forward":
        horizontal += amount;
        break;

      case "down":
        vertical += amount;
        break;

      case "up":
        vertical -= amount;
        break;

      default:
        break;
    }
  });

  return horizontal * vertical;
};

// Reading inputs
const input = fs.readFileSync("day2/input.txt").toString().split("\n");

const testInput = fs.readFileSync("day2/testinput.txt").toString().split("\n");

// Solving test
const testResult = processSteps(testInput);
console.log("Results test input:", testResult);

// Solving puzzle
const result = processSteps(input);
console.log("Results puzzle input:", result);
