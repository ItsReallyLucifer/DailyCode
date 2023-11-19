// Create a function that combines two arrays and -
// calculates the sum of all their elements & return the result.



function combineTwoArr(arr1, arr2){
  const commbinedArr = arr1.concat(arr2);
  const sumArr = commbinedArr.reduce((acc, c) => acc + c, 0)
  return sumArr
}
console.log(combineTwoArr([1,2,3],[4,5,6])) // 21


  //Methods used:
  // *concat - to combine 2 or more arrays or values into a new array.
  // *reduce- to reduce an array to a single value. Iterates through the elements. [1+2+3+4+5]