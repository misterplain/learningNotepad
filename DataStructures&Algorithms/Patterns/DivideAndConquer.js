// Write a function called search that accepts a value and returns the
// index where the value passed tot he function is located, if the value
// is not found, return -1

//naive

function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
console.log(search([1, 2, 3], 3));

//refactored

function search(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (currentElement < val) {
      min = middle - 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return array.indexOf(currentElement);
    }
  }
  return -1;
}
console.log(search([1, 2, 3], 3));


