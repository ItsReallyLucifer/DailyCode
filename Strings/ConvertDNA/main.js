// Create a function that translates a given DNA string -
// into RNA by replacing all occurrences of 'T' with 'U', 

function DNAtoRNA(dna){
    let conversion = dna.split('T').join('U');
    return conversion
}

console.log(DNAtoRNA('GCAT')) // GCAU