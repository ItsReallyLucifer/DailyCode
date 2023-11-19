// Create a function that determines if a given name starts with the letter "R" or "r"
// and returns a response indicating whether the person plays banjo or not, 
// name is a valid string.


function playsBanjo(name){
    if(name.toUpperCase()[0] === 'R'){
        return name + " does play banjo"
    }else{
        return name + " does not play banjo"
    }
}

console.log(playsBanjo('Robert')) // Robert does play banjo
console.log(playsBanjo('robert')) // robert does play banjo
console.log(playsBanjo('John')) // John doe not play banjo


// OR

// const playsBanjo = name => name[0].toUpperCase() === "R" ? name + " does play banjo" : name + " does not play banjo"

// console.log(playsBanjo('Robert')) // Robert does play banjo
// console.log(playsBanjo('robert')) // robert does play banjo
// console.log(playsBanjo('John')) // John does not play banjo