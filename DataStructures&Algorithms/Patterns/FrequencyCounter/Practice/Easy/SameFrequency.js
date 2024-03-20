// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

function sameFrequency(num1, num2) {
  let frequencyNum1 = {};
  let frequencyNum2 = {};

  for (let val of num1.toString()) {
    frequencyNum1[val] = (frequencyNum1[val] || 0) + 1;
  }

  for (let val of num2.toString()) {
    frequencyNum2[val] = (frequencyNum2[val] || 0) + 1;
  }

  for (let key in frequencyNum1) {
    if (!(key in frequencyNum2)) {
      console.log("key doesn't exist in freq2");
      return false;
    }

    if (frequencyNum1[key] !== frequencyNum2[key]) {
      console.log("different frequencies of same key");
      return false;
    }
  }

  return true;
}

// console.log(sameFrequency(182, 281)); // true
// console.log(sameFrequency(34, 14)); // false
// console.log(sameFrequency(3589578, 5879385)); // true
// console.log(sameFrequency(22, 222)); // false
