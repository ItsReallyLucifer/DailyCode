// Create a function that given an array of numbers -
// returns the sum of all the positive ones.
// example: [1, -3, 7, 12] => 1 + 7 + 12 = 20



function positiveSum(arr) {
    var total = 0;    
    for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
      if (arr[i] > 0) {                   // if arr[i] is greater than zero
        total += arr[i];                  // add arr[i] to total
      }
    }
    return total;                         // return total
  }

  console.log(positiveSum([1, 5, -4, 2])) // 8