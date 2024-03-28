/**
 * Radix Sort
 * 
 * Radix sort is a non-comparative sorting algorithm that sorts numbers by processing individual digits.
 * It sorts numbers digit by digit, starting from the least significant digit (rightmost digit) to the most significant digit (leftmost digit).
 * 
 * Time Complexity: 
 *   - Best Case: O(nk)
 *   - Average Case: O(nk)
 *   - Worst Case: O(nk)
 * Space Complexity: O(n + k) - Additional space required for the count array
 * 
 * @param {Array} arr - The array to be sorted
 * @returns {Array} - The sorted array
 */
function radixSort(arr) {
    // Find the maximum number to determine the number of digits
    const maxNum = Math.max(...arr);
    let digitCount = Math.floor(Math.log10(maxNum)) + 1;
    
    // Perform counting sort for each digit, starting from the least significant digit
    for (let k = 0; k < digitCount; k++) {
      const digitBuckets = Array.from({ length: 10 }, () => []);
      
      // Place each number in the corresponding bucket based on the value of the current digit
      for (let i = 0; i < arr.length; i++) {
        const digit = Math.floor(Math.abs(arr[i]) / Math.pow(10, k)) % 10;
        digitBuckets[digit].push(arr[i]);
      }
      
      // Flatten the buckets back into the original array
      arr = [].concat(...digitBuckets);
    }
    
    return arr;
  }
  
  // Example Usage:
  
  // Example 1: Sorting positive numbers
  const numbers = [170, 45, 75, 90, 802, 24, 2, 66];
  console.log(radixSort(numbers)); // Output: [2, 24, 45, 66, 75, 90, 170, 802]
  
  // Example 2: Sorting negative numbers
  const negativeNumbers = [-170, -45, -75, -90, -802, -24, -2, -66];
  console.log(radixSort(negativeNumbers)); // Output: [-802, -170, -90, -75, -66, -45, -24, -2]
  
  // Example 3: Sorting strings (converting ASCII values to numbers)
  const strings = ['apple', 'banana', 'cherry', 'date'];
  console.log(radixSort(strings.map(str => str.charCodeAt(0)))); // Output: [97, 98, 99, 100] (ASCII values of 'a', 'b', 'c', 'd')
  