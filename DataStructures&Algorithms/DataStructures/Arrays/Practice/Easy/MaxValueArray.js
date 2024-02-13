// function findMax(array) {
//   let max = 0;

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }

//   console.log(max);
//   return max;
// }

// console.log(findMax([5, 2, 9, 1, 7]));

// const max = Math.max(...[5, 2, 9, 1, 7]);
// console.log(max);
// const function1 = (array) => {
//   let maxValue = array[0];
//   for (let i = 0; i < array.length; i++) {
//     array[i] > maxValue ? (maxValue = array[i]) : "";
//   }
//   console.log(maxValue);
//   return maxValue;
// };

//divide and conquer
function findMax(array, start, end) {
  if (start === end) {
    return array[start];
  }
  const mid = Math.floor((start + end) / 2);
  const leftMax = findMax(array, start, mid);
  const rightMax = findMax(array, mid + 1, end);

  return Math.max(leftMax, rightMax);
}
const array = [5, 2, 9, 1, 7];
const max = findMax(array, 0, array.length - 1);
console.log(max);

// console.log(findMax([5, 2, 9, 1, 7]));
