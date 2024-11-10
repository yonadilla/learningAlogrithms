function designerPdfViewer(h, word) {
  // Write your code here
  let tallets = 0;
  for (let i = 0; i < word.length; i++) {
    let index = word[i].charCodeAt(0) - 97
    if (h[index] > h[tallets]) {
        tallets = index
    }
  }

  console.log(tallets);
  return h[tallets] * word.length
}

console.log(
  designerPdfViewer(
    [
      1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      5,
    ],
    "abc"
  )
);
