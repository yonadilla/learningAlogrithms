function hurdleRace(k, height) {
    // Write your code here
    let maximumJump = k;
    if (Math.max(...height) > maximumJump){
        maximumJump = Math.max(...height) - maximumJump;
    } else maximumJump = 0

    return maximumJump
}   

console.log(
    hurdleRace(4, [1 ,6 ,3 ,5 ,2])
);