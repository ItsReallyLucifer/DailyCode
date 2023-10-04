// Create a function that takes a string, converts the first half to lowercase 
//and the second half to uppercase, rounding up for odd-length strings.




function sillyCase(str){
    //calc the mid index, rounding up for odd str
    const middleIndex = Math.ceil(str.length / 2);

    //split the str into two halves
    const firstHalf = str.slice(0, middleIndex);
    const secondHalf = str.slice(middleIndex);

    //convert the first half to lowercase and second to uppercase

    const result = firstHalf.toLowerCase() + secondHalf.toUpperCase();
    return result
}

console.log(sillyCase("telephone")) // telepHONE
console.log(sillyCase("computer")) // compUTER