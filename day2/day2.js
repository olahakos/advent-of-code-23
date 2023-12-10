import { fileReader } from '../shared/fileReader.js';

const bagLock = {
    'red': 12,
    'green': 13,
    'blue': 14,
};


const getLineSegments = function (line) {
    const segmentedLine = {};
    const lineByColumn = line.split(':');
    segmentedLine.gameNumber = lineByColumn[0].split(' ')[1];
    return segmentedLine;
}

const main = async () => {
    const data = await fileReader('./day2/day2.input.txt')
    // const total = getNumbersOut(data);
    console.log(data);
}

if (process.env.NODE_ENV!=='test') main();

export {
    getLineSegments,
}