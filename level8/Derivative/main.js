// Create a function that takes two numbers as parameters. Coefficient / exponent
// multiply the 2 numbers then subtract 1 from the exponent.
//Then, it has to return an expression (like 28x^7). "^1" should not be truncated when exponent = 2.


function derive(a, b) {
    return (a * b) + "x^" + (b - 1);
  }

  console.log(derive(10,2))
  console.log(derive(20,16))