// Create a function that translates a given DNA string -
// into RNA by replacing all occurrences of 'T' with 'U', 
// DNA sequence = ACTG ||| RNA = ACUG


function DNAtoRNA(str){
    conversion = str.replace('T', 'U')
    return conversion
}

console.log(DNAtoRNA('GCAT'))

// OR

// const DNAtoRNA = str => str.replace("T", "U")

// console.log(DNAtoRNA('GCAT'))

