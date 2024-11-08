function getMoneySpent(keyboards, drives, b) {
    
    let price = 0;
    for (let i = 0; i < keyboards.length; i++){
        for (let j = 0; j < drives.length; j++){
            if ((keyboards[i] + drives[j]) <= b && price <= (keyboards[i] + drives[j])){
                price = keyboards[i] + drives[j];
            } 
        }
    }

    return price == 0 ? -1 : price;
}

console.log(
    getMoneySpent([3 ,1], [5 ,2 ,8], 10)
);