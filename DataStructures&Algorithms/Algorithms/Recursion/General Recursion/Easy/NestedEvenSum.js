// nestedEvenSum
// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum() {
  // add whatever parameters you deem necessary - good luck!
}

// var obj2 = {
//   a: 2,
//   b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
//   c: { c: { c: 2 }, cc: "ball", ccc: 5 },
//   d: 1,
//   e: { e: { e: 2 }, ee: "car" },
// };
var obj = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};
function nestedEvenSum(obj, sum = 0) {
  for (const key in obj) {
    if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    } else if (Array.isArray(obj[key])) {
      continue;
    } else if (typeof obj[key] === "object") {
      return nestedEvenSum(obj[key], sum);
    }
  }

  return sum;
}

console.log(nestedEvenSum(obj)); // 6
// console.log(nestedEvenSum(obj2)); // 10
