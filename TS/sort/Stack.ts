import { Node } from './LinkedList';

interface Stack<T> {
    get length(): number;
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
}

export default class Stack1<T> implements Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        this.length++;
        const node = { value: item } as Node<T>;
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        const head = this.head;
        this.head = head.next;
        this.length--;
        head.next = undefined;
        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
