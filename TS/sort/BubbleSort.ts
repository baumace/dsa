export default function bubbleSort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

/*
 * For each iteration i, the i-th largest element will be put in the ith last most position.
 * -> largest goes to end
 * -> second to largest goes to second to last
 */
/*
function bubbleSort(arr)
    for i in n do
        for j in n-1-i do
            if arr[i] > arr[j]
                swap(arr[i], arr[j])
            endIf
        endFor
    endFor
endFunction
*/
