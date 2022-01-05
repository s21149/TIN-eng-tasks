function values(arr) {
    arrSet = Array.from(new Set(arr));
    arrSet.sort((a,b) => a - b);
    if (arrSet.length === 1) {
        return arrSet;
    }
    if (arrSet.length === 2) {
       return arrSet; 
    }
    if (arrSet.length === 3) {
        return arrSet[1];
    }
    return [arrSet[1], arrSet[arrSet.length-2]];
}

let arr = [5,4,3,2,1];
let arr1 = [1];
let arr2 = [2,1];
let arr3 = [3,2,1];

console.log(values(arr));
console.log(values(arr1));
console.log(values(arr2));
console.log(values(arr3));