function alphabeticOrder(str) {
    let strArr = str.split("");
    strArr.sort();
    strSorted = strArr.join("");
    return strSorted;
}

let str = "webmaster";

console.log("PreSorted : " + str);
console.log("Post-sorted : " + alphabeticOrder(str));
