// Create a function that takes an array of numbers and returns the sum of the numbers.


function sum(numbers) {
    answer = numbers.reduce((a, b) => a + b, 0);
    return answer
  }

  console.log(sum([5,10,15]))