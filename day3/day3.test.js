import { describe, expect, test } from "@jest/globals";
import {
    checkRow,
    createMatrix,
    findNextItem,
    getNumberValue,
    isNumberConnected,
    stepUp,
} from "./day3.js";

const testData = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;

const mtx = [
    [".", ".", "3"],
    ["4", ".", "."],
    ["&", "8", "."],
];

describe("Matrix", () => {
    test("Create matrix from text", () => {
        const testLine = `123
456
789`;
        const result = [
            ["1", "2", "3"],
            ["4", "5", "6"],
            ["7", "8", "9"],
        ];
        const testResult = createMatrix(testLine);
        expect(testResult).toEqual(result);
    });
});

describe("stepUp", () => {
    test("Normal case", () => {
        const c = [0, 0];
        const w = 3;
        const h = 3;
        const testResult = stepUp(c, w, h);
        expect(testResult).toEqual([1, 0]);
    });
    test("Line end", () => {
        const c = [2, 0];
        const w = 3;
        const h = 3;
        const testResult = stepUp(c, w, h);
        expect(testResult).toEqual([0, 1]);
    });
    test("MTX end", () => {
        const c = [2, 2];
        const w = 3;
        const h = 3;
        const testResult = stepUp(c, w, h);
        expect(testResult).toEqual(false);
    });
});

describe("findNextItem", () => {
    test("Normal case", () => {
        const c = [0, 0];
        const testResult = findNextItem(mtx, c);
        expect(testResult).toEqual([2, 0]);
    });
    test("Already number", () => {
        const c = [2, 0];
        const testResult = findNextItem(mtx, c);
        expect(testResult).toEqual([2, 0]);
    });
    test("Line Break", () => {
        const c = [1, 1];
        const testResult = findNextItem(mtx, c);
        expect(testResult).toEqual([1, 2]);
    });
    test("End Of MTX", () => {
        const c = [2, 2];
        const testResult = findNextItem(mtx, c);
        expect(testResult).toEqual(false);
    });
});

describe("getNumberValue", () => {
    test("Normal case", () => {
        const mtx2 = [[".", "2", "3", "%"]];
        const c = [0, 1];
        const testResult = getNumberValue(mtx2, c);
        const shouldBe = 23;
        expect(testResult).toEqual(shouldBe);
    });
    test("EndLine case", () => {
        const mtx2 = [["#", "2", "3"]];
        const c = [0, 1];
        const testResult = getNumberValue(mtx2, c);
        const shouldBe = 23;
        expect(testResult).toEqual(shouldBe);
    });
});

describe("isNumberConnected", () => {
    test("Normal not connected", () => {
        const mtx2 = [
            [".", ".", "3", ".", "."],
            [".", "2", "3", "4", "."],
            [".", ".", ".", ".", "."],
        ];
        const c = [1, 1];
        const testResult = isNumberConnected(mtx2, c, 3);
        expect(testResult).toBe(false);
    });
    test("Normal connected", () => {
        const mtx2 = [
            [".", ".", "3", ".", "."],
            [".", "2", "3", "4", "."],
            [".", "%", ".", ".", "."],
        ];
        const c = [1, 1];
        const testResult = isNumberConnected(mtx2, c, 3);
        expect(testResult).toBe(true);
    });
    test("left no connected", () => {
        const mtx2 = [
            [".", ".", "3", ".", "."],
            ["1", "2", "3", "4", "."],
            [".", ".", ".", ".", "."],
        ];
        const c = [1, 0];
        const testResult = isNumberConnected(mtx2, c, 4);
        expect(testResult).toBe(false);
    });
    test("first row no connected", () => {
        const mtx2 = [
            ["1", "2", "3", "4", "."],
            [".", ".", ".", ".", "."],
        ];
        const c = [0, 0];
        const testResult = isNumberConnected(mtx2, c, 4);
        expect(testResult).toBe(false);
    });
    test("first row connected", () => {
        const mtx2 = [
            ["1", "2", "3", "4", "."],
            [".", ".", ".", ".", "%"],
        ];
        const c = [0, 0];
        const testResult = isNumberConnected(mtx2, c, 4);
        expect(testResult).toBe(true);
    });
    test("single row", () => {
        const mtx2 = [[".", "2", "3", "%"]];
        const c = [0, 1];
        const testResult = isNumberConnected(mtx2, c, 2);
        expect(testResult).toBe(true);
    });
});

describe("checkRow", () => {
    test("No symbol", () => {
        const arr = [".", ".", "$", ".", "."];
        const c = 1;
        const l = 1;
        const testResult = checkRow(arr, 1, l);
        expect(testResult).toBe(false);
    });
    test("Yes symbol", () => {
        const arr = [".", ".", "$", ".", "."];
        const c = 1;
        const l = 3;
        const testResult = checkRow(arr, 1, l);
        expect(testResult).toBe(true);
    });
});
