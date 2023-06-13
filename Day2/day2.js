import * as fs from "fs";

import { getInputData } from "../Util/util.js";

const _inputPath = "./Day2/input.txt";

function parser(inputData) {
    let input = inputData.split(/\r?\n/);
    return input;
}

// given a file name, return an array of values
// e.g. readArrayOfValuesFromFile("day1.txt") should return [1721, 979, 366, 299, 675, 1456]
// read the file, store the response in a variable
// split the response by new line
// return the array
// export function readArrayOfValuesFromFile(fileName) {
//     var text = fs.readFileSync(fileName, "utf8");
//     var lines = text.split("\r\n");
//     return lines;
// }

const PLAY_ROCK = "A";
const PLAY_PAPER = "B";
const PLAY_SCISSORS = "C";

const RESPONSE_ROCK = "X";
const RESPONSE_PAPER = "Y";
const RESPONSE_SCISSORS = "Z";

const WIN_POINTS = 6;
const DRAW_POINTS = 3;
const LOSE_POINTS = 0;

const SHAPE_POINTS_ROCK = 1;
const SHAPE_POINTS_PAPER = 2;
const SHAPE_POINTS_SCISSORS = 3;

//take 2 player inputs as parameters
// calculate points for player 2 according to player 1 input
// RESPONSE_ROCK beats PLAY_SCISSORS
// RESPONSE_ROCK loses PLAY_PAPER
// RESPONSE_ROCK draws PLAY_ROCK
// RESPONSE_SCISSORS beats PLAY_PAPER
// RESPONSE_SCISSORS loses PLAY_ROCK
// RESPONSE_SCISSORS draws PLAY_SCISSORS
// RESPONSE_PAPER beats PLAY_ROCK
// RESPONSE_PAPER loses PLAY_SCISSORS
// RESPONSE_PAPER draws PLAY_PAPER
//if player 2 won sum WIN_POINTS and SHAPE_POINTS
//if player 2 lost sum LOSE_POINTS and SHAPE_POINTS
//if player 2 draw sum DRAW_POINTS and SHAPE_POINTS
//return points
function calculatePoints(player1, player2) {
    var points = 0;
    if (player1 == PLAY_ROCK) {
        if (player2 == RESPONSE_SCISSORS) {
            points += LOSE_POINTS + SHAPE_POINTS_SCISSORS;
        } else if (player2 == RESPONSE_PAPER) {
            points += WIN_POINTS + SHAPE_POINTS_PAPER;
        } else if (player2 == RESPONSE_ROCK) {
            points += DRAW_POINTS + SHAPE_POINTS_ROCK;
        }
    } else if (player1 == PLAY_SCISSORS) {
        if (player2 == RESPONSE_PAPER) {
            points += LOSE_POINTS + SHAPE_POINTS_PAPER;
        } else if (player2 == RESPONSE_ROCK) {
            points += WIN_POINTS + SHAPE_POINTS_ROCK;
        } else if (player2 == RESPONSE_SCISSORS) {
            points += DRAW_POINTS + SHAPE_POINTS_SCISSORS;
        }
    } else if (player1 == PLAY_PAPER) {
        if (player2 == RESPONSE_ROCK) {
            points += LOSE_POINTS + SHAPE_POINTS_ROCK;
        } else if (player2 == RESPONSE_SCISSORS) {
            points += WIN_POINTS + SHAPE_POINTS_SCISSORS;
        } else if (player2 == RESPONSE_PAPER) {
            points += DRAW_POINTS + SHAPE_POINTS_PAPER;
        }
    }
    // console.log(player1 + ":" + player2 + ":" + points);
    return points;
}

const LOSE_INSTRUCTION = "X";
const DRAW_INSTRUCTION = "Y";
const WIN_INSTRUCTION = "Z";

// Take 2 parameters
// parameter 1 is player 1 input
// parameter 2 is if player 2 should win, lose or draw
// if parameter 2 is WIN_INSTRUCTION, caLculate the input that will win
// if parameter 2 is LOSE_INSTRUCTION, caLculate the input that will lose
// if parameter 2 is DRAW_INSTRUCTION, caLculate the input that will draw
// RESPONSE_ROCK beats PLAY_SCISSORS
// RESPONSE_ROCK loses PLAY_PAPER
// RESPONSE_ROCK draws PLAY_ROCK
// RESPONSE_SCISSORS beats PLAY_PAPER
// RESPONSE_SCISSORS loses PLAY_ROCK
// RESPONSE_SCISSORS draws PLAY_SCISSORS
// RESPONSE_PAPER beats PLAY_ROCK
// RESPONSE_PAPER loses PLAY_SCISSORS
// RESPONSE_PAPER draws PLAY_PAPER
// if player 2 won sum WIN_POINTS and SHAPE_POINTS
// if player 2 lost sum LOSE_POINTS and SHAPE_POINTS
// if player 2 draw sum DRAW_POINTS and SHAPE_POINTS
// return points
function calculatePointsForInstruction(player1, instruction) {
    var points = 0;
    if (instruction == WIN_INSTRUCTION) {
        if (player1 == PLAY_ROCK) {
            points += WIN_POINTS + SHAPE_POINTS_PAPER;
        } else if (player1 == PLAY_SCISSORS) {
            points += WIN_POINTS + SHAPE_POINTS_ROCK;
        } else if (player1 == PLAY_PAPER) {
            points += WIN_POINTS + SHAPE_POINTS_SCISSORS;
        }
    } else if (instruction == LOSE_INSTRUCTION) {
        if (player1 == PLAY_ROCK) {
            points += LOSE_POINTS + SHAPE_POINTS_SCISSORS;
        } else if (player1 == PLAY_SCISSORS) {
            points += LOSE_POINTS + SHAPE_POINTS_PAPER;
        } else if (player1 == PLAY_PAPER) {
            points += LOSE_POINTS + SHAPE_POINTS_ROCK;
        }
    } else if (instruction == DRAW_INSTRUCTION) {
        if (player1 == PLAY_ROCK) {
            points += DRAW_POINTS + SHAPE_POINTS_ROCK;
        } else if (player1 == PLAY_SCISSORS) {
            points += DRAW_POINTS + SHAPE_POINTS_SCISSORS;
        } else if (player1 == PLAY_PAPER) {
            points += DRAW_POINTS + SHAPE_POINTS_PAPER;
        }
    }
    // console.log(player1 + ":" + instruction + ":" + points);
    return points;
}

//take a string as parameter
//split the string by space
//first part is player 1 input
//second part is player 2 input
function calculatePointsFromString(input) {
    var points = 0;
    var player1 = input.split(" ")[0];
    var player2 = input.split(" ")[1];
    points = calculatePoints(player1, player2);
    return points;
}

//take a string as parameter
// split the string by space
// first part is player 1 input
// second part is instruction
// call calculatePointsForInstruction with player 1 input and instruction
// return points
function calculatePointsForInstructionFromString(input) {
    var points = 0;
    var player1 = input.split(" ")[0];
    var instruction = input.split(" ")[1];
    points = calculatePointsForInstruction(player1, instruction);
    return points;
}

var foo = getInputData(_inputPath)(parser);

var total = 0;
for (var x = 0; x < foo.length; x++) {
    total += calculatePointsFromString(foo[x]);
    console.log(foo[x] + " : " + total);
}

var total2 = 0;
for (var x = 0; x < foo.length; x++) {
    total2 += calculatePointsForInstructionFromString(foo[x]);
    console.log(foo[x] + " : " + total2);
}

foo.forEach((element) => {
    total += calculatePointsFromString(element);
    console.log(element + " : " + total);
});
