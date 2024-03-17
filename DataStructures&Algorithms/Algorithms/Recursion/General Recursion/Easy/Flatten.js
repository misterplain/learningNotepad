// flatten
// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

function flatten(array) {
  const newArray = [];

  function flattener(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flattener(arr[i]);
      } else {
        newArray.push(arr[i]);
      }
    }
  }

  flattener(array);
  return newArray;
}

flatten([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1], [2], [3]]); // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

