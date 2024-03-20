//a sorting algorithm where the largest values bubble up to the top!
//compare two items, if one is larger you swap those two items - you pass once all the way through the array, each iteration basically the largest remaining value will bubble to it's position towards the end of the array

//pseudocode
//start looping from with a variable called i the end of the array towards the beginning
//start an inner loop with a variable called j from the beginning until i - 1
//if arr[j] is greater than arr[j+1], swap those two values

// Bubble Sort:
// Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
// */

function bubbleSort(array) {
  const n = array.length;
  //go from the end of the array and compare that with the previous element
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(array, array[j], array[j + 1]);
      if (array[j] > array[j + 1]) {
        // Swap elements
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

function bubbleSort(array) {
  const n = array.length;
  //go from the end of the array and compare that with the previous element
  //remove unnecessary comparisons
  var noSwaps;
  for (let i = array.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(array, array[j], array[j + 1]);
      if (array[j] > array[j + 1]) {
        // Swap elements
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        noSwaps = false;
      }
    }
    //remove unnecessary comparisons
    if (noSwaps) break;
  }
  return array;
}

//es2015 version
function bubbleSort2(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}
console.log(bubbleSort2([37, 45, 29, 8]));
