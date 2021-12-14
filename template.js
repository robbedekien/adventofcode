// Day x.1 https://adventofcode.com/2021/day/x
import fs from "fs";

// Methods
const method = (param) => {};

// Reading inputs
const input = fs.readFileSync("dayN/input.txt").toString().split("\n");

const testInput = fs.readFileSync("dayN/testinput.txt").toString().split("\n");

// Solving test
const testResult = method(testInput);
console.log("Results test input:", testResult);

// Solving puzzle
const result = method(input);
console.log("Results puzzle input:", result);
