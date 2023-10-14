//Create a function that takes a string as input and splits it
// into pairs of two characters, adding an underscore ('_')
// to the last pair if the string has an odd number of characters.


function solution(str) {
    const result = [];

    for (let i = 0; i < str.length; i += 2) {
      if (i + 1 < str.length) {
        result.push(str.slice(i, i + 2));
      } else {
        result.push(str[i] + '_');
      }
    }
    return result;
  }
  
  console.log(solution('abc')); // ['ab', 'c_']
  console.log(solution('abcdef')); // ['ab', 'cd', 'ef']
  