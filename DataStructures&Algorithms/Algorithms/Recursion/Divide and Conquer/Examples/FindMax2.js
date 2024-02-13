function findMax(array) {
  const arraySorted = array.sort((a, b) => a - b);
  console.log(arraySorted);
  
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arraySorted[mid] < arraySorted[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return array[left];
}

console.log(findMax([1, 12, 3, 92, 100, 3, 5, 2]));
// console.log(findMax([1, 12, 3, 92, 100, 3, 5, 2]));

//iteration 1
//left 0
//right 7
//mid 3
//array[0]  1
//aray[7] 2
//array
