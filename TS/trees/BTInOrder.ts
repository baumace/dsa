export type BinaryNode<T> = {
    value: number;
    left: BinaryNode<number>;
    right: BinaryNode<number>;
}

function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (!curr) {
        return path;
    }

    // pre

    // recurse
    walk(curr.left, path);
    path.push(curr.value);
    walk(curr.right, path);

    // post
    return path;
}

export default function inOrderSearch(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
