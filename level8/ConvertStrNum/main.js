// write a function that takes in a a kids age as a string
// convert the string in to a Number
// * the program should account for ages 1-9 only



function getAge(inputString){
    return Number(inputString[0])
}

console.log(getAge("5 years old")) // 5