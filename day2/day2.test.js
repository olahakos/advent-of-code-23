import {describe, expect, test} from '@jest/globals';
import { getLineSegments } from './day2.js';

describe('Line segmentation', () => {
    test('Get the righ game number for 1 digit', () => {
        const testLine = 'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red';
        const testResult = getLineSegments(testLine);
        expect(testResult.gameNumber).toBe('3');
    });
    test('Get the righ game number for 2 digits', () => {
        const testLine = 'Game 32: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red';
        const testResult = getLineSegments(testLine);
        expect(testResult.gameNumber).toBe('32');
    });
    test('Get the righ game number for 3 digits', () => {
        const testLine = 'Game 100: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red';
        const testResult = getLineSegments(testLine);
        expect(testResult.gameNumber).toBe('100');
    });
});