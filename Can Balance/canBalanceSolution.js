//canBalance function takes an array of numbers and returns true or false based on the following conditions
//It returns true if the array can be split at any point with the sum of the numbers on one side equal to the sum of the numbers at the other side
// For example, given the array [1, 2, 3, 4, 5, 5], it will return true as the array can be split into [1, 2, 3, 4] and [5, 5] giving a sum of 10 on each side.


function canBalance(array) {
  //Type your solutions here
  const sum = array.reduce((a, b) => a + b);
  const halfSum = sum / 2;
  if (sum % 2 !== 0 || halfSum === 0) return -1;
  let count = 0;
  let currentIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (count !== halfSum) {
      count += array[i];
      currentIndex = i;
    }
  }
  const leftSide = array.slice(0, currentIndex + 1);
  const rightSide = array.slice(currentIndex + 1);
  return [leftSide.length, rightSide.length];
}

module.exports = canBalance;
