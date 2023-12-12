import { expect, test, describe } from "@jest/globals";
import { isNumber, removeAllSpaces, whatIsThisCharacter } from "./cleanString";

test("Removes spaces from string", () => {
    const testLine = " 8 green, ";
    const testResult = removeAllSpaces(testLine);
    expect(testResult).toBe("8green,");
});

describe("isNumber", () => {
    test("String", () => {
        const testLine = ".";
        const testResult = isNumber(testLine);
        expect(testResult).toBe(false);
    });
    test("number", () => {
        const testLine = "2";
        const testResult = isNumber(testLine);
        expect(testResult).toBe(true);
    });
    test("empty", () => {
        const testLine = "";
        const testResult = isNumber(testLine);
        expect(testResult).toBe(false);
    });
    test("space", () => {
        const testLine = " ";
        const testResult = isNumber(testLine);
        expect(testResult).toBe(false);
    });
});

describe("What is this character?", () => {
    test("Number", () => {
        const testLine = "0";
        const testResult = whatIsThisCharacter(testLine);
        expect(testResult).toBe("NUMBER");
    });
    test("dot", () => {
        const testLine = ".";
        const testResult = whatIsThisCharacter(testLine);
        expect(testResult).toBe("DOT");
    });
    test("symbol", () => {
        const testLine = "%";
        const testResult = whatIsThisCharacter(testLine);
        expect(testResult).toBe("SYMBOL");
    });
});
