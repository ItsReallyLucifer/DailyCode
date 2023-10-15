// Create a function that takes a list of Animal objects, 
// creates a new sorted array without mutating the original input array,
// sorting first by the number of legs and then by the name of each animal.


const compareAnimals = (a, b) =>
  a.numberOfLegs - b.numberOfLegs || a.name.localeCompare(b.name)
  
const sortAnimal = animals =>
  animals ? animals.slice().sort(compareAnimals) : null

  

  var animals = [
    { name: "Dog", numberOfLegs: 4 },
    { name: "Cat", numberOfLegs: 4 },
    { name: "Snake", numberOfLegs: 0 },
    { name: "Bird", numberOfLegs: 2 },
    { name: "Pig", numberOfLegs: 4 },
    { name: "Human", numberOfLegs: 2 },
  ];
  
  var sortedAnimals = sortAnimal(animals);
  console.log("Original Animals Array:");
  console.log(animals);
  console.log("Sorted Animals Array:");
  console.log(sortedAnimals);