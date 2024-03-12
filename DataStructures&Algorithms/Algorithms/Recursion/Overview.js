/*
Recursion in programming involves a function calling itself in order to solve a problem. It's a powerful technique and is often used when a problem can be broken down into smaller, similar sub-problems. 
Use Cases:
Divide and Conquer:
Recursion is beneficial for problems that can be broken down into smaller, similar sub-problems, allowing for a divide-and-conquer strategy.

Simplifying Complex Tasks:
Recursion helps simplify complex tasks by breaking them into smaller, more manageable parts.

Elegance and Readability:
Certain algorithms, like tree traversal or searching, are naturally expressed using recursion, resulting in more elegant and readable code.

Summary:
Base Case:
Every recursive function should have a base case to prevent infinite recursion.

Function Calling Itself:
The key characteristic of recursion is a function calling itself.

Memory Consideration:
Recursion can lead to a stack overflow if not managed carefully. Tail recursion optimization or using an iterative approach might be considered in such cases.

Readability:
While recursion can provide elegant solutions, it's essential to balance its use with readability and potential performance implications.

Recursion is a powerful tool in a programmer's arsenal, and mastering it can lead to concise and expressive code for certain types of problems.
*/

//factorial calculation
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120

//countdown

function countdown(n) {
  if (n <= 0) {
    return;
  }
  console.log(n);
  countdown(n - 1);
}

countdown(5);
// Output:
// 5
// 4
// 3
// 2
// 1

//sum of an array
function sumArray(arr, index = 0) {
  if (index === arr.length) {
    return 0;
  }
  return arr[index] + sumArray(arr, index + 1);
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

//fibonacci sequence

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // Output: 8

//sumRange

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

//factorial
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

//collect all off values
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push * arr[0];
  }

  newArr = newArr.concat(collectOffValues(arr.slice(1)));
  return newArr;
}
