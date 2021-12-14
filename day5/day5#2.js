// Day 5.1 https://adventofcode.com/2021/day/5
import fs from 'fs';

// Methods
const addVectorToMatrix = (matrix, vector) => {
    // For easier readability
    const X = 0;
    const Y = 1;

    // Parse vectors
    let from = vector
        .split(' -> ')[0]
        .split(',')
        .map((number) => parseInt(number));
    let to = vector
        .split(' -> ')[1]
        .split(',')
        .map((number) => parseInt(number));

    if (from[Y] === to[Y]) {
        // Swap if order is descending
        if (from[X] > to[X]) {
            let intermediate = from;
            from = to;
            to = intermediate;
        }

        for (let column = from[X]; column <= to[X]; column++) {
            if (!matrix[from[Y]]) {
                matrix[from[Y]] = [];
            }

            let item = matrix[from[Y]][column];
            matrix[from[Y]][column] = item ? item + 1 : 1;
        }
    }

    if (from[X] === to[X]) {
        // Swap if order is descending
        if (from[Y] > to[Y]) {
            let intermediate = from;
            from = to;
            to = intermediate;
        }

        for (let row = from[Y]; row <= to[Y]; row++) {
            if (!matrix[row]) {
                matrix[row] = [];
            }

            let item = matrix[row][from[X]];
            matrix[row][from[X]] = item ? item + 1 : 1;
        }
    }

    if (Math.abs(from[X] - to[X]) === Math.abs(from[Y] - to[Y])) {
        let column = from[X];
        let row = from[Y];

        // Do a first itteration
        if (!matrix[row]) {
            matrix[row] = [];
        }

        let item = matrix[row][column];
        matrix[row][column] = item ? item + 1 : 1;

        while (column !== to[X] && row !== to[Y]) {
            column < to[X] ? column++ : column--;
            row < to[Y] ? row++ : row--;

            if (!matrix[row]) {
                matrix[row] = [];
            }

            let item = matrix[row][column];
            matrix[row][column] = item ? item + 1 : 1;
        }
    }
};

const amountOfDanger = (vectors) => {
    // Place all vectors in matrix
    let locationMatrix = [];

    vectors.forEach((vector) => {
        addVectorToMatrix(locationMatrix, vector);
    });

    // Calculate amount of dangerous spots
    return locationMatrix.reduce((sum, row) => {
        return (sum += row.reduce((sum, number) => {
            return (sum += number >= 2 ? 1 : 0);
        }, 0));
    }, 0);
};

// Reading inputs
const input = fs.readFileSync('day5/input.txt').toString().split('\n');

const testInput = fs.readFileSync('day5/testinput.txt').toString().split('\n');

// Solving test
const testResult = amountOfDanger(testInput);
console.log('Results test input:', testResult);

// Solving puzzle
const result = amountOfDanger(input);
console.log('Results puzzle input:', result);
