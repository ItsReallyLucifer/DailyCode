// Create a function that finds all numbers from 1 to a given number containing a specified digit, 
// returning an array with the count of these numbers, 
// their sum, and their product, or [0, 0, 0] if there are no such numbers.


function numbersWithDigitInside(x, d) {
  
    let i = 1
    let count = 0
    let sum = 0
    let m = 1
  
    while(i <= x){
      if(i.toString().includes(d) ){
        count++
        sum += i
        m *= i
      }
      i++
    }
    
    return count ? [count, sum, m] : [0, 0, 0]
  }
  
  console.log(numbersWithDigitInside(11, 1)); //  [3, 22, 110]
  console.log(numbersWithDigitInside(20, 9)); //  [2, 28, 171]
  console.log(numbersWithDigitInside(5, 7)); //  [0, 0, 0]
  