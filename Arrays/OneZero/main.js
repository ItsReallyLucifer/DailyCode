// Create a function that takes an array of ones and zeroes 
// (representing a binary number) 
// and converts it into its equivalent decimal integer value.
//[0, 0, 1, 0] ==> 2 || [0, 1, 0, 1] ==> 5

function binaryArrayToNumber(arr) {
    // Use the parseInt function to convert the binary array to a decimal integer
    return parseInt(arr.join(''), 2);
  };

  console.log(binaryArrayToNumber([0, 0, 1, 0])); //  2
  console.log(binaryArrayToNumber([0, 1, 0, 1])); //  5