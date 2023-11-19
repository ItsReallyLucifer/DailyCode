// Create a function that takes a string as input 
// and returns the count of vowels (a, e, i, o, u, but not y)
// within the given string, which will consist only of lowercase letters and spaces.


function vowelCount(str) {
  str = str.toLowerCase();
  const characters = str.split('');
  const vowels = ['a','e','i','o','u']
  const vowelCharacters = characters.filter(char => vowels.includes(char));
  const vowelString = vowelCharacters.join('');
  return vowelString.length;
}

console.log(vowelCount('How many vowels?')) // 4

// psuedo 
// Convert the input string to lowercase for a case-insensitive count
// Split the string into an array of characters
// Define an array of vowels
// Use the filter() method to keep only vowels in the array
// Join the filtered array back into a string
// Return the length of the vowelString


//OR

