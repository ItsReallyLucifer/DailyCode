//Create a function that takes a positive parameter num, 
//calculates its multiplicative persistence 
//(the number of times you must multiply its digits until it becomes a single-digit number),
// and returns the multiplicative persistence value.
// example: 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)



function persistence(num) {
    // Initialize a variable to keep track of the number of multiplicative steps
    var times = 0;
    
    // Convert the number to a string to work with its digits
    num = num.toString();
    
    // Continue the process until the number has only one digit
    while (num.length > 1) {
      // Increment the step count
      times++;
 
      // Split the number into an array of digits, convert them to numbers,
      // multiply them together, and convert the result back to a string
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    
    // Return the number of steps
    return times;
 }
 
 // Test cases
 console.log(persistence(39));  //  3
 console.log(persistence(999)); //  4
 console.log(persistence(4));   //  0