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
    path.push(curr.value);

    // recurse
    walk(curr.left, path);
    walk(curr.right, path);

    // post
    return path;
}

export default function preOrderSearch(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
