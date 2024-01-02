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
