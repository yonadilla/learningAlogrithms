function bonAppetit(bill, k, b) {
    // Write your code here

    let split = 0;
    for (let i = 0;i < bill.length; i++){
        if ( i !== k){
            split += bill[i]
        }

        
    }

    if ( split / 2 == b) {
        return "Bon Appetit"
    } else return b - (split / 2 )
}

console.log(
    bonAppetit(
        [3 ,10 ,2, 9],
        1,
        7,
    )
);