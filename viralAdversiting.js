function viralAdvertising(n) {
    // Write your code here

    let shared = 5
    let likes = 0
    for (let i = 0; i < n; i++) {
        let like = Math.floor( shared / 2)
         shared = like * 3
         likes += like
    }

    return likes
}

console.log(
    viralAdvertising(3)
);