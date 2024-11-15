function caesarCipher(s, k) {
    // Write your code here

    let result = ""
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (char >= "a" && char <= "z") {
            result += String.fromCharCode(((char.charCodeAt(0) - 97 + k) % 26) + 97) 
        } else if (char >= "A" && char <= "Z"){
            result += String.fromCharCode(((char.charCodeAt(0) - 65 + k) % 26 ) + 65)
        } else {
            result += char
        }
        
    }
    return result
}

console.log(
    caesarCipher("middle-Outz", 2)
);