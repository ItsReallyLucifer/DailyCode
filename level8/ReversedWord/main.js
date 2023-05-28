// Create a function that reverses all words passed into it.
// example: Did it work -> returns work it did



function reverseWords(str){
return str.split(' ').reverse().join(' ');
}

console.log(reverseWords('Did it work'))