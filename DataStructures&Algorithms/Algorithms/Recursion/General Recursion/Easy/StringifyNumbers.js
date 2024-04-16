// stringifyNumbers
// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

function stringifyNumbers(obj, string = "") {
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      string = string + obj[key];
    } else if (Array.isArray(obj[key])) {
      continue;
    } else if (typeof obj[key] === "object") {
      return stringifyNumbers(obj[key], string);
    }
  }

  return string;
}
let obj = {
  num: 1,
  test: [],

  data: {
    val: 4,
    num2: 7,
    info: {
      isRight: true,
      random: 66,
    },
  },
};
function stringifyNumbers2(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
      console.log(newObj[key]);
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      // console.log(obj[key]);
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

console.log(stringifyNumbers2(obj));
