// Create a function that takes in a string -
//  & counts the total number of lowercase letters
// example: "abcDE" => 3



function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length
}

console.log(lowercaseCount('Did I ask'))