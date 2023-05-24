// Create a function that checks if a string has the same amount of 'X's and 'O's
// Must return a boolean and be case insensitive.
// The string can contain any char.
// example: 'xxo' = false --- 'xoxo' = true


function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
  }

  console.log(XO('xoxoxoxo')) // true
  console.log(XO('xoxxxo')) // false


  // or ALT solution

  function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}