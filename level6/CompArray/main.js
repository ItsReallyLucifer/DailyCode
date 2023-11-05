//Write a JavaScript function comp(array1, array2) that checks whether the two input arrays 
//have the same elements with the same multiplicities, where the elements in array2 are the 
//squares of the elements in array1, and return true if they match or false otherwise, 
//handling special cases where the input arrays are null, nil, or have different lengths.
  


function comp(array1, array2) {

    if (!array1 || !array2 || array1.length !== array2.length) {
      return false;
    }
  
    const squaredA = array1.map((x) => x * x);
  
    squaredA.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);
  
    return JSON.stringify(squaredA) === JSON.stringify(array2);
  }

const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
const b1 = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
console.log(comp(a1, b1));  //  true

const a2 = [121, 144, 19, 161, 19, 144, 19, 11];
const b2 = [132, 14641, 20736, 361, 25921, 361, 20736, 361];
console.log(comp(a2, b2));  //  false