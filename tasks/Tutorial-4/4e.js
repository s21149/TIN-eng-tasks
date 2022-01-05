function findLongestWord(str) {
    strArr = str.split(" ");
    let max = strArr[0].length;
    let maxIndex = 0;
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].length > max) {
            max = strArr[i].length;
            maxIndex = i;
        }
    }
    return strArr[maxIndex];
}

let str = "a aa aaa aaaa a a aaaaa aa";
console.log(findLongestWord(str));