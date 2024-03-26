/**
 * Insertion Sort
 *
 * builds up the sort by gradually creating a larger left half which is always sorted
 *
 * Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time.
 * It iterates through the input array and grows a sorted array behind it.
 * At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted array, and inserts it there.
 * It repeats this process until no unsorted elements remain.
 *
 * Time Complexity:
 *   - Best Case: O(n) - when the array is already sorted
 *   - Average Case: O(n^2)
 *   - Worst Case: O(n^2) - when the array is sorted in reverse order
 * Space Complexity: O(1) - In-place sorting algorithm
 *
 * @param {Array} arr - The array to be sorted
 * @returns {Array} - The sorted array
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    // Move elements of arr[0..i-1], that are greater than current, one position ahead of their current position
    //moving each item over until arr[j] is less than current
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
}

// Example Usage:

// Example 1: Sorting numbers
const numbers = [5, 3, 8, 4, 2];
//   console.log(insertionSort(numbers)); // Output: [2, 3, 4, 5, 8]

// Example 2: Sorting strings
const strings = ["banana", "apple", "cherry", "date"];
//   console.log(insertionSort(strings)); // Output: ['apple', 'banana', 'cherry', 'date']

// Example 3: Sorting objects by a specific property
const objects = [
  { name: "John", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 20 },
];
//   console.log(insertionSort(objects, (a, b) => a.age - b.age)); // Output: [{ name: 'Bob', age: 20 }, { name: 'John', age: 25 }, { name: 'Alice', age: 30 }]

//alt implementation

function insertionSort2(arr) {
  for (var i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      console.log(arr);
    }
    arr[j + 1] = currentVal;
  }

  return arr;
}

console.log(insertionSort2([2, 1, 9, 76, 4]));
