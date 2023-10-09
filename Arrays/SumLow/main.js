// Create a function to find and sum the two lowest 
// positive numbers in an array of positive integers.
// ex: [19, 5, 42, 2, 77] || (5+2) = 7


function sumTwoSmallestNumbers(numbers) {
    // Sort the array in ascending order
    const sortedNumbers = numbers.sort((a, b) => a - b);
  
    // Sum the two lowest positive numbers (first and second elements)
    const sum = sortedNumbers[0] + sortedNumbers[1];
  
    return sum;
  }

  console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])); //  7
  console.log(sumTwoSmallestNumbers([29, 11, 42, 4, 25])); // Output: 15