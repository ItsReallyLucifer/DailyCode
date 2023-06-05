// Given the a list of unique numbers sorted in ascending order, 
//return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).
// example: 1, 3, 5 =  1, 2, 3, 4, 5


function pipeFix(numbers){
    var first = numbers[0];
    var last = numbers[numbers.length-1];
    
    var arr = [];
    for(var i = first; i <= last; i++) {
      arr.push(i);
    }
    return arr;
  }
    const input = [1,2,4,7]
    const output = pipeFix(input)

    console.log(output)