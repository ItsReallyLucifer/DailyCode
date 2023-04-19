// Write a function which calculates the average of the numbers in a given list.
// Empty arrays should return 0.




function findAverage(array) {
    if (array.length === 0) {
      return 0; // Return 0 for an empty array
    }
    
    const sum = array.reduce((acc, num) => acc + num, 0); // Calculate the sum of all numbers
    return sum / array.length; // Return the average
  }
  
  console.log(findAverage([1, 2, 3, 4, 5])); //  3
  console.log(findAverage([])); //  0
  console.log(findAverage([10, 20, 30])); //  20
  

