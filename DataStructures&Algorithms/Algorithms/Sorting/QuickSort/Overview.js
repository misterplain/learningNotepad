/**
 * Merge Sort
 * 
 * Merge sort is a divide and conquer algorithm that divides the input array into smaller subarrays, sorts them, and then merges them back together.
 * It recursively divides the array in half until each subarray contains only one element, then merges the subarrays in a sorted order.
 * 
 * Time Complexity: 
 *   - Best Case: O(n log n)
 *   - Average Case: O(n log n)
 *   - Worst Case: O(n log n)
 * Space Complexity: O(n) - Requires additional space for temporary arrays during merging
 * 
 * @param {Array} arr - The array to be sorted
 * @returns {Array} - The sorted array
 */
function mergeSort(arr) {
    // Base case: If the array has 0 or 1 element, it is already sorted
    if (arr.length <= 1) {
      return arr;
    }
    
    // Divide the array into two halves
    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);
    
    // Recursively sort each half
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);
    
    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
  }
  
  /**
   * Merge function to merge two sorted arrays into one sorted array
   * 
   * @param {Array} arr1 - The first sorted array
   * @param {Array} arr2 - The second sorted array
   * @returns {Array} - The merged and sorted array
   */
  function merge(arr1, arr2) {
    let merged = [];
    let i = 0; // Pointer for arr1
    let j = 0; // Pointer for arr2
    
    // Compare elements from both arrays and push the smaller one into the merged array
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        merged.push(arr1[i]);
        i++;
      } else {
        merged.push(arr2[j]);
        j++;
      }
    }
    
    // If there are remaining elements in arr1 or arr2, push them into the merged array
    while (i < arr1.length) {
      merged.push(arr1[i]);
      i++;
    }
    
    while (j < arr2.length) {
      merged.push(arr2[j]);
      j++;
    }
    
    return merged;
  }
  
  // Example Usage:
  
  // Example 1: Sorting numbers
  const numbers = [5, 3, 8, 4, 2];
  console.log(mergeSort(numbers)); // Output: [2, 3, 4, 5, 8]
  
  // Example 2: Sorting strings
  const strings = ['banana', 'apple', 'cherry', 'date'];
  console.log(mergeSort(strings)); // Output: ['apple', 'banana', 'cherry', 'date']
  
  // Example 3: Sorting objects by a specific property
  const objects = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 20 }
  ];
  console.log(mergeSort(objects, (a, b) => a.age - b.age)); // Output: [{ name: 'Bob', age: 20 }, { name: 'John', age: 25 }, { name: 'Alice', age: 30 }]
  