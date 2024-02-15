//find the two sum
//[1,2,3,4,5] -> index and target value

function twoSum(array, target) {
  let sumObj = {};

  for (let i = 0; i < array.length; i++) {
    let remainder = target - array[i];
    if (sumObj[remainder] !== undefined) {
      sumObj[target] = [sumObj[remainder], i];
      return sumObj
    }
    sumObj[array[i]] = i
  }

  console.log(sumObj);
}

console.log(twoSum([1, 2, 3, 4, 5], 5));
