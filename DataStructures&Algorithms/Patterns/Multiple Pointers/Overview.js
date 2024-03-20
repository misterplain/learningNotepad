// Write a function called sumZero which accepts a sorted array of
// integers. he function should find the first pair where the sum is 0.
// return an array that includes both the values that sum to szero or an
// undefined if a pair does not exist

//naive
function sumZero(arr){
  for(let i = 0;i<arr.length;i++){
    for(let j = i+1; j<arr.length;j++){
      if(arr[i] + arr[j] === 0 ){
        return [arr[i], arr[j]]
      }
    }
  }
}
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) //-3 and 3
console.log(sumZero([-4,-3,-2,-1, 0, 1, 2, 5])) //-2, 2`;

//refactored
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
      //result is positive, move right pointer down
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
console.log(sumZero([-4,-3,-2,-1, 0, 1, 2, 5]))

// Write a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array. There can be negative
// numbers in the array, but it will always be sorted

function countUniqueValues(arr) {
  //i starts at 0, j starts at 1
  //if i and j are not equal, increment i and set i to j, replaces value within array
  //i will be at j position, i will continue to increment until it finds a new value
  //i + 1 will be the number of unique values
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([2, 3, 4, 5, 5, 5, 6, 7, 7, 7, 7, 7, 8]));

//practice problem 

// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)

// Sample Input:

// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

//practice problem # 2 

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O(1)

