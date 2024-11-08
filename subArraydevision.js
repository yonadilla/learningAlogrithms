function birthday(s, d, m) {
  // Write your code here

  if (s.length == 1 && s[0] == d) {
    return 1;
  }

  let piece = 0;
  for (let i = 0; i < s.length; i++) {
    let sum = 0;
    for (let j = i; j < m + i; j++){ 
        sum += s[j]
    }

    if (sum == d) {
        piece++
    }
  }

  return piece;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));
