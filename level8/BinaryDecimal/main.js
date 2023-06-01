// Create a function that converts binary number (given as a string) -
// and converts it to a number


function binToDec(bin){
    let convert = parseInt(bin,2)
    return convert
}

console.log(binToDec('110100')) // 52
console.log(binToDec('1010001')) // 81