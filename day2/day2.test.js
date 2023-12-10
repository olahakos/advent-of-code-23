import {describe, expect, test} from '@jest/globals';
import { getLineSegments } from './day2.js';

describe('Line segmentation', () => {
    test('Get the righ header', () => {
        const testLine = 'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red';
        const testResult = getLineSegments(testLine);
        expect(testResult.header).toBe('Game 3');
    });
});