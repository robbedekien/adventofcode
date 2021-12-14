// Day 1 https://adventofcode.com/2021/day/1#
import fs from "fs";

// Methods
const calculateIncreased = (array) => {
  return array.reduce((total, number, index, array) => {
    if (index === 0) {
      return total;
    }

    if (parseInt(number) > parseInt(array[index - 1])) {
      return ++total;
    }

    return total;
  }, 0);
};

// Reading inputs
const input = fs.readFileSync("day1/input.txt").toString().split("\n");

const testInput = fs.readFileSync("day1/testinput.txt").toString().split("\n");

// Solving test
const testResult = calculateIncreased(testInput);
console.log("Results test input:", testResult);

// Solving test
const result = calculateIncreased(input);
console.log("Results puzzle input:", result);
