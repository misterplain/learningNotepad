// productOfArray
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(arr) {

  if (arr.length === 0) {
    return 1;
  }

  let total = arr[0];
  
  return total * productOfArray(arr.slice(1));
}

// console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1,2,3,10])) // 60
