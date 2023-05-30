// Create a function that takes in a string and -
// returns an array with the length of each word added to each element
// example: apple ban => ['apple 5', 'ban 3']


function addLength(str) {
    return str.split(' ').map(word => word + ' ' + word.length)
  }


console.log(addLength('apple'))