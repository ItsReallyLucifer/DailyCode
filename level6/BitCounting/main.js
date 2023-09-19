// Create a function that takes a non-negative integer as input,
// converts it to binary representation, 
// and returns the count of '1's in that binary string.



function countBits(n) {
    //n.toString(2) converts to binary
    return n.toString(2).replace(/0/g,'').length; // .replace being used to remove all 0s and .length to get the length.
  }

  console.log(countBits(20)) // 10100 = 2