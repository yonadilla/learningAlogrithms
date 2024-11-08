function breakingRecords(scores) {
    // Write your code here
    let min = 0;
    let max = 0;
    
    let minimum = scores[0];
    let maximum = scores[0];
    for (let i = 1; i < scores.length; i++){
        
        if (scores[i] <= minimum  && scores[i] != minimum) {
            minimum = scores[i]
            min++
        } else if (scores[i] >= maximum && scores[i] != maximum)  {
            maximum = scores[i]
            max++
        } 
             
    }
    return [min, max]
}

console.log(

    breakingRecords([10, 5 ,20 ,20 ,4, 5 ,2 ,25 ,1])
    );