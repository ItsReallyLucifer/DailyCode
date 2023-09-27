// Create a function that takes a string as input 
//and returns the count of vowels (a, e, i, o, u, but not y)
// within the given string, which will consist only of lowercase letters and spaces.


function getCount(str) {
    // Use a regular expression to match and count all vowels (a, e, i, o, u)
    const vowelMatches = str.match(/[aeiou]/gi) || [];
  
    // Return the length of the vowelMatches array
    return vowelMatches.length;
  }
  
  const inputString = "hello world";
  const vowelCount = getCount(inputString);
  console.log(vowelCount); // Output: 3 (e, o, o are vowels)