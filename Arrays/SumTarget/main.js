//Create a function that takes an array of integers (x) and a target integer (t),
// and removes the second element in any consecutive pair of elements whose sum equals t,
// return the new array
// example: x = [1,2,3,4,5] || t = 3  || (1+2 = 3) remove the second num so remove 2.


function trouble(x, t) {
  return x.filter((value, index, array) => {
      if (index < array.length - 1 && value + array[index + 1] === t) {
          return false; // Exclude the next element.
      } else {
          return true; // Include the current element.
      }
  });
}

const x = [1, 2, 3, 4, 5];
const t = 3;

console.log(trouble(x, t)); // Output: [1, 3, 4, 5]
