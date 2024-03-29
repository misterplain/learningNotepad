/**
 * Radix Sort
 *
 * Radix sort is a non-comparative sorting algorithm that sorts numbers by processing individual digits. - numbers or strings converted to numbers (binary)
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

//alt implementation
//helper function getDigit(num, place)
function getDigit(num, i) {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10);
}
//7323 - pass in 2
//divide by 100 basically (math.pow(10,2)) floor will remove values afterwards, mod 10 will give you the reminder which is the digit in that location

//helper to figure out how many digits are in a number
function digitCount(num) {
  if (num === 0) return 1;
  //10 to WHAT POWER gives us this number = Math.log10
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//helper function to figure out which has the most digitis, returns the count of the number with the most digits
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

//now the implemntation of the radix function
//pseudocode
//define a function that accepts lists of numbers
//figure out how many digits the largest number has
//loop from k=0 up to this largest number of digits
//for each iteration of the loop, create buckets for each digit, and place each number in the corresponding bucket based on its kth digit
//replace our existing array with values in our buckets, starting with 0 and going up to 9
//return list at the end
function radixSort2(nums) {
  let maxDigitsCount = mostDigits(nums);
  console.log(maxDigitsCount);

  for (let k = 0; k < maxDigitsCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      digitBuckets[getDigit(nums[i], k)].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(radixSort2([23, 345, 5467, 12, 2345, 9852]));

// Example Usage:

// // Example 1: Sorting positive numbers
// const numbers = [170, 45, 75, 90, 802, 24, 2, 66];
// console.log(radixSort(numbers)); // Output: [2, 24, 45, 66, 75, 90, 170, 802]

// // Example 2: Sorting negative numbers
// const negativeNumbers = [-170, -45, -75, -90, -802, -24, -2, -66];
// console.log(radixSort(negativeNumbers)); // Output: [-802, -170, -90, -75, -66, -45, -24, -2]

// // Example 3: Sorting strings (converting ASCII values to numbers)
// const strings = ["apple", "banana", "cherry", "date"];
// console.log(radixSort(strings.map((str) => str.charCodeAt(0)))); // Output: [97, 98, 99, 100] (ASCII values of 'a', 'b', 'c', 'd')
