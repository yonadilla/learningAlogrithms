function sockMerchant(n, ar) {
    // Write your code here
    let pair = 0;
    let seen = {}
    for (let i = 0; i < ar.length ; i++){
        let sales = ar[i];
        seen[sales] = (seen[sales] || 0) + 1

        if (seen[sales] % 2 == 0 ){
            pair++
        }
    }

    return [pair, seen];
}

console.log(
    sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20, 20, 50])
);