//divide and conquer
function findMax(array, start, end) {
  //only apply to arrays of length 1
  if (start === end) {
    return array[start];
  }

  //arrays of lengths of more than 1
  const mid = Math.floor((start + end) / 2);
  const leftMax = findMax(array, start, mid);
  const rightMax = findMax(array, mid + 1, end);

  return Math.max(leftMax, rightMax);
}
const array = [1, 2, 9, 1, 0];
const max = findMax(array, 0, array.length - 1);
console.log(max);
console.log(array[4]);
