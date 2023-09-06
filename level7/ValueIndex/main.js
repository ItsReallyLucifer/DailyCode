// Create a function that sorts an array of integer numbers by the product of the value and the index of the positions.


function sortByValueAndIndex(array) {
    return array.slice().sort((a, b) => (a * (array.indexOf(a) + 1)) - (b * (array.indexOf(b) + 1)));
  }


  console.log(sortByValueAndIndex([23, 2, 3, 4, 5])); //  [2, 3, 4, 23, 5]
  console.log(sortByValueAndIndex([9, 5, 1, 4, 3])); //   [1, 9, 5, 3, 4]
  