// collectStrings
// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

for (const key in obj) {
  console.log(key, obj[key]);
}

objLength = Object.keys(obj).length;

//create empty array, loop through object and check for keys
//if your key is a string, append it to the array
//if the value of the key is an object, recurdisvely call this again

var keys = Object.keys(obj);
var values = Object.values(obj);

const collectStrings = (obj, arr = [], index = 0) => {
  if (index === Object.keys(obj).length) {
    return obj;
  }

  if (typeof Object.keys[obj][index] === "string") {
    arr.push(Object.values(obj[index]));
  }

  if (typeof Object.keys[obj][index] === "object") {
    // arr.push(Object.values(obj[index]));
    collectStrings(obj, arr, index + 1);
  }
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])

// collectStrings
// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

// Convert object keys to an array
var keys = Object.keys(obj);
console.log(keys[0]); // Output: 'a'

// Convert object values to an array
var values = Object.values(obj);
console.log(values[0]); // Output: 'a'

const collectStrings2 = (obj, arr = []) => {
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      arr.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      return collectStrings(obj[key], arr);
    }
  }

  return arr;
};
console.log(collectStrings2(obj));
// objLength = Object.keys(obj).length
// console.log(obj[0]);
// console.log(typeof obj.a);
// console.log(typeof obj.d);

// console.log(objLength);
// for (const key in obj) {
//     console.log(key, obj[key]);
// }
// collectStrings(obj) // ["foo", "bar", "baz"])
