// Day 1.2 https://adventofcode.com/2021/day/1#part2
import fs from "fs";

// Methods
const calculateWindowIncreases = (array) => {
  let previousSum = array[0] + array[1] + array[2];
  let newSum;

  return array.reduce((total, number, index, array) => {
    if (index === 0) {
      return total;
    }

    if (newSum) {
      previousSum = newSum;
    }

    if (index > array.length - 3) {
      return total;
    }

    newSum = number + array[index + 1] + array[index + 2];

    if (newSum > previousSum) {
      return ++total;
    }

    return total;
  }, 0);
};

// Reading inputs
const input = fs
  .readFileSync("day1/input.txt")
  .toString()
  .split("\n")
  .map((input) => parseInt(input));

const testInput = fs
  .readFileSync("day1/testinput.txt")
  .toString()
  .split("\n")
  .map((input) => parseInt(input));

// Solving test
const testResult = calculateWindowIncreases(testInput);
console.log("Results test input:", testResult);

// Solving puzzle
const result = calculateWindowIncreases(input);
console.log("Results puzzle input:", result);
