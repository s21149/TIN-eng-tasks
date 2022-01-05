function binarySearch(arr, element) {
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] == element) {
            return mid;
        }
        if (arr[mid] < element) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return -1;
}

let arr = [1, 2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 12, 14, 15];

console.log(binarySearch(arr,-1));
console.log(binarySearch(arr,7));