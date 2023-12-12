import { describe, expect, test } from "@jest/globals";
import { createMatrix, findNextItem, stepUp } from "./day3.js";

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
