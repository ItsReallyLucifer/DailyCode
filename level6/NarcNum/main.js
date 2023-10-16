// Create a function that determines whether a given positive integer
// is a Narcissistic Number in base 10 by summing each of its digits
//  raised to the power of the number of digits and returning true if the sum equals the original number, or false if it does not.
// example: 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153 


function narcissistic(value) {
    return value.toString()
                .split('')
                .map( (x,i,arr) => x ** arr.length)
                .reduce( (a,b)=> +a + +b) 
                 === value
  }

  console.log(narcissistic(153)) // true