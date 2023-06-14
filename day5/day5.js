import { getInputData, matrix } from "../Util/util.js";

const _inputPath = "./day5/input.txt";

function parser(input) {
    // split inputData rows into 2 parts using blank line as separator
    // first part is stacks
    // second parts is moves
    // last line of stacks contains number of stacks and position on each row for each stack in stacks
    // parse every line in stacks. if a line contains a character for a stack add it to a StacksArray at the position of the stack
    // parse every line in moves, split every line into 3 parts, first part is NumberOfCrates, second part is sourceStack, third part is destinationStack
    // for every move add an object to a movesArray with NumberOfCrates, sourceStack and destinationStack
    // return an array with stacksArray and movesArray
    var [crates, moves] = input.split("\r\n\r");

    var stacks = matrix(9, 0);
    crates.split("\n").forEach((row) => {
        [1, 5, 9, 13, 17, 21, 25, 29, 33].forEach((c, idx) => {
            if (row[c] !== " ") stacks[idx].push(row[c]);
        });
    });
    stacks = stacks.map((pile) => pile.reverse());
    moves = moves.split("\n").map((row) => {
        let R = row.split(" ");
        return {
            n: Number(R[1]),
            from: Number(R[3]),
            to: Number(R[5]),
        };
    });
    return [stacks, moves];
}

function getNumberOfStacks(firstRow) {
    return Math.ceil(firstRow.length / 4);
}

// take an array of stacks and an array of moves as parameter
// iterate over moves
// for every move
// get the number of crates to move
// get the source stack
// get the destination stack
// move the crates from source stack to destination stack one by one
// return the top crate for every stack in the order of the stacks as a string
function moveCrates9000(stacks, moves) {
    moves.forEach((move) => {
        var numberOfCrates = move.n;
        var sourceStack = move.from;
        var destinationStack = move.to;
        for (var i = 0; i < numberOfCrates; i++) {
            var crate = stacks[sourceStack - 1].pop();
            stacks[destinationStack - 1].push(crate);
        }
    });
    var result = "";
    stacks.forEach((stack) => {
        result += stack[stack.length - 1];
    });
    return result;
}

// take an array of stacks and an array of moves as parameter
// iterate over moves
// for every move
// get the number of crates to move
// get the source stack array
// get the destination stack array
// move the number of crates from source stack to destination stack
// return the top crate for every stack in the order of the stacks as a string
function moveCrates9001(stacks, moves) {
    moves.forEach((move) => {
        var numberOfCrates = move.n;
        var sourceStack = move.from;
        var destinationStack = move.to;
        if (
            !isNaN(numberOfCrates) &&
            !isNaN(sourceStack) &&
            !isNaN(destinationStack)
        ) {
            var crates = stacks[sourceStack - 1].splice(
                stacks[sourceStack - 1].length - numberOfCrates,
                numberOfCrates
            );
            stacks[destinationStack - 1].push(...crates);
        }
    });
    var result = "";
    stacks.forEach((stack) => {
        result += stack[stack.length - 1];
    });
    return result;
}

var [stacks, moves] = getInputData(_inputPath)(parser);

var foo = moveCrates9000(structuredClone(stacks), moves);
console.log("part 1 " + foo);
var barfoo = moveCrates9001(structuredClone(stacks), moves);
console.log("part 2 " + barfoo);
