function pickingNumbers(a) {
    // Step 1: Initialize a frequency array with zeros
    let frequency = Array(a.length).fill(0);

    // Step 2: Fill the frequency array with counts of each element in `a`
    for (let num of a) {
        console.log(`${num} h`, frequency[num]);
        frequency[num]++;
    }

    // Step 3: Check consecutive frequencies and find the maximum subarray length
    let maxLength = 0;
    for (let i = 1; i < frequency.length; i++) {
        console.log(frequency[i]);
        maxLength = Math.max(maxLength, frequency[i] + frequency[i - 1]);
    }

    return maxLength;
}


// Example usage
console.log(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5])); // Expected output: 5
