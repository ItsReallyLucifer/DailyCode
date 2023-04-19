// write a function that takes in an array of birds,
// filter out the following birds ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// return a new filtered array.



function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(b => !geese.includes(b));
  };

  let inputBirds = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
  let filtered = gooseFilter(inputBirds)
  console.log(filtered) // [ 'Mallard', 'Hook Bill', 'Crested', 'Blue Swedish' ]



 
  