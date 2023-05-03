//Write a function that removes the spaces from the string, then return the resultant string.


function noSpace(str){
    return str.split(' ').join('');
}

console.log(noSpace("this is a test")) // thisisatest