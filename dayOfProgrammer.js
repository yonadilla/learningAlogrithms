function dayOfProgrammer(year) {
    // Write your code here
    let day =  (year <= 1917 && year % 4 == 0) || ( year % 400 == 0) || (year > 1819) && (year % 4 == 0 && year % 100 !== 0)  ? 29 : 28;
    if (year == 1918 ){
        return `26.09.1918`
    } else {
        let sumDay = 256 - ( 31 + day + 31 + 30 + 31 + 30 + 31 + 31 ) 
        return `${sumDay}.09.${year}`
    }

}

console.log(
    dayOfProgrammer(1700)
);