// Create a function that takes an array of consecutive letters and returns the missing letter,
// assuming the array is always valid, contains only one missing letter, 
//and has a length of at least 2.




function findMissingLetter(array) {
    let first = array[0].charCodeAt(0)
    for (let i = 1; i < array.length; i++) {
      if (first + i !== array[i].charCodeAt(0)) {
        return String.fromCharCode(first + i)
      }
    }
    throw new Error("Invalid input")
  }

  console.log(findMissingLetter(['a','c','d'])) // b