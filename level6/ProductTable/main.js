//Create a function that generates an N×N multiplication table, 
//with the size specified as the input parameter, and return the table as a 2D array.
// example: 4 = [1, 2, 3, 4] || [2, 4, 6, 8] || [3, 6, 9, 12]



function multiplicationTable(size) {
    var result = [];
  
    for (var i = 0; i < size; i++) {
      result[i] = [];
      for(var j = 0; j < size; j++) {
        result[i][j] = (i + 1) * (j + 1);
      }
    }
    
    return result
  }

  console.log(multiplicationTable(3)) //[1, 2, 3] || [2, 4, 6] || [3, 6, 9]