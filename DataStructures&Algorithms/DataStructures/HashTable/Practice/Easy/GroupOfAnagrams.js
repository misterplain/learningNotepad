//list of strings ['abc','qwe','bca']
//anagram can be rearranged to make a new word
// ASCII table - convert string into binary number
//[abd] = [abc, bca]

function findAnagrams(list) {
  const anagramsObj = {};

  for (const str of list) {
    const sortedStr = str.split("").sort().join("");
    // console.log(sortedStr);
    if (!anagramsObj[sortedStr]) {
      anagramsObj[sortedStr] = [];
    }
    anagramsObj[sortedStr].push(str);
  }

  console.log(anagramsObj);
  //   return anagramsObj
  return Object.values(anagramsObj);
}

console.log(findAnagrams(["abc", "Apple", "cba", "Alpep", "xyz"]));
