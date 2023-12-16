import { isNumber, whatIsThisCharacter } from "../shared/cleanString.js";
import { fileReader } from "../shared/fileReader.js";

const createMatrix = (data) => {
    const mtx = [];
    data.split("\n").forEach((line, i) => {
        mtx[i] = [];
        line.split("").forEach((char, j) => {
            mtx[i][j] = char;
        });
    });
    return mtx;
};

const stepUp = (c, w, h) => {
    c[0]++;
    if (c[0] < w) return [c[0], c[1]];
    else if (c[1] + 1 < h) return [0, c[1] + 1];
    else return false;
};

const findNextItem = (mtx, c) => {
    const width = mtx[0].length;
    const height = mtx.length;
    let foundIt = false;
    let end = false;
    while (!foundIt && !end) {
        if (whatIsThisCharacter(mtx[c[1]][c[0]]) === "NUMBER") foundIt = true;
        else {
            c = stepUp(c, width, height);
            if (!c) end = true;
        }
    }
    if (foundIt) return c;
    return false;
};

/**
 * mtx: [][];
 * c: [i,j]
 *  return: {
 * int length: # of characters
 * int value: value of the number
 * }
 */
const getNumberValue = (mtx, c) => {
    let length = 0,
        value = 0;
    if (!mtx) return { length, value };
    while (isNumber(mtx[c[0]][c[1]])) {
        length++;
        value = value * 10 + parseInt(mtx[c[0]][c[1]]);
        c[1] = c[1] + 1;
    }
    return { length, value };
};

// 1. find next number in the matrix
// 2. get the value of the item (depends on symbol closeness)
// 3. commulate total number
// 4. recursion
const getValidNumbersFromMtx = (mtx, cursor, total) => {
    cursor = findNextItem(mtx, cursor);
    if (!cursor) return total; // end of mtx

    // {cursor, value} = getItemValue(cursor);
    // return {
    //     cursor,
    //     total,
    // };
};

const main = async () => {
    const data = await fileReader("./day3/day3.input.txt");
    const mtx = createMatrix(data);
    const total = getValidNumbersFromMtx(mtx, [0, 0], 0);
    console.log(total);
};

if (process.env.NODE_ENV !== "test") main();

export {
    createMatrix,
    getValidNumbersFromMtx,
    stepUp,
    findNextItem,
    getNumberValue,
};
