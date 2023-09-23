//Create a function that takes an array of non-negative numbers
// and arranges them to form the largest possible number when concatenated together, 
//returning the result as a string.


function biggest(nums) {
    return nums
      .map(String)
      .sort((a, b) => (b + a).localeCompare(a + b)) // Use localeCompare for string comparison
      .join('')
      .replace(/^0+(.)/, '$1'); // Remove leading zeros
  
  }
  
  console.log(biggest([1,2,3,4,5])); // 54321