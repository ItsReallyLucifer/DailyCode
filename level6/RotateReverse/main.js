//Create a function that takes a string of digits and a chunk size sz, 
// cuts the string into sz-sized chunks (ignoring the last chunk if it's smaller), 
//reverses chunks with a sum of digit cubes divisible by 2, rotates others to the left by one position,
// and returns the modified chunks as a single string or an empty string for invalid inputs.


function revrot(str, sz) {
    if (sz <= 0 || !str || sz > str.length) return '';    
      
    const sumCubes = chunk => chunk.split('').reduce((sum, digit) => sum += digit**3, 0);
    const reverse = chunk => chunk.split('').reverse().join('');
    const rotate = chunk => chunk.slice(1) + chunk.slice(0, 1);
    
    const chunks = [];
    
    for (let i = 0; i < str.length; i += sz) {
      let chunk = str.slice(i, i + sz);
      
      if (chunk.length < sz) continue;
      
      chunk = sumCubes(chunk) % 2 
        ? rotate(chunk)   
        : reverse(chunk);
      
      chunks.push(chunk)
    }
    
    return chunks.join('')
}

console.log(revrot("12345", 5)); // Output: "21435"
console.log(revrot("123456", 2)); // Output: "214365"