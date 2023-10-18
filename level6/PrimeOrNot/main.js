// Create a function that takes an integer as input and returns true 
//if the integer is a prime number (greater than 1 with no positive divisors other than 1 and itself), 
//or false if it is not, with the added requirement of efficient performance for large numbers.


function isPrime(num) {
    for(let i = 2; i <= Math.sqrt(num); i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return num > 1
  }

  console.log(isPrime(1)) // false
  console.log(isPrime(2)) // true 