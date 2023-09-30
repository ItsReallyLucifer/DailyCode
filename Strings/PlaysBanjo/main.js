// Create a function that determines if a given name starts with the letter "R" or "r"
// and returns a response indicating whether the person plays banjo or not, 
// name is a valid string.


function areYouPlayingBanjo(name) {
    if(name[0] === 'R' || name[0] === 'r'){
        return name + ' plays banjo'
    }else{
        return name + ' does not play banjo'
    }
}

console.log(areYouPlayingBanjo('Robert')) // Robert plays banjo
console.log(areYouPlayingBanjo('Tyler')) // Tyler does not play banjo