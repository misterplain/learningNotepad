//common elements between two arrays

function commonEls(arr1, arr2) {
  let commonEls = [];
  let arr1Obj = {};
  let arr2Obj = {};

  //iteration through first array
  for (let i = 0; i < arr1.length; i++) {
    //set it to false instead
    arr1Obj[arr1[i]] = false;
  }
  //   console.log(arr1Obj[0]);
  //   console.log(arr2[0]);
  console.log(arr1Obj)
  //iteration through second array
  for (let i = 0; i < arr2.length; i++) {
    if(arr1Obj[arr2[i]] !== undefined){
        console.log(arr2[i] + " at " + i)
    }
  }
}

console.log(commonEls([1, 2, 4], [3, 4, 5]));
