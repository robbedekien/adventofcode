// Day 3.1 https://adventofcode.com/2021/day/3
import fs from "fs";

// Methods
const calculatePowerConcumption = (array) => {
  let oxygen = [...array];
  let co2 = [...array];

  // under the assumption all elements in the array have the same length
  // Calculate oxygen generator rating
  const oxygenGeneratorRating = applyBitcriteria(oxygen, true);
  const co2ScrubberRating = applyBitcriteria(co2, false);

  return parseInt(oxygenGeneratorRating, 2) * parseInt(co2ScrubberRating, 2);
};

const applyBitcriteria = (array, mostCommon = true) => {
  const arrayLength = array.length;

  for (let index = 0; index < arrayLength; index++) {
    if (array.length <= 1) {
      break;
    }

    let total = 0;

    array.forEach((number) => {
      total += parseInt(number[index]);
    });

    let citeria = mostCommon
      ? total >= array.length / 2
        ? "1"
        : "0"
      : total >= array.length / 2
      ? "0"
      : "1";

    array = array.filter((number) => {
      return number[index] === citeria;
    });
  }

  // return first and only array element
  return array[0];
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
