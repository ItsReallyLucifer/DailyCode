// Create a function that checks if the first argument n is divisible by all other arguments
// (return true if no other arguments)



function isDivisible(n, ...args) {
    if (args.length === 0) {
      return true; // If no other arguments are provided, return true
    }
  
    for (let i = 0; i < args.length; i++) {
      if (n % args[i] !== 0) {
        return false; // If n is not divisible by any argument, return false
      }
    }
  
    return true; // If n is divisible by all other arguments, return true
  }
  
  console.log(isDivisible(6, 1, 3)); // true
  console.log(isDivisible(12, 2)); //  true
  console.log(isDivisible(100, 5, 4, 10, 25, 20)); // true
  console.log(isDivisible(12, 7)); //  false
  