import { describe, expect, test } from 'vitest';
import linear_fn from '../arrays/LinearSearch.ts';

describe('array searches', () => {
    test('linear search array', () => {
        const testArray = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
        expect(linear_fn(testArray, 69)).toEqual(true);
        expect(linear_fn(testArray, 1336)).toEqual(false);
        expect(linear_fn(testArray, 69420)).toEqual(true);
        expect(linear_fn(testArray, 69421)).toEqual(false);
        expect(linear_fn(testArray, 1)).toEqual(true);
        expect(linear_fn(testArray, 0)).toEqual(false);
    });
});
