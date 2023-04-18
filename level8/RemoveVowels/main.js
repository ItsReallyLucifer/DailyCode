// Create a function called that removes the lowercase vowels (a, e, i, o, u ) in a given string.


function shortcut(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';
  
    for (let i = 0; i < string.length; i++) {
      if (!vowels.includes(string[i])) {
        result += string[i];
      }
    }
  
    return result;
  }
  
  console.log(shortcut("hello"));     //  "hll"
  console.log(shortcut("codewars"));  //  "cdwrs"
  console.log(shortcut("goodbye"));   //  "gdby"
  console.log(shortcut("HELLO"));     //  "HELLO"
  