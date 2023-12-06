import {describe, expect, test} from '@jest/globals';
import { getNumbersOut, replaceStrings, isNumber, searchIndexer } from "./index";

describe('replaceStrings', () => {
    test('replacing string in the beginning', () => {
        const testData = 'four539tkqrc';
        const testResult = replaceStrings(testData)
        expect(testResult).toBe('4539tkqrc');
    });
    test('replacing multiple strings', () => {
        const testData = 'four539tkqrcfour';
        const testResult = replaceStrings(testData)
        expect(testResult).toBe('4539tkqrc4');
    });
    test('replacing multiple strings, multiple numbers', () => {
        const testData = 'four539tfivekqrcfour';
        const testResult = replaceStrings(testData)
        expect(testResult).toBe('4539t5kqrc4');
    });
    test('replacing multiple strings, multiple numbers', () => {
        const testData = 'nineightvekqrcfour';
        const testResult = replaceStrings(testData)
        expect(testResult).toBe('9ightvekqrc4');
    });
})

describe.only('Finding the right index', () => {
    test('searchIndexer', () => {
        const testData = 'nineightvekqrcfoureight';
        const solution = [];
        solution[0] = {'numb': 9, 'numbText':'nine'};
        solution[3] = {'numb': 8, 'numbText':'eight'};
        solution[14] = {'numb': 4, 'numbText':'four'};
        solution[18] = {'numb': 8, 'numbText':'eightxxx'};
        const results = [];
        const testResult = searchIndexer(testData, results)
        expect(testResult.toString()).toBe(solution.toString());
    });
});