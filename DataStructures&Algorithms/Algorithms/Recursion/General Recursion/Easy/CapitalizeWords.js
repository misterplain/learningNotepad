// capitalizeWords
// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

function capitalizedWords(array) {
  if (array.length === 1) {
    console.log(array[0])
    return [array[0].toUpperCase()];
  }

  const results = capitalizedWords(array.slice(1)); // "AM", "LEARNING", "RECURSION"
  // console.log({results})
  console.log(array[0].toUpperCase())
  return [array[0].toUpperCase(), ...results]
  
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
