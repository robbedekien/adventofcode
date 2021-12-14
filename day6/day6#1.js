// Day 6.1 https://adventofcode.com/2021/day/6
import fs from 'fs';

// Methods
const simulateLife = (array, days) => {
    for (let day = 0; day < days; day++) {
        array.forEach((fish, index) => {
            if (fish === 0) {
                array[index] = 6;
                array.push(8);
                return;
            }

            array[index] = --fish;
        });
    }

    return array.length;
};

// Reading inputs
const input = fs
    .readFileSync('day6/input.txt')
    .toString()
    .split(',')
    .map((number) => parseInt(number));

const testInput = fs
    .readFileSync('day6/testinput.txt')
    .toString()
    .split(',')
    .map((number) => parseInt(number));

// Solving test
const testResult = simulateLife(testInput, 80);
console.log('Results test input:', testResult);

// Solving puzzle
const result = simulateLife(input, 80);
console.log('Results puzzle input:', result);
