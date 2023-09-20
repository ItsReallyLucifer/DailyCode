// Write a function that takes an array of integers,
// where all elements are either even or odd except 
//for a single outlier, and returns that outlier integer.




function findOutlier(integers) {
    // Separate even and odd integers using filter
    const evens = integers.filter(num => num % 2 === 0);
    const odds = integers.filter(num => num % 2 !== 0);
  
    // Determine which array (evens or odds) contains the outlier
    if (evens.length === 1) {
      return evens[0]; // The outlier is an even integer
    } else {
      return odds[0]; // The outlier is an odd integer
    }
  }


  console.log(findOutlier([2,4,6,8,-10,7])) // returns 7