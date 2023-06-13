import { getInputData } from "../Util/util.js";

const _inputPath = "./Day3/input.txt";

function parser(inputData) {
    let input = inputData.split(/\r?\n/);
    return input;
}

// take a string as parameter
// split string in half
// find the character that exists in both string parts irresponsive of position
// return character
function findCommonCharacter(string) {
    var stringLength = string.length;
    var halfLength = stringLength / 2;
    var firstHalf = string.substring(0, halfLength);
    var secondHalf = string.substring(halfLength, stringLength);
    var commonCharacter = "";
    for (var i = 0; i < firstHalf.length; i++) {
        if (secondHalf.indexOf(firstHalf[i]) > -1) {
            commonCharacter = firstHalf[i];
            break;
        }
    }
    return commonCharacter;
}

// take an array of strings as parameter
// read 3 lines at a time from array
// iterate over the shortest line and find the character that exists on all 3 lines
// calculate priority for the character
// add priority to total
// return total
function calculatePriorityForArray(array) {
    var total = 0;
    for (var i = 0; i < array.length; i += 3) {
        var firstLine = array[i];
        var secondLine = array[i + 1];
        var thirdLine = array[i + 2];
        var commonCharacter = "";
        var shortestLine = firstLine.length;
        if (secondLine.length < shortestLine) {
            shortestLine = secondLine.length;
        }
        if (thirdLine.length < shortestLine) {
            shortestLine = thirdLine.length;
        }
        for (var j = 0; j < shortestLine; j++) {
            if (
                firstLine[j] == secondLine[j] &&
                secondLine[j] == thirdLine[j]
            ) {
                commonCharacter = firstLine[j];
                break;
            }
        }
        total += calculatePriority(commonCharacter);
    }
    return total;
}

// calculate priority according to input character
// return priority
// a-z = 1-26
// A-Z = 27-52
function calculatePriority(character) {
    var priority = 0;
    if (character >= "a" && character <= "z") {
        priority = character.charCodeAt(0) - 96;
    } else if (character >= "A" && character <= "Z") {
        priority = character.charCodeAt(0) - 38;
    }
    return priority;
}

var foo = getInputData(_inputPath)(parser);
var total = 0;
for (var i = 0; i < foo.length; i++) {
    total += calculatePriority(findCommonCharacter(foo[i]));
}
console.log(total);

var total2 = calculatePriorityForArray(foo);
console.log(total2);
