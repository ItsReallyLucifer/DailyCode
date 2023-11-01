//Write a function that takes an array of at least three numbers, 
// and it identifies and returns the unique number in the array, which is different from the others.



function findUniq(arr) {
    arr.sort((a, b) => a - b);

    if (arr[0] !== arr[1]) {
      return arr[0];
    } else {
      return arr[arr.length - 1];
    }
  }
  
  console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
  console.log(findUniq([0, 0, 0.75, 0, 0])); //  0.75
  