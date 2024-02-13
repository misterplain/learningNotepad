//https://leetcode.com/problems/majority-element/

var majorityElement = function (nums) {
  let obj = {};

  if (nums.length === 1) {
    return nums[0];
  }

  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]]++;
      if (obj[nums[i]] / nums.length >= 0.5) {
        return nums[i];
      }
    }
  }
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2, 1, 1]));

//alt approach

var majorityElement = function (nums) {
  let count = 0,
    maj = 0;
  for (let n of nums) {
    if (count === 0) {
      maj = n;
    }
    if (maj === n) {
      count++;
    } else {
      count--;
    }
  }
  return maj;
};
