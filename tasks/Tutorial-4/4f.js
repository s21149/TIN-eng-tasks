function isPrime(n) {
    if (n === 1) return false; 
    for (let i = 2; i < n; i++) {
        if(n % i === 0) return false;
    }
    return true;
}

for (let i = 1; i < 50; i++) {
    console.log("is " + i + " prime ? -> " + isPrime(i));
}