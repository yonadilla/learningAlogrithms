function alternate(s) {
    // Step 1: Get all unique characters in the string without using Set
    let uniqueChars = [];
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        let isUnique = true;
        for (let j = 0; j < uniqueChars.length; j++) {
            if (uniqueChars[j] === char) {
                isUnique = false;
                break;
            }
        }
        if (isUnique) uniqueChars.push(char);
    }

    console.log(uniqueChars);
    let maxLength = 0;

    // Step 2: Generate all pairs of unique characters
    for (let i = 0; i < uniqueChars.length; i++) {
        for (let j = i + 1; j < uniqueChars.length; j++) {
            const char1 = uniqueChars[i];
            const char2 = uniqueChars[j];

            // Step 3: Filter the string to only contain char1 and char2
            let filtered = [];
            for (let k = 0; k < s.length; k++) {
                if (s[k] === char1 || s[k] === char2) {
                    filtered.push(s[k]);
                }
            }
            // Step 4: Check if filtered string has alternating characters
            let isAlternating = true;
            for (let k = 1; k < filtered.length; k++) {
                if (filtered[k] === filtered[k - 1]) {
                    isAlternating = false;
                    break;
                }
            }

            // Step 5: If valid alternating string, update max length
            if (isAlternating) {
                maxLength = Math.max(maxLength, filtered.length);
            }
        }
    }

    return maxLength;
}

console.log(alternate('beabeefeab')); // Output: 5
