//Create a function that calculates and returns the absolute difference 
// between the volumes of two cuboids, 
//each represented by a list of 3 positive integers, regardless of their sizes.




function find_difference(a, b) {
    return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
  }
  
  console.log(find_difference([5, 10, 15], [3, 2, 5])); // 720
  