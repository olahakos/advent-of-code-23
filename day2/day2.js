import { removeAllSpaces } from "../shared/cleanString.js";
import { fileReader } from "../shared/fileReader.js";

const bagLock = {
    red: 12,
    green: 13,
    blue: 14,
};

const legitColors = ["red", "green", "blue"];

const getDrawObject = (str) => {
    const handArr = removeAllSpaces(str).split(",");
    const handObject = {};
    handArr.forEach((hand) => {
        for (const color in bagLock) {
            const modStr = hand.replace(color, "");
            if (modStr !== hand) {
                handObject[color] = parseInt(modStr);
            }
        }
    });
    return handObject;
};

// segment example: '8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red'
const getDataByDices = function (segment) {
    const draws = [];
    if (!segment) return draws;
    const rawDraws = segment.split(";");
    rawDraws.forEach((item) => {
        draws.push(getDrawObject(item));
    });
    return draws;
};
// line example: 'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red'
const getLineSegments = function (line) {
    const segmentedLine = {};
    const lineByColumn = line.split(":");
    segmentedLine.gameNumber = parseInt(lineByColumn[0].trim().split(" ")[1]);
    segmentedLine.draws = getDataByDices(lineByColumn[1]);
    return segmentedLine;
};

const lineValidator = (lineObject) => {
    if (!lineObject || !lineObject.gameNumber) return false;
    for (const draw of lineObject.draws) {
        if (
            draw.red > bagLock.red ||
            draw.green > bagLock.green ||
            draw.blue > bagLock.blue
        ) {
            return false; // Exit the function if any condition fails
        }
    }
    return true;
};

const getPowerNumber = (lineObject) => {
    if (!lineObject || !lineObject.gameNumber) return 0;
    const minObject = {
        red: 0,
        green: 0,
        blue: 0,
    };
    for (const draw of lineObject.draws) {
        if (draw.red > minObject.red) minObject.red = draw.red;
        if (draw.green > minObject.green) minObject.green = draw.green;
        if (draw.blue > minObject.blue) minObject.blue = draw.blue;
    }
    return minObject.red * minObject.blue * minObject.green;
};

const getCommulatedGameNumbers = (lines) => {
    let total = 0;
    lines.split("\n").forEach((line) => {
        const lineObject = getLineSegments(line);
        if (lineValidator(lineObject)) {
            total += lineObject.gameNumber;
        }
    });
    return total;
};

const getCommulatedPowerNumbers = (lines) => {
    let total = 0;
    lines.split("\n").forEach((line) => {
        const lineObject = getLineSegments(line);
        total += getPowerNumber(lineObject);
    });
    return total;
};

const main = async () => {
    const data = await fileReader("./day2/day2.input.txt");
    // const total = getCommulatedGameNumbers(data)
    const total = getCommulatedPowerNumbers(data);
    console.log(total);
};

if (process.env.NODE_ENV !== "test") main();

export {
    getLineSegments,
    getDrawObject,
    getDataByDices,
    lineValidator,
    getPowerNumber,
    getCommulatedGameNumbers,
    getCommulatedPowerNumbers,
};
