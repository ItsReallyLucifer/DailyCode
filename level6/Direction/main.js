// Create a function that checks if a given array of directions for a walk 
// will take exactly ten minutes and return to the starting point, 
// with valid directions represented as 'n' (north), 's' (south), 'e' (east), or 'w' (west).


function isValidWalk(walk) {
    // Initialize variables to keep track of the changes in x and y coordinates (dx and dy),
    // as well as the total number of steps (dt).
    var dx = 0;
    var dy = 0;
    var dt = walk.length;
    
    // Iterate through the given array of directions.
    for (var i = 0; i < walk.length; i++) {
      // Update the x and y coordinates based on the current direction.
      switch (walk[i]) {
        case 'n': dy--; break; // Move one step north, decrement dy.
        case 's': dy++; break; // Move one step south, increment dy.
        case 'w': dx--; break; // Move one step west, decrement dx.
        case 'e': dx++; break; // Move one step east, increment dx.
      }
    }
    
    // Check if the total number of steps is 10 and if the final coordinates are (0,0).
    return dt === 10 && dx === 0 && dy === 0;
  }
  
  console.log(isValidWalk(['n', 's', 'w', 'e'])); // false
  console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); // true
  