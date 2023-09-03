// Create a function that generates an array containing all divisors of a given integer,
//  excluding 1 and the number itself, or returns a message stating that the number is prime.




function divisors(integer) {
    const result = [];
    
    for (let i = 2; i <= Math.floor(integer / 2); i++) {
      if (integer % i === 0) {
        result.push(i);
      }
    }
    
    return result.length ? result : `${integer} is prime`;
  }
  
  console.log(divisors(12)); // Output: [2, 3, 4, 6]
  console.log(divisors(25)); // Output: [5]
  console.log(divisors(13)); // Output: "13 is prime"
  