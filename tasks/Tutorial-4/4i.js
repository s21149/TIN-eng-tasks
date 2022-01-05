function amountToCoins(amount, coins) {
    coins.sort((a,b) => b-a);
    let coinsString = "";
    for (let i = 0; i < coins.length; i++) {
        if (amount >= coins[i]) {
            amount -= coins[i];
            coinsString += coins[i] + ",";
            i--;
        }
    }
    return coinsString;
}

console.log(amountToCoins(46,[25,10,5,2,1]));