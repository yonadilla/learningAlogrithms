function utopianTree(n) {
  // Write your code here
  let tree = 1;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      tree = tree * 2;
    } else {
      tree++;
    }
  }

  return tree;
}

console.log(utopianTree(4));
