function angryProfessor(k, a) {
    // Write your code here
    let student = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] <= 0) {
            student++;
        }
    }

    if (student >= k){
        return "NO"
    } else return "YES"
}
console.log(
    angryProfessor(2, [0, -1, 2, 1])
);