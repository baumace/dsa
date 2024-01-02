export default function linearSearch(
    haystack: number[],
    needle: number,
): boolean {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) {
            return true;
        }
    }
    return false;
}

/*
function linearSearch(arr, target)
    for element in arr 
        if element == target 
            return true
        endIf
    endFor
    return false
endFunction
*/
