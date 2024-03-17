// Linear Search Overview:

// Algorithm:
// - Start from the beginning of the array.
// - Compare each element with the target element until a match is found or the end of the array is reached.
// - If a match is found, return the index of the element; otherwise, return -1 to indicate that the element is not present in the array.

//built in javascript to perform this - indexOf() or includes()
// Time Complexity:
// - Best Case: O(1) - When the target element is found at the first position.
// - Worst Case: O(n) - When the target element is not present in the array or is present at the last position.
// - Average Case: O(n)

// Simple Example:
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Element found, return its index
    }
  }
  return -1; // Element not found
}

const array = [3, 1, 4, 2, 5];
console.log(linearSearch(array, 4)); // Output: 2
console.log(linearSearch(array, 6)); // Output: -1

// Searching for Objects:
const students = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 25 },
];

function searchStudentByName(arr, name) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === name) {
      return i; // Student found, return its index
    }
  }
  return -1; // Student not found
}

console.log(searchStudentByName(students, "Bob")); // Output: 1

// Using Array Methods:
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

function searchFruit(arr, fruit) {
  return arr.indexOf(fruit); // Using indexOf() method
}

console.log(searchFruit(fruits, "date")); // Output: 3
