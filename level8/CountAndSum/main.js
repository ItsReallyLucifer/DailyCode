// Given an array of integers
// Return an array, where the first element is the count of positive numbers
// and the second element is the sum of negative numbers.
// 0 us neither positive or negative.

// example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
// (10 total positive numbers, -65 = -11+ -12 + -13 + -14 + -15)



function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}

console.log(countPositivesSumNegatives([1,2,3,4,-10,-5])) // 4, -15