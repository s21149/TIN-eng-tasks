function isPalindrome(str) {
    str = str.toLowerCase();
    reversed = str.split("").reverse();
    reversedString = reversed.join("");
    return str === reversedString;
}

console.log(isPalindrome("kajak"));
console.log(isPalindrome("oko"));
console.log(isPalindrome("pjatk"));
