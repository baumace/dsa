export default function binarySearch(arr: number[], target: number): boolean {
    let low = 0;
    let high = arr.length;
    do {
        let mid = Math.floor(low + (high - low) / 2);
        if (arr[mid] === target) {
            return true;
        } else if (arr[mid] > target) {
            high = mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        }
    } while (low < high);
    return false;
}

/*
[low, high)
function binarySearch(arr, low, high, target)
    if low == high
        return false
    endIf
    mid = floor(low+(high-low)/2)
    if arr[mid] == target
        return true
    // [low...target...arr[mid]]
    else if arr[mid] > target
        high = mid
    // [arr[mid]...target...high]
    else if arr[mid] < target
        low = mid + 1
    endIf
    return binarySearch(arr, low, high, target)
endFunction
*/

/*
[low, high)
function binarySearch(arr, low, high, target)
    do 
        mid = floor(low+(high-low)/2)
        if arr[mid] == target
            return true
        // [low...target...arr[mid]]
        else if arr[mid] > target
            high = mid
        // [arr[mid]...target...high]
        else if arr[mid] < target
            low = mid + 1
        endIf
    while low < high
    return false
endFunction
*/
