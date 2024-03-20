// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
// Time - O(n)

// Space - O(n)
// Bonus:
// Time - O(n log n)
// Space - O(1)

function areThereDuplicates(...args) {
  const sorted = args.sort((a, b) => {
    if (typeof a === "number" && typeof b === "number") {
      return a - b;
    } else {
      return String(a).localeCompare(String(b));
    }
  });
  console.log(sorted);


  let i = 0;
  for (let j = i + 1; j < args.length; j++) {
    // Use args[0].length to get the length of the array
    console.log(sorted[i], sorted[j]);
    if (sorted[i] === sorted[j]) {
      return true;
    }
    i++;
  }

  return false;
}

// Test cases
// console.log(areThereDuplicates(1, 2, 3)); // false
// console.log(areThereDuplicates(1, 2, 2)); // true
// console.log(areThereDuplicates("a", "b", "c", "a")); // true

