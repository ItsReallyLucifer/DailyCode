



function arrayPlusArray(arr1, arr2) {
    const combinedArr = arr1.concat(arr2);
    const sum = combinedArr.reduce((acc, currentVal) => acc + currentVal, 0)
    return sum
  }

  const array1 = [1,2,3]
  const array2 = [4,5,6]
  const result = arrayPlusArray(array1, array2)
  console.log(result) // 21


  //Methods used:
  // concat- to combine 2 or more arrays or values into a new array.
  //ex: array1 = [1,2,3] || array2 = [3,4,5] || combinedArr= array1.concat(array2) -> [1,2,3,4,5]
  //
  // reduce- to reduce an array to a single value. Iterates through the elements. [1+2+3+4+5]

