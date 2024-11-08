function divisibleSumPairs(n, k, ar) {
    // Write your code here

    let pairs = 0;
    
    for (let i = 0; i < ar.length; i++) {
        for (let j = i + 1; j < ar.length; j++){
            if ( (ar[i] + ar[j] ) % k == 0) {
                pairs++;
            }
        }
    }
    return pairs;
}

console.log(
    divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])
);