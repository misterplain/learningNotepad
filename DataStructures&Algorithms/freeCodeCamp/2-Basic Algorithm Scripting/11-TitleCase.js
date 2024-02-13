//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence

// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

function titleCase(str) {
  let string = str.split(" ");
  let newString = "";

  for (let i = 0; i < string.length; i++) {
    let capitalizedWord =
      string[i].charAt(0).toUpperCase() +
      string[i].slice(1).toLowerCase() +
      " ";

    console.log(capitalizedWord);

    newString += capitalizedWord;
  }

  return newString.trim();
}

titleCase("I'm a little tea pot");

//alt solution # 1

// function titleCase(str) {
//   const newTitle = str.split(" ");
//   const updatedTitle = [];
//   for (let st in newTitle) {
//     updatedTitle[st] =
//       newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
//   }
//   return updatedTitle.join(" ");
// }

//alt solution # 2

// function titleCase(str) {
//   return str
//     .toLowerCase()
//     .split(" ")
//     .map((val) => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
//     .join(" ");
// }

//alt solution # 3

// function titleCase(str) {
//   return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
// }
