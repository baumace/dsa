interface LinkedList<T> {
    get length(): number;
    insertAt(item: T, index: number): void;
    remove(item: T): T | undefined;
    removeAt(index: number): T | undefined;
    append(item: T): void;
    prepend(item: T): void;
    get(index: number): T | undefined;
}

class ListNode<T> {
    private value: T;
    public next: ListNode<T> | null;

    constructor(value: T, next: ListNode<T> | null) {
        this.value = value;
        this.next = next;
    }

    getValue(): T {
        return this.value;
    }
}

class LinkedList1<T> implements LinkedList<T> {
    public length: number;
    private head: ListNode<T> | null;
    private tail: ListNode<T> | null;

    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    insertAt(item: T, index: number): void {}
    remove(item: T): T | undefined {}
    removeAt(index: number): T | undefined {}
    append(item: T): void {}
    prepend(item: T): void {}
    get(index: number): T | undefined {}
}
