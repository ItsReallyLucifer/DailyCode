// Create a function to double each value in an array 
// of integers and return a new array with the doubled values.

function doubleVal(arr){
    return arr.map((value) => value * 2)
}

console.log(doubleVal([4,5,9])) // [8, 10, 18]