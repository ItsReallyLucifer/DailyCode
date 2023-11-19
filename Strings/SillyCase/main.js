// Create a function that takes a string, converts the first half to lowercase 
// and the second half to uppercase, rounding up for odd-length strings.


function sillyCase(str){
    const midIndex = Math.ceil(str.length / 2)
    const firstHalf = str.slice(0, midIndex);
    const secondHalf = str.slice(midIndex);
    const result = firstHalf.toLowerCase() + secondHalf.toUpperCase();
    return result
}

console.log(sillyCase('america')) // amerICA
console.log(sillyCase('computer')) // compUTER
