import {expect, test} from '@jest/globals';
import { removeAllSpaces } from './cleanString';

test('Removes spaces from string', () => {
    const testLine = ' 8 green, ';
    const testResult = removeAllSpaces(testLine);
    expect(testResult).toBe('8green,');
});