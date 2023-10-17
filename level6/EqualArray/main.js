// Write a function that takes an array of integers and returns 
// the lowest index at which the sum of elements to the left equals the sum of elements to the right, 
// or -1 if no such index exists


function findEvenIndex(arr) {
    for (let index = 0; index < arr.length; index++) {
        // Calculate the sum of elements on the left side of the index.
        const leftSum = arr.slice(0, index).reduce((acc, val) => acc + val, 0);

        // Calculate the sum of elements on the right side of the index.
        const rightSum = arr.slice(index + 1).reduce((acc, val) => acc + val, 0);

        // Check if the sums are equal.
        if (leftSum === rightSum) {
            return index;
        }
    }

    // If no such index is found, return -1.
    return -1;
}

console.log(findEvenIndex([1,2,3,4,3,2,1])) // index - 3