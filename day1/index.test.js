import {describe, expect, test} from '@jest/globals';
import { getNumbersOut, isNumber, convertNumbersFront, convertNumbersBack } from "./index";

describe('convertNumbersFront', () => {
    test('replacing string in the beginning', () => {
        const testData = 'four539tkqrc';
        const testResult = convertNumbersFront(testData)
        expect(testResult).toBe('4539tkqrc');
    });
    test('replacing multiple strings', () => {
        const testData = 'four539tkqrcfour';
        const testResult = convertNumbersFront(testData)
        expect(testResult).toBe('4539tkqrc4');
    });
    test('replacing multiple strings, multiple numbers', () => {
        const testData = 'four539tfivekqrcfour';
        const testResult = convertNumbersFront(testData)
        expect(testResult).toBe('4539t5kqrc4');
    });
    test('replacing multiple strings, multiple numbers', () => {
        const testData = 'nineightvekqrcfour';
        const testResult = convertNumbersFront(testData)
        expect(testResult).toBe('9ightvekqrc4');
    });
})

describe('Read and change string to numbers, Front And Back', () => {
    test('convertNumbersFront', () => {
        const testData = 'nineightvekqrcfoureight';
        const solution = '9ightvekqrc48';
        const testResult = convertNumbersFront(testData);
        expect(testResult).toBe(solution);
    });
    test('convertNumbersBack', () => {
        const testData = 'nineightvekqrcnineight';
        const solution = 'nin8vekqrcnin8';
        const testResult = convertNumbersBack(testData);
        expect(testResult).toBe(solution);
    });
});

describe('End 2 End test', () => {
    test('can handle test data', () => {
        const testData = 
            `two1nine
            eightwothree
            abcone2threexyz
            xtwone3four
            4nineeightseven2
            zoneight234
            7pqrstsixteen`;
        const solution = 281;
        const testResult = getNumbersOut(testData);
        expect(testResult).toBe(solution);
    });
    test('empty line', () => {
        const testData = 
            `adsafadsfa`;
        const solution = 0;
        const testResult = getNumbersOut(testData);
        expect(testResult).toBe(solution);
    });
    test('single digit - text', () => {
        const testData = 
            `asdfsixasdf`;
        const solution = 66;
        const testResult = getNumbersOut(testData);
        expect(testResult).toBe(solution);
    });
    test('single digit', () => {
        const testData = 
            `pptwo6sevenfivevlgs8threegbpc`;
        const solution = 23;
        const testResult = getNumbersOut(testData);
        expect(testResult).toBe(solution);
    });

    test('back-read number at the end', () => {
        const testData = 
            `someoneasdfasdfnineight`;
        const solution = 18;
        const testResult = getNumbersOut(testData);
        expect(testResult).toBe(solution);
    });
});


