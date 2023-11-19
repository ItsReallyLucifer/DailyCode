// Create a function to find and sum the two lowest 
// positive numbers in an array of positive integers.
// ex: [19, 5, 42, 2, 77] || (5+2) = 7


// function sumsTwoLowest(nums){
//   const sortedArr = nums.sort((a, b) => a - b);
//   const summedArr = sortedArr[0] + sortedArr[1]
//   return summedArr
// }
// console.log(sumsTwoLowest([19,5,42,2,77]))

  // Methods used:
  // * sort - sorts the elements of an array in place and returns the sorted array.

  // OR

  const sumsTwoLowest = nums => (nums.sort((a, b) => a - b), nums[0] + nums[1])
  console.log(sumsTwoLowest([19,5,42,2,77])) // 7
  console.log(sumsTwoLowest([1, 10, 3, 2])) // 3
  console.log(sumsTwoLowest([9, 8, 7, 6])); // 13