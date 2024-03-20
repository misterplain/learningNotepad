// Multiple Pointers - countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  let uniqueValues = 0;
  for (let j = i + 1; j < arr.length; j++) {
    console.log({ i, j, arrayI: arr[i], arrayJ: arr[j], uniqueValues });
    if (arr[i] !== arr[j]) {
      i = j;
      uniqueValues++;
    }
  }

  console.log({ result: "result", i, uniqueValues: uniqueValues + 1 });

  return uniqueValues + 1;
}

// countUniqueValues([1, 1, 1, 1, 1, 2, 2, 3]); // 3
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
// console.log(countUniqueValues([])); // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4
// Time Complexity - O(n)

// Space Complexity - O(n)

// Bonus

// You must do this with constant or O(1) space and O(n) time.
