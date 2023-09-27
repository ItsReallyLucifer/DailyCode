//Create a function that takes an array of strings as an argument
// and returns a new array containing the same strings sorted
//  from shortest to longest length.



function sortByLength(array) {
    // sort() method with a custom comparison function
    return array.sort((a, b) => a.length - b.length);
  }

  const inputArray = ["Mercedes", "Audi", "BMW"]
  const newSorted = sortByLength(inputArray)
  
  console.log(newSorted) // [BMW, Audi, Mercedes]