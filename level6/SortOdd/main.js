// Create a function that takes in an Array of nums
// Sort the odd numbers in ascending order while 
// leaving the even nums at their original positions



function sortArray(array) {
    const sortedOdds = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);
    return array.map(num => (num % 2 !== 0 ? sortedOdds.shift() : num));

  }

  console.log(sortArray([7,5,16,9,2])) // 5,7,16,9,2

  