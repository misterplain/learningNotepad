//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range

// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
  const arrSorted = arr.sort((a, b) => a - b);

  let newArray = [];
  let startingPoint = arrSorted[0];
  let endingPoint = arrSorted[1];

  for (let i = startingPoint; i < endingPoint + 1; i++) {
    newArray.push(i);
  }

  const total = newArray.reduce((a, b) => a + b);

  return total;
}

// console.log(sumAll([4,1])); //passed
// console.log(sumAll([1, 4])) //passed
// console.log(sumAll([5, 10])) //passed
// console.log(sumAll([10, 5])) //passed

//alt solution # 1 - using math.Max

// function sumAll(arr) {
//   let max = Math.max(arr[0], arr[1]);
//   let min = Math.min(arr[0], arr[1]);
//   let sumBetween = 0;
//   for (let i = min; i <= max; i++) {
//     sumBetween += i;
//   }
//   return sumBetween;
// }

// alt solution # 2

// const sumAll = (arr) => {
//   const startNum = arr[0];
//   const endNum = arr[1];
//   // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
//   // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
//   const numCount = Math.abs(startNum - endNum) + 1;

//   // Using Arithmetic Progression summing formula
//   const sum = ((startNum + endNum) * numCount) / 2;
//   return sum;
// };

//alt solution # 3

// function sumAll(arr) {
//   let sumBetween = 0;
//   for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
//     sumBetween += i;
//   }
//   return sumBetween;
// }
