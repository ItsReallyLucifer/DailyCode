// Create a function that works out just how many bottles of duty free whiskey you would have to buy 
// such that the savings over the normal high street price would effectively cover the cost of your holiday.
//example: bottle = $10 & discount = 10%, savings per bottle = $1.
// holiday cost = $500 .. then answer should be 500


function dutyFree(normPrice, discount, hol){
    let result = (Math.floor(hol / normPrice / discount * 100))
    return result
  }

  console.log(dutyFree(25, 15, 35))
