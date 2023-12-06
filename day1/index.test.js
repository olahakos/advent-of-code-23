import {describe, expect, test} from '@jest/globals';
import { getNumbersOut, replacestring, isNumber } from "./index";

describe('fist day', () => {
    test('replacing string in the beginning', () => {
        const testData = 'four539tkqrc';
        const testResult = replacestring(testData)
        console.log(testResult);
        expect(testResult).toBe('4539tkqrc');
    });
    test('replacing multiple strings', () => {
        const testData = 'four539tkqrcfour';
        const testResult = replacestring(testData)
        console.log(testResult);
        expect(testResult).toBe('4539tkqrc4');
    });
    test('replacing multiple strings, multiple numbers', () => {
        const testData = 'four539tfivekqrcfour';
        const testResult = replacestring(testData)
        console.log(testResult);
        expect(testResult).toBe('4539t5kqrc4');
    });
    test('replacing multiple strings, multiple numbers', () => {
        const testData = 'nineightvekqrcfour';
        const testResult = replacestring(testData)
        console.log(testResult);
        expect(testResult).toBe('9ightvekqrc4');
    });
})
  