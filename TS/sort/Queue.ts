import { Node } from './LinkedList';

interface Queue<T> {
    get length(): number;
    enqueue(item: T): void;
    dequeue(): T | undefined;
    peek(): T | undefined;
}

export default class Queue1<T> implements Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    dequeue(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;

        const head = this.head;
        this.head = this.head.next;

        head.next = undefined;
        if (this.length === 0) {
            this.tail = undefined;
        }
        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
