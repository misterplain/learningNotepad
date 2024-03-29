/**
 * Quick Sort
 *
 * Quick sort is a divide-and-conquer sorting algorithm that works by selecting a 'pivot' element from the array
 * and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot.
 * The sub-arrays are then sorted recursively.
 *
 * Time Complexity:
 *   - Best Case: O(n log n)
 *   - Average Case: O(n log n)
 *   - Worst Case: O(n^2) (if the pivot selection is poor)
 * Space Complexity: O(log n) - Recursive stack space
 *
 * @param {Array} arr - The array to be sorted
 * @returns {Array} - The sorted array
 */
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

//alt implementation
//creat pivot function
function pivot(array, start = 0, end = array.length + 1) {
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  var pivot = arr[start];
  var swapIdx = start;
  for (var i = start + 1; i < array.length; i++) {
    if (pivot > array[i]) {
      swapIdx++;
      swap(array, swapIdx, i);
    }
  }
  swap(array, start, swapIdx);
  return swapIdx;
}

//quick sort using pivot helper
function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);
    //left
    quickSort(array, left, pivotIndex - 1);
    //right
    quickSort(array, pivotIndex + 1, right);
  }

  return array;
}
// Example Usage:

// Example 1: Sorting numbers
const numbers = [5, 3, 7, 2, 8, 4, 1, 6];
console.log(quickSort(numbers)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// Example 2: Sorting strings
const strings = ["banana", "apple", "cherry", "date"];
console.log(quickSort(strings)); // Output: ['apple', 'banana', 'cherry', 'date']
