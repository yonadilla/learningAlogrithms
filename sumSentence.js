function jumlahKata(sentence){

    let kata = 1;
    for(let i = 0; i < sentence.length; i++){
        if (sentence[i] === " "){
            kata++
        }
    }

    return kata
}

console.log(
    jumlahKata( "Halo, nama saya John Doe")
);