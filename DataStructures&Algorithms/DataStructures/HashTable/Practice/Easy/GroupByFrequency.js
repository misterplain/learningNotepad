/*
Group Characters by Frequency - Object Approach:
Given a string s, sort it in decreasing order based on the frequency of characters. If there are multiple possible solutions, return any of them. You can use an object to store the frequency of each character and then sort the characters based on their frequencies.

Example:
Input: "tree"
Output: "eert" or "eetr" (Both are valid as long as the characters with the same frequency are adjacent)
*/

function groupByFrequency(string) {

  //store values in object based on frequency
  const charObj = {};
  for (let i = 0; i < string.length; i++) {
    if (charObj[string[i]] === undefined) {
      charObj[string[i]] = string[i];
    } else {
      charObj[string[i]] = charObj[string[i]] + string[i];
    }
  }

  //sort entries
  const entries = Object.entries(charObj);
  const sortedEntries = entries.sort((a, b) => b[1].length - a[1].length);

  //add items to new string
  let newString = "";
  for (let i = 0; i < sortedEntries.length; i++) {
    newString = newString + sortedEntries[i][1];
  }
  return newString;
}

console.log(groupByFrequency("treerr"));
