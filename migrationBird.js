function migratoryBirds(arr) {
  let birdCounts = {};
    for (let i = 0; i < arr.length; i++) {
      let birdType = arr[i];
      birdCounts[birdType] = (birdCounts[birdType] || 0) + 1;
  }
    let maxCount = 0;
  let lowestBirdId = null;
  
  for (let birdType in birdCounts) {
      let count = birdCounts[birdType];
      if (count > maxCount || (count === maxCount && birdType < lowestBirdId)) {
          maxCount = count;
          lowestBirdId = birdType;
      }
  }
  
  return parseInt(lowestBirdId, 10);
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])); // Expected output: 3
