function marsExploration(s) {
    // Write your code here
    let different = 0;
    let pola = "SOS"
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== pola[i % 3]){   
            different++
        } 
    }

    return different;
}

console.log(
    marsExploration("SOSOSOSOSDSDSKWOSDOSDOASDOASDFAFJDFDOSOSOWNSOSOSNDSKDDOSOSOSJDSDSOOSOSDSDOSASSOASDSAOSOSODSDSOASDWS")
);