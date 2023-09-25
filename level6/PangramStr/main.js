// Create a function that determines whether a given string is a pangram 
//by checking if it contains all the lowercase letters of the alphabet, 
//returning TRUE if it is, and FALSE if it's not.



function isPangram(string) {
    // Create a string containing all lowercase letters of the alphabet.
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
    // Split the alphabet string into an array of characters.
    const alphabetArray = alphabet.split('');
  
    // Use the `every` method to check if every letter in the alphabet
    // is included in the lowercase version of the input string.
    // This function will return true if all letters are found, or false if any letter is missing.
    return alphabetArray.every((x) => string.toLowerCase().includes(x));
  }
  

  console.log(isPangram('Is this a pangram?')) // false
  console.log(isPangram('The quick brown fox jumps over the lazy dog')) // true