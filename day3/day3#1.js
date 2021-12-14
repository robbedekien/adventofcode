// Day 3.1 https://adventofcode.com/2021/day/3
import fs from "fs";

// Methods
const calculatePowerConcumption = (array) => {
  let gamma = "";
  let epsilon = "";

  // under the assumption all elements in the array have the same length
  for (let index = 0; index < array[0].length; index++) {
    let total = 0;

    array.forEach((number) => {
      total += parseInt(number[index]);
    });

    gamma += total > array.length / 2 ? "1" : "0";
    epsilon += total > array.length / 2 ? "0" : "1";
  }

  return parseInt(gamma, 2) * parseInt(epsilon, 2);
};

// Reading inputs
const input = fs.readFileSync("day3/input.txt").toString().split("\n");

const testInput = fs.readFileSync("day3/testinput.txt").toString().split("\n");

// Solving test
const testResult = calculatePowerConcumption(testInput);
console.log("Results test input:", testResult);

// Solving puzzle
const result = calculatePowerConcumption(input);
console.log("Results puzzle input:", result);
