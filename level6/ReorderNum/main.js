// Write a function called deleteNth that takes an array (arr)
//and a number n, and it returns a new array containing each element
// of (arr) at most n times, without changing their order.



function deleteNth(arr, n) {
    const result = [];
    const countMap = {};
  
    for (const num of arr) {
      countMap[num] = (countMap[num] || 0) + 1;
  
      if (countMap[num] <= n) {
        result.push(num);
      }
    }
  
    return result;
  }
  
  const inputList = [1, 2, 3, 1, 2, 1, 2, 3];
  const limit = 2;
  const result = deleteNth(inputList, limit);
  console.log(result); // Output: [1, 2, 3, 1, 2, 3]