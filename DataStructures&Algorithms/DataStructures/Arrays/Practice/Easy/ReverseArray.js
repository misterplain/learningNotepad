//https://www.hackerrank.com/challenges/arrays-ds/problem?isFullScreen=false

function reverseArray(a) {
  // Write your code here

  let reversed = [];

  for (let i = a.length-1; i >= 0; i--) {
    reversed.push(a[i]);
  }

  console.log(reversed);
  return reversed
}

console.log(reverseArray([1, 4, 3, 2]));
