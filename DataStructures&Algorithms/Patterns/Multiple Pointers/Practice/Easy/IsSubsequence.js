// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O(1)

function isSubsequence(short, long) {
  let shortChar = 0;

  for (let longChar = 0; longChar < long.length; longChar++) {
    if (short[shortChar] === long[longChar]) {
      console.log(short[shortChar]);
      if (shortChar === short.length - 1) {
        return true;
      }
      shortChar++;
    }
  }

  return false
}

// console.log(isSubsequence("hello", "hello world")); // true
// console.log(isSubsequence('sing', 'sting')); // true
// console.log(isSubsequence('abc', 'abracadabra')); // true
// console.log(isSubsequence('abc', 'acb')); // false (order matters)

//alt solution - recursive

function isSubsequence(str1, str2) {
  if(str1.length === 0) return true
  if(str2.length === 0) return false
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
  return isSubsequence(str1, str2.slice(1))
}
