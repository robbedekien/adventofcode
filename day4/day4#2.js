// Day x.1 https://adventofcode.com/2021/day/x
import fs from 'fs';

// Methods
const parseBoard = (board) => {
    return board.split('\n').map((row) =>
        // remove dubble spaces and parse numbers
        row
            .split(' ')
            .filter((number) => number)
            .map((number) => {
                return { value: parseInt(number), hit: false };
            })
    );
};

const boardIsWon = (board) => {
    // check if a row has a valid win scenario
    for (let row = 0; row < board.length; row++) {
        let isWon = board[row].every((number) => number.hit);

        if (isWon) {
            return true;
        }
    }

    // check all columns if it has a valid win scenario | Assumes board has equal rows as columns
    for (let column = 0; column < board.length; column++) {
        let isWon = true;

        board.some((row) => {
            if (!row[column].hit) {
                isWon = false;

                // exit loop
                return true;
            }
        });

        if (isWon) {
            return true;
        }
    }

    return false;
};

const processTurn = (turn, boards) => {
    // Removes all boards that have a winning condition
    boards.forEach((board, boardIndex) => {
        for (let row = 0; row < board.length; row++) {
            for (let column = 0; column < board[row].length; column++) {
                const element = board[row][column];
                if (turn === element.value) {
                    element.hit = true;
                }
            }
        }
    });

    return boards.some((board, boardIndex) => {
        // return true if a board has won and is the last one
        if (boardIsWon(board) && boards.length > 1) {
            boards.splice(boardIndex, 1);
        } else if (boardIsWon(board)) {
            return true;
        }
    });
};

const calculateScore = (board, turn) => {
    const sumUnmarked = board.reduce((sum, row) => {
        return (sum += row.reduce((sum, number) => {
            return (sum += !number.hit ? number.value : 0);
        }, 0));
    }, 0);

    return sumUnmarked * turn;
};

const getWinningBoardScore = (turns, boards) => {
    let lastWinningBoard = null;
    let lastWinningTurn = null;
    let originalAmountOfBoards = boards.length;

    turns.some((turn) => {
        let lastWinningBoard = processTurn(turn, boards);

        if (lastWinningBoard) {
            lastWinningTurn = turn;
            return true;
        }
    });

    return calculateScore(boards[0], lastWinningTurn);
};

// Reading inputs
const input = fs.readFileSync('day4/input.txt').toString().split('\n\n');
const turns = input
    .splice(0, 1)[0]
    .split(',')
    .map((number) => parseInt(number));
const boards = input.map((board) => parseBoard(board));

const testInput = fs
    .readFileSync('day4/testinput.txt')
    .toString()
    .split('\n\n');

const testTurns = testInput
    .splice(0, 1)[0]
    .split(',')
    .map((number) => parseInt(number));
const testBoards = testInput.map((board) => parseBoard(board));

// Solving test
const testResult = getWinningBoardScore(testTurns, testBoards);
console.log('Results test input:', testResult);

// Solving puzzle
const result = getWinningBoardScore(turns, boards);
console.log('Results puzzle input:', result);
