import { describe, expect, test } from 'vitest';
import Queue1 from '../sort/Queue';
import Stack1 from '../sort/Stack';

describe('data structures tests', () => {
    test('queue', () => {
        const list = new Queue1<number>();

        list.enqueue(5);
        list.enqueue(7);
        list.enqueue(9);

        expect(list.dequeue()).toEqual(5);
        expect(list.length).toEqual(2);

        debugger;

        list.enqueue(11);
        debugger;
        expect(list.dequeue()).toEqual(7);
        expect(list.dequeue()).toEqual(9);
        expect(list.peek()).toEqual(11);
        expect(list.dequeue()).toEqual(11);
        expect(list.dequeue()).toEqual(undefined);
        expect(list.length).toEqual(0);

        list.enqueue(69);
        expect(list.peek()).toEqual(69);
        expect(list.length).toEqual(1);
    });

    test('stack', () => {
        const list = new Stack1<number>();

        list.push(5);
        list.push(7);
        list.push(9);

        expect(list.pop()).toEqual(9);
        expect(list.length).toEqual(2);

        list.push(11);
        expect(list.pop()).toEqual(11);
        expect(list.pop()).toEqual(7);
        expect(list.peek()).toEqual(5);
        expect(list.pop()).toEqual(5);
        expect(list.pop()).toEqual(undefined);

        list.push(69);
        expect(list.peek()).toEqual(69);
        expect(list.length).toEqual(1);
    });
});
