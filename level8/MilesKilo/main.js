// Create a function that will display the number of kilometers per liter(output) -
// based on the number of miles per imperial gallon (input)
// 1 Gallon = 4.54609 litres
// 1 mile = 1.609344 kilometers
//(converts milers per gallon to kilometers per liter)



function converter(mpg) {
    return Math.round(mpg * 35.400604353821375031) / 100;
  }

  console.log(converter(50))