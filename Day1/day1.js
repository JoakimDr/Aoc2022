import * as fs from "fs";

import { getInputData } from "../Util/util.js";

const _inputPath = "./Day1/input.txt";

function parser(inputData) {
    let input = inputData.split(/\r?\n/);
    return input;
}

//import { readArrayOfValuesFromFile } from "../Util/util.js";

// given a file name, return an array of values
// e.g. readArrayOfValuesFromFile("day1.txt") should return [1721, 979, 366, 299, 675, 1456]
// read the file, store the response in a variable
// split the response by new line
// map the response to a new array of numbers
// return the array
export function readArrayOfValuesFromFile(fileName) {
    var text = fs.readFileSync(fileName, "utf8");
    var lines = text.split("\n");
    var numbers = lines.map(Number);
    return numbers;
}

//read array of values from parameter
// calculate sum from values restarting for empty lines
// return array of sums
function calculateSumOfValues(arrayOfValues) {
    var sum = 0;
    var sumArray = [];
    for (var i = 0; i < arrayOfValues.length; i++) {
        if (arrayOfValues[i] == "") {
            sumArray.push(sum);
            sum = 0;
        } else {
            sum += parseInt(arrayOfValues[i]);
        }
    }
    sumArray.push(sum);
    return sumArray;
}

//read array of values from parameter
// sort array of values by value descending
// return array with first 3 values
function calculateSumOfTopThreeValues(arrayOfValues) {
    var sortedArray = arrayOfValues.sort(function (a, b) {
        return b - a;
    });
    var topThree = sortedArray.slice(0, 3);
    return topThree;
}

//sum values of array
//return sum
function sumValues(arrayOfValues) {
    var sum = 0;
    for (var i = 0; i < arrayOfValues.length; i++) {
        sum += arrayOfValues[i];
    }
    return sum;
}

// sum values of array using fastest method
// return sum
function sumValuesFast(arrayOfValues) {
    var sum = 0;
    for (var i = 0; i < arrayOfValues.length; i++) {
        sum += arrayOfValues[i];
    }
    return sum;
}

// sum values of array using map
// return sum
function sumValuesMap(arrayOfValues) {
    var sum = 0;
    arrayOfValues.map(function (value) {
        sum += value;
    });
    return sum;
}

//sum values of array using reduce
//return sum
function sumValuesReduce(arrayOfValues) {
    var sum = arrayOfValues.reduce(function (a, b) {
        return a + b;
    }, 0);
    return sum;
}

//sum values of array using foreach
//return sum
function sumValuesForEach(arrayOfValues) {
    var sum = 0;
    arrayOfValues.forEach(function (value) {
        sum += value;
    });
    return sum;
}

//var foo = readArrayOfValuesFromFile("day1/input.txt");
var foo = getInputData(_inputPath)(parser);
var bar = calculateSumOfValues(foo);
var barf = Math.max(...bar);
console.log(barf);
var fubar = calculateSumOfTopThreeValues(bar);
console.log(fubar);
var nixx = sumValuesReduce(fubar);
console.log(nixx);
