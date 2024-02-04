import { LinkedList, Node } from './LinkedList.ts';

export default class DoublyLinkedList<T> implements LinkedList<T> {
    public length: number;
    public head?: Node<T>;
    public tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    insertAt(item: T, index: number): void {
        if (index > this.length) {
            throw new Error("Out of bounds");
        } else if (index === this.length) {
            this.append(item);
            return;
        } else if (index === 0) {
            this.prepend(item);
            return;
        }

        this.length++;
        const curr = this.getAt(index) as Node<T>;

        const node = { value: item } as Node<T>;
        node.prev = curr.prev;
        node.next = curr;

        curr.prev = node;
        if (node.prev) {
            node.prev.next = node;
        }
    }

    remove(item: T): T | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < this.length; i++) {
            if (curr === item) {
                break;
            }
            curr = curr.next;
        }

        // no item
        if (!curr) {
            return undefined;
        }

        // item exists
        this.length--;
        if (this.length === 0) {
            this.head = this.tail = undefined;
            return curr.value;
        }
        if (curr.prev) {
            curr.prev.next = curr.next;
        }
        if (curr.next) {
            curr.next.prev = curr.prev;
        }
        if (curr === this.head) {
            this.head = curr.next;
        }
        if (curr === this.tail) {
            this.tail = curr.prev;
        }
        curr.next = curr.prev = undefined;
        return curr.value;
    }

    removeAt(index: number): T | undefined {
        const node = this.getAt(index) as Node<T>;
        if (!node) {
            return undefined;
        }

        --this.length;
        if (this.length === 0) {
            this.head = this.tail = undefined;
            return node.value;
        }

        if (node.next) {
            node.next.prev = node.prev;
        }
        if (node.prev) {
            node.prev.next = node.next;
        }
        if (node === this.head) {
            this.head = node.next;
        }
        if (node === this.tail) {
            this.tail = node.prev;
        }

        node.next = node.prev = undefined;
        return node.value;
    }

    append(item: T): void {
        this.length++;
        const node = { value: item } as Node<T>;
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }

    prepend(item: T): void {
        this.length++;
        const node = { value: item } as Node<T>;
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    get(index: number): T | undefined {
        return this.getAt(index)?.value;
    }

    private getAt(idx: number): Node<T> | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < idx; i++) {
            curr = curr?.next;
        }
        return curr as Node<T>;
    }
}
