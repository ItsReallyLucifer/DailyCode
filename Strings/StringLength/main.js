//Create a function that takes an array of strings as an argument
// and returns a new array containing the same strings sorted
//  from shortest to longest length.



function sortArr(arr){
  return arr.sort((a,b) => a.length - b.length)
}

console.log(sortArr(['Mercedes', 'BMW', 'Audi']))