import { getInputData } from "../Util/util.js";

const _inputPath = "./day4/input.txt";

function parser(inputData) {
    let input = inputData.split(/\r?\n/);
    return input;
}

// take a string as input and split it into two parts using comma as separator
// each part describes a range using format "number-number"
// compare the two parts and return 1 if one part fully encloses the other
// return 0 otherwise
function compareRanges(string) {
    var parts = string.split(",");
    var firstPart = parts[0];
    var secondPart = parts[1];
    var firstPartRange = firstPart.split("-");
    var secondPartRange = secondPart.split("-");
    var firstPartStart = parseInt(firstPartRange[0]);
    var firstPartEnd = parseInt(firstPartRange[1]);
    var secondPartStart = parseInt(secondPartRange[0]);
    var secondPartEnd = parseInt(secondPartRange[1]);
    if (
        (firstPartStart <= secondPartStart && firstPartEnd >= secondPartEnd) ||
        (secondPartStart <= firstPartStart && secondPartEnd >= firstPartEnd)
    ) {
        return 1;
    }
    return 0;
}

// take a string as input and split it into two parts using comma as separator
// each part describes a range using format "number-number"
// compare the two parts and return 1 if the parts overlap partially or fully
// return 0 otherwise
function compareRanges2(string) {
    var parts = string.split(",");
    var firstPart = parts[0];
    var secondPart = parts[1];
    var firstPartRange = firstPart.split("-");
    var secondPartRange = secondPart.split("-");
    var firstPartStart = parseInt(firstPartRange[0]);
    var firstPartEnd = parseInt(firstPartRange[1]);
    var secondPartStart = parseInt(secondPartRange[0]);
    var secondPartEnd = parseInt(secondPartRange[1]);
    if (
        (firstPartStart <= secondPartStart &&
            firstPartEnd >= secondPartStart) ||
        (secondPartStart <= firstPartStart &&
            secondPartEnd >= firstPartStart) ||
        (firstPartStart <= secondPartEnd && firstPartEnd >= secondPartEnd) ||
        (secondPartStart <= firstPartEnd && secondPartEnd >= firstPartEnd)
    ) {
        return 1;
    }
    return 0;
}

var foo = getInputData(_inputPath)(parser);
var total = 0;
for (var i = 0; i < foo.length; i++) {
    total += compareRanges(foo[i]);
}
console.log(total); // 109

var total2 = 0;
for (var i = 0; i < foo.length; i++) {
    total2 += compareRanges2(foo[i]);
}
console.log(total2); // 109
