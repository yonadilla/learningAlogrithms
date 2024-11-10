function beautifulDays(i, j, k) {
    // Write your code here
    let beautifulDay = 0;
    for (var number = i; number <= j ; number++ ){
        let days = 0;
        let swap = number.toString().split("").reverse().join("")
        if ( ((number - Number(swap) ) / k ) % 1 == 0) {
            beautifulDay++
        }
    }

    return beautifulDay
}

console.log(
    beautifulDays(20, 23, 6)
);