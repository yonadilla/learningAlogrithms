function pageCount(n, p) {
    // Write your code here
    const pageTurns = Math.floor(p / 2);
    const totalTurns = Math.floor(n / 2);

    console.log(pageTurns, totalTurns);

    /* Returns the total number of page turns it takes to get
    to a page or how many it requires if starting from the back */

    return Math.min(pageTurns, totalTurns - pageTurns);

}

console.log(
    pageCount(6,
        2
        )
);