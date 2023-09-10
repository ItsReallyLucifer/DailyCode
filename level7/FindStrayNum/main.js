// Create a function named stray that takes an odd-length array of integers 
// where all elements are the same except for one, 
// and it returns the unique number that appears only once within the array.



function stray(numbers) {
    return numbers.reduce((acc, num) => acc ^ num, 0);

  }

  console.log(stray([1,7,7])) // 1
  console.log(stray([8,5,5])) // 8