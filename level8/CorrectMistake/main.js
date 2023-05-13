// Create a function that corrects the following errors.
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1




function correct(string) {
    return string
        .replace(/5/g, 'S')
        .replace(/0/g, 'O')
        .replace(/1/g, 'I');
}

console.log(correct('I l1ke 5tepping st0nes')); // Output: I lIke Stepping stOnes"
