//Create a function that takes an array of integers (x) and a target integer (t),
// and removes the second element in any consecutive pair of elements whose sum equals t,
// return the new array
// example: x = [1,2,3,4,5] || t = 3  || (1+2 = 3) remove the second num so remove 2.


function trouble(x, t){
    for(var i=0; i<x.length; i++) {
      if(x[i]+x[i+1]===t) {
        x.splice(i+1,1);
        i--;
      }
    }
    
    return x;
  }

  const x = [1,2,3,4,5]
  const t = 3

  console.log(trouble(x, t)) // [1, 3, 4, 5]