import * as fs from "fs";

export function readArrayOfValuesFromFile(fileName) {
    var text = fs.readFileSync(fileName, "utf8");
    return function parseContent(parser) {
        return parser(input);
    };
}

export function getInputData(path) {
    var input = fs.readFileSync(path, "utf8");

    return function parseContent(parser) {
        return parser(input);
    };
}
