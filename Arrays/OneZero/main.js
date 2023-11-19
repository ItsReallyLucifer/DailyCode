// Create a function that takes an array of ones and zeroes 
// (representing a binary number) 
// and converts it into its equivalent decimal integer value.
//[0, 0, 1, 0] ==> 2 || [0, 1, 0, 1] ==> 5

function binaryArrayToNumber(arr) {
    return parseInt(arr.join(''), 2);
  };

  console.log(binaryArrayToNumber([0, 0, 1, 0])); //  2
  console.log(binaryArrayToNumber([0, 1, 0, 1])); //  5



  //OR

  const binaryArrToNum = arr => parseInt(arr.join(''), 2)
  
  console.log(binaryArrToNum([0, 0, 1, 0])); //  2
  console.log(binaryArrToNum([0, 1, 0, 1])); //  5

  // Methods used: 
  // * parseInt() - used to parse a string and convert it into an integer
  // * join() - joins all elements of an array into a string, seperated by specified separator.
  // * 2 specifies the radix indicating it shuuld be treated as a binary num.