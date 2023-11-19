//Create a function that takes an array of numbers as input 
//and returns a new array where each element's sign is inverted -
//(positive numbers become negative, and negative numbers become positive), without mutating the input array.


function invert(arr){
    return arr.map((num) => -num)
}
console.log(invert([1,2,3,4,5])) // -1, -2, -3, -4, -5
console.log(invert([-5,-7,-10])) // 5, 7, 10

//OR

const invert = arr => arr.map((num) => -num)

console.log(invert([1,2,3,4,5])) // -1, -2, -3, -4, -5
console.log(invert([-5,-7,-10])) // 5, 7, 10