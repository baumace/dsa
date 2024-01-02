import { describe, expect, test } from 'vitest';
import linear_fn from '../search/LinearSearch.ts';
import binary_fn from '../search/BinarySearch.ts';
import two_crystal_balls from '../search/TwoCrystalBalls.ts';

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

    test('binary search array', () => {
        const testArray = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
        expect(binary_fn(testArray, 69)).toEqual(true);
        expect(binary_fn(testArray, 1336)).toEqual(false);
        expect(binary_fn(testArray, 69420)).toEqual(true);
        expect(binary_fn(testArray, 69421)).toEqual(false);
        expect(binary_fn(testArray, 1)).toEqual(true);
        expect(binary_fn(testArray, 0)).toEqual(false);
    });

    test('two crystal balls', () => {
        let idx = Math.floor(Math.random() * 10000);
        const data = new Array(10000).fill(false);

        for (let i = idx; i < 10000; ++i) {
            data[i] = true;
        }

        expect(two_crystal_balls(data)).toEqual(idx);
        expect(two_crystal_balls(new Array(821).fill(false))).toEqual(-1);
    });
});
