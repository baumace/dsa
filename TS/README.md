# Arrays
array + width * offset

## Access Time
    get => O(1)
    insert => O(1)
delete => O(1)

## Search
    linear search takes n time
    scanning each input element
if the array is sorted, use binary search to have a worst case of log(n)
    binary search works by halving N until the value is found
    no scanning, only diving in half

### Analysis Note
If halving of input occurs, either n or nlog(n)

## Sort
    bubble sort takes n^2 time
    during each iteration i, bubble sort puts the i-th largest element in the i-th to last position

## Linked List
    good remove from front
bad random access (ie 18th element)

## Array List
    bad remove from front
good random access (ie 18th element)

## Ring Buffers
    basically an array with two pointers referencing the front and the end of the data
    head and a tail, if removing from front, head + 1, if removing from end, tail - 1, etc.
    if we need to resize (tail points to same space as head) then we loop around the ring buffer and copy into a larger ring buffer
    use index % length to internally access the correct space in the buffer

## Quick Sort
    select a pivot, then everything on the left of the pivot is <= and everything to the right is >
typically choose the middle element, (ie. length/2)
    worst case is n^2 when the array is reverse sorted
best/average case is nlog(n)

## Trees
    preorder traversal goes: node -> left -> right
    in order: left -> node -> right
    postorder: left -> right -> node
