// Day 6.1 https://adventofcode.com/2021/day/6
import fs from 'fs';

// Methods
// Thanks to https://www.youtube.com/watch?v=-ihdC-AKqPM
const simulateLife = (array, days) => {
    // use queue to cycle and keep totals
    const queue = Array(9).fill(0);
    array.forEach((fish, index) => {
        queue[fish]++;
    });

    for (let day = 0; day < days; day++) {
        let amountOfFishes = queue.shift();
        queue.push(amountOfFishes);
        queue[6] += amountOfFishes;
    }

    return queue.reduce((sum, amount) => sum + amount, 0);
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
const testResult = simulateLife(testInput, 256);
console.log('Results test input:', testResult);

// Solving puzzle
const result = simulateLife(input, 256);
console.log('Results puzzle input:', result);
