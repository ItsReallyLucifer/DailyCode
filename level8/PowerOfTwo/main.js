// Create the function that takes a non-negative integer n as input,
// and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
// example: n = 0  ==> [1] |||| n = 1  ==> [1, 2] ||||||  n = 2  ==> [1, 2, 4]
// *(anything ^to the power of 0 = 1)


function powersOfTwo(n) {
    const result = [];
  
    for (let i = 0; i <= n; i++) {
      result.push(Math.pow(2, i));
    }
    return result;
  }

  console.log(powersOfTwo(5)) // 2^0, 2^1, 2^3, 2^4, 2^5 || 1,2,4,8,16,32