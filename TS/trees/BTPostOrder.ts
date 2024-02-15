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
    walk(curr.right, path);
    path.push(curr.value);

    // post
    return path;
}

export default function postOrderSearch(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
