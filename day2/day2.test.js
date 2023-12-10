import {describe, expect, test} from '@jest/globals';
import { 
    getCommulatedGameNumbers, 
    getCommulatedPowerNumbers, 
    getDrawObject,
    getLineSegments,
    lineValidator,
    getPowerNumber } from './day2.js';

describe('Line segmentation', () => {
    test('Get the righ game number for 1 digit', () => {
        const testLine = 'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red';
        const testResult = getLineSegments(testLine);
        expect(testResult.gameNumber).toBe(3);
    });
    test('Get the righ game number for 2 digits', () => {
        const testLine = 'Game 32: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red';
        const testResult = getLineSegments(testLine);
        expect(testResult.gameNumber).toBe(32);
    });
    test('Get the righ game number for 3 digits', () => {
        const testLine = 'Game 100: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red';
        const testResult = getLineSegments(testLine);
        expect(testResult.gameNumber).toBe(100);
    });
});

describe('Draw segmentation', () => {
    test('Split draws to objects', () => {
        const testLine = '8 green, 6 blue, 20 red';
        const testResult = getDrawObject(testLine);
        const result = {
            'green': 8,
            'blue': 6,
            'red': 20
        }
        expect(testResult).toEqual(result);
    });
    test('Split draws to with 1 entry only', () => {
        const testLine = '2 red';
        const testResult = getDrawObject(testLine);
        const result = {
            'red': 2
        }
        expect(testResult).toEqual(result);
    });
});
describe('Get full data object', () => {
    test('Regular line', () => {
        const testLine = 'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red';
        const testResult = getLineSegments(testLine);
        const result = {
            gameNumber: 3,
            draws: [
                {'green': 8, 'blue': 6,'red': 20},
                {'green': 13, 'blue': 5,'red': 4},
                {'green': 5, 'red': 1},
            ]
        }
        expect(testResult).toEqual(result);
    });
});

describe('Validate, if a line validity', () => {
    test('Regular false line', () => {
        const testLine = {
            gameNumber: 3,
            draws: [
                {'green': 8, 'blue': 6,'red': 20},
                {'green': 13, 'blue': 5,'red': 4},
                {'green': 5, 'red': 1},
            ]
        }
        const testResult = lineValidator(testLine);
        expect(testResult).toBe(false);
    });
    test('Regular true line', () => {
        const testLine = {
            gameNumber: 3,
            draws: [
                {'green': 8, 'blue': 6,'red': 10},
                {'green': 13, 'blue': 5,'red': 4},
                {'green': 5, 'red': 1},
            ]
        }
        const testResult = lineValidator(testLine);
        expect(testResult).toBe(true);
    });
})

describe('Commulated Lines', () => {
    test('Get the example lines', () => {
        const testLines = 
        `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
        Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
        Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
        Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
        Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`
        const testResult = getCommulatedGameNumbers(testLines);
        expect(testResult).toBe(8);
    });
});

describe('Power Numbers', () => {
    test('Get Power Number for a line', () => {
        const testLine = {
            gameNumber: 3,
            draws: [
                {'green': 8, 'blue': 6,'red': 20},
                {'green': 13, 'blue': 5,'red': 4},
                {'green': 5, 'red': 1},
            ]
        }
        const testResult = getPowerNumber(testLine);
        expect(testResult).toBe(1560);
    });

    test('Get the example lines', () => {
        const testLines = 
        `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
        Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
        Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
        Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
        Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`
        const testResult = getCommulatedPowerNumbers(testLines);
        expect(testResult).toBe(2286);
    });
});