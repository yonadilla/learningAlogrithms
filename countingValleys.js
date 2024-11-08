function countingValleys(steps, path) {
    // Write your code here
    let step = 0;
    let villey = 0;
    for (let i = 0; i < path.length; i++){
        let prevStep = step
        step += path[i] == "U" ? 1 : -1;

        if (prevStep < 0 && step == 0){
            villey++
        }
    }
    return villey
}

console.log(countingValleys(12, "DDUUDDUDUUUD"));