// Create a function that accepts 3 integer values a, b, c
// the function should return true if a trianle can be built with the sides of given length
// and false in any other case.



function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}

console.log(isTriangle(2,2,2)) // true
console.log(isTriangle(10,2,5)) // false