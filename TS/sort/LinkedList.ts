interface LinkedList<T> {
    get length(): number;
    insertAt(item: T, index: number): void;
    remove(item: T): T | undefined;
    removeAt(index: number): T | undefined;
    append(item: T): void;
    prepend(item: T): void;
    get(index: number): T | undefined;
}

export type Node<T> = {
    value: T;
    next?: Node<T>;
};

class LinkedList1<T> implements LinkedList<T> {
    public length: number;

    constructor() {
        this.length = 0;
    }

    insertAt(item: T, index: number): void {}
    remove(item: T): T | undefined {}
    removeAt(index: number): T | undefined {}
    append(item: T): void {}
    prepend(item: T): void {}
    get(index: number): T | undefined {}
}
