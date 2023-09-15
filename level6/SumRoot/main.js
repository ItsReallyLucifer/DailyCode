// Create a function that calculates the digital root of a given non-negative integer
// by repeatedly summing its digits until a single-digit result is obtained.
// examples: 16  -->  1 + 6 = 7  ||||  942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6



function digitalRoot(n) {
    // Convert the number to a string to easily access its digits
    const numStr = n.toString();
  
    // Base case: If the number has only one digit, return it
    if (numStr.length === 1) {
      return n;
    }
  
    // Calculate the sum of the digits
    const digitSum = numStr
      .split('') // Split the string into an array of digits
      .map(Number) // Convert each digit back to a number
      .reduce((acc, digit) => acc + digit, 0); // Sum all the digits
  
    // Recursively call the digitalRoot function with the sum
    return digitalRoot(digitSum);
  }

  console.log(digitalRoot(16)) // 7
  console.log(digitalRoot(942)) // 6