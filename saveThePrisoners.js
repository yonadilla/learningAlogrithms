function saveThePrisoner(n, m, s) {
    // Write your code here    
    let result = (s + m - 1) % n

    return result === 0 ? n : result
}

console.log(
    saveThePrisoner(5, 2, 1)
);