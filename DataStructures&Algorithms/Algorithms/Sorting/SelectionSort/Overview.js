/*
Selection Sort:
Selection Sort divides the input array into two parts: the subarray of sorted elements and the subarray of unsorted elements. It repeatedly selects the smallest (or largest) element from the unsorted subarray and moves it to the beginning (or end) of the sorted subarray.
*/

function selectionSort(array) {
    const n = array.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i; // Assume the current index has the minimum value
      // Find the index of the minimum element in the unsorted part
      for (let j = i + 1; j < n; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      // Swap the minimum element with the first unsorted element
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
    return array;
  }
  
  // Example 1: Simple case with numbers
  console.log(selectionSort([5, 3, 8, 1, 2])); // Output: [1, 2, 3, 5, 8]
  
  // Example 2: Sorting strings alphabetically
  console.log(selectionSort(['banana', 'apple', 'orange', 'grape'])); // Output: ['apple', 'banana', 'grape', 'orange']
  
  // Example 3: Sorting objects by a specific property
  const people = [
    { name: 'John', age: 30 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 35 },
  ];
  console.log(selectionSort(people, (a, b) => a.age - b.age)); // Output: [{ name: 'Alice', age: 25 }, { name: 'John', age: 30 }, { name: 'Bob', age: 35 }]
  