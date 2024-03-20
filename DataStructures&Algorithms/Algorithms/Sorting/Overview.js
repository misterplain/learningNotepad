//built in javascript sort method
["steele", "colt"]
  .sort() //will sort alphabetically
  [(6, 4, 15, 10)].sort(); // will sort accotding to string unicode points

//accepts optional comparator function - you can use this comparator function to tell javascript how to you want to sort this
//the comparator looks at paris of elements (a, b), determines their sort order based ont he return value . if it returns a negative number, a should come before b, if it returns a positive number, a should come after b, if it returns -, a and b are the same as far as the sort is concerned

function numCompare(num1, num2){
    return num1-num2
}
[6,4,15,10].sort(numCompare) //[[4,6,10,15]]
//can do str.length to compare lengths for example

/*
Bubble Sort:
Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.
*/

function bubbleSort(array) {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Swap elements
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

/*
  Selection Sort:
  Selection Sort divides the input array into two parts: the subarray of sorted elements and the subarray of unsorted elements. It repeatedly selects the smallest (or largest) element from the unsorted subarray and moves it to the beginning (or end) of the sorted subarray.
  */

function selectionSort(array) {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    // Swap elements
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  return array;
}

/*
  Insertion Sort:
  Insertion Sort builds the final sorted array one item at a time by repeatedly taking the next element from the unsorted part and inserting it into its correct position in the sorted part.
  */

function insertionSort(array) {
  const n = array.length;
  for (let i = 1; i < n; i++) {
    let current = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}

/*
  Merge Sort:
  Merge Sort is a divide-and-conquer algorithm. It divides the input array into two halves, sorts each half recursively, and then merges the sorted halves to produce the final sorted array.
  */

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

/*
  Quick Sort:
  Quick Sort is another divide-and-conquer algorithm. It picks an element as a pivot and partitions the array around the pivot, such that elements less than the pivot are on the left and elements greater than the pivot are on the right. It then recursively sorts the subarrays.
  */

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const pivot = array[array.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
