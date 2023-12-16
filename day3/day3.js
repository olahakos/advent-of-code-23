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

const getMatrixCol = (mtx, j) => {
    const arr = [];
    for (let i = 0; i < mtx.length; i++) {
        arr.push(mtx[i][j]);
    }
    return arr;
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
    console.log(foundIt, c);
    if (foundIt) return c;
    return false;
};

const checkRow = (arr, ind, l) => {
    if (!arr) return false;
    for (let i = ind; i < ind + l; i++) {
        if (arr[i] && whatIsThisCharacter(arr[i]) === "SYMBOL") return true;
    }
    return false;
};

const isNumberConnected = (mtx, c, length) => {
    if (c[0] > 0 && checkRow(mtx[c[0] - 1], c[1], length)) return true;
    if (c[0] + 1 < mtx[0].length && checkRow(mtx[c[0] + 1], c[1], length))
        return true;

    if (c[1] > 0 && checkRow(getMatrixCol(mtx, c[1] - 1), c[0] - 1, 3))
        return true;
    const endIndex = c[1] + length;
    if (
        endIndex < mtx[0].length &&
        checkRow(getMatrixCol(mtx, endIndex), c[0] - 1, 3)
    )
        return true;
    return false;
};

/**
 * mtx: [][];
 * c: [i,j]
 * return int value: value of the number
 */
const getNumberValue = (mtx, cursor) => {
    let value = 0;
    let c = [];
    c[0] = cursor[0];
    c[1] = cursor[1];
    if (!mtx) return { length, value };
    while (isNumber(mtx[c[0]][c[1]])) {
        value = value * 10 + parseInt(mtx[c[0]][c[1]]);
        c[1] = c[1] + 1;
    }
    const isConnected = isNumberConnected(mtx, cursor, value.toString().length);
    return isConnected ? value : false;
};

// 1. find next number in the matrix
// 2. get the value of the item (depends on symbol closeness)
// 3. commulate total number
// 4. recursion
const getValidNumbersFromMtx = (mtx, cursor, total) => {
    while (cursor) {
        cursor = findNextItem(mtx, cursor);
        total += getNumberValue(mtx, cursor);
    }
    return total;
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
    isNumberConnected,
    checkRow,
};
