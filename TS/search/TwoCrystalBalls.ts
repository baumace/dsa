export default function twoCrystalBalls(breaks: boolean[]) {
    let jump = Math.sqrt(breaks.length);
    let index = jump;
    while (index < breaks.length) {
        if (breaks[index]) {
            break;
        }
        index += jump;
    }
    index -= jump;
    while (index < breaks.length && index < index + jump) {
        if (breaks[index]) {
            return index;
        }
        index++;
    }
    return -1;
}

/*
 * Jump through the array with intervals of sqrt(n)
 * Once one ball breaks, go back to last good point
 * Then linear search until second ball breaks
 */
/*
function twoCrystalBalls(arr)
    jump = sqrt(n)
    index = jump
    while index < n
        if arr[index] breaks
            break
        endIf
        index += jump
    endWhile
    index -= jump
    while index < n && index < index + jump
        if arr[index] breaks
            return index
        endIf
        index++
    endWhile
    return -1
endFunction
*/
