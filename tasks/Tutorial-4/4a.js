let recursiveFact = function(n) {
    if (n <= 1) {
        return 1;
    }
    return n * (recursiveFact(n-1));
}

function iterativeFact(n) {
    val = 1;
    for (let i = 1; i <= n; i++) {
        val *= i;
    }
    return val;
}

for (let i = 0; i <= 10; i++) {
    console.log("Recursive fact of " + i + " -> " + recursiveFact(i) + "\t Iterative fact of " + i + " -> " + iterativeFact(i));
    
}