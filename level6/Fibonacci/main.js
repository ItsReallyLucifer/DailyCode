// Write a function that returns the last digit of the nth element 
// in the Fibonacci sequence starting with 1,1, 
//where n can be a very large number


function lastFibDigit(n) {
    if (n <= 2) {
      return 1;
    }
  
    let previous = 1;
    let current = 1;
  
    for (let i = 3; i <= n; i++) {
      let next = (previous + current) % 10;
      previous = current;
      current = next;
    }
  
    return current;
  }

  console.log(lastFibDigit(1)) // 1
  console.log(lastFibDigit(2)) // 1
  console.log(lastFibDigit(1000)) // 5