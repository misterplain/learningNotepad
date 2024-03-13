// fib
// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

//1, 1, 2, 3, 5, 8, 13, 21, 34, 55

// function fib(num) {
//   let total = 1;
//   let baseNum = 1;
// console.log({
//     total,baseNum,num
// })

//   if (baseNum === num) {
//     console.log("reached");
//     return baseNum;
//   }

//   return total + fib(baseNum + 1);
// }

function fib(num) {
  let fibArray = [1, 1];

  //recursive function to add numbers all the way up to the index of num
  function addToArray(finalPushedIndex) {
    let start = fibArray.length - 1;
    if (num === start) {
      return;
    }
    fibArray.push(fibArray[start - 1] + fibArray[start]);
    return addToArray(finalPushedIndex + 1);
  }

  addToArray(num);
  return fibArray[num - 1];
}

// console.log(fib(6)); // 3
// console.log(fib(10)) // 55
// console.log(fib(28)) // 317811
// console.log(fib(35)) // 9227465
