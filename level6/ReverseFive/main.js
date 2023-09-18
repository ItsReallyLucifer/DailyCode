// Create a function that takes a string of words, 
// reverses any word with five or more letters, 
// and returns the modified string while preserving the word order.


function spinWords(string) {
    // Split the input string into words
    const words = string.split(' ');
  
    // Iterate through the words and reverse those with five or more letters
    const reversedWords = words.map(word => {
      if (word.length >= 5) {
        return word.split('').reverse().join('');
      } else {
        return word;
      }
    });
  
    // Join the modified words back into a string
    return reversedWords.join(' ');
  }

  console.log(spinWords("This is a test"))
  console.log(spinWords("This is another test")) // "another" is reversed