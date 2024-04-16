// capitalizeFirst
// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(array, index=0) {
  if (index === array.length) {
    // console.log(array[0].charAt(0).toUpperCase())
    // array[0] = array[0].charAt(0).toUpperCase() + array[0].slice(1)
    return array;
  }
  array[index] = array[index].charAt(0).toUpperCase() + array[index].slice(1)
  return capitalizeFirst(array, index + 1);
}

console.log(capitalizeFirst(["car", "taco", "banana", "apple"])); // ['Car','Taco','Banana']
