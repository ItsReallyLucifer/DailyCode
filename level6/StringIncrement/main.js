// Create a function that increments a string by either adding "1" if it doesn't end with a number, 
//or incrementing the numeric part by 1 while preserving the number of leading zeros if it ends with a number.




function incrementString(strng) {
    let nonNumericPart = "";
    let numericPart = "";
    
    //This separates the non-numeric and numeric parts
    let i = strng.length - 1;
    while (i >= 0 && !isNaN(parseInt(strng[i]))) {
      numericPart = strng[i] + numericPart;
      i--;
    }
    nonNumericPart = strng.slice(0, i + 1);
    
    if (numericPart === "") {
      // If no numeric part was found, adds "1" as the numeric part
      return nonNumericPart + "1";
    } else {
      // Increments the numeric part and format it with leading zeros
      const incrementedNumeric = String(Number(numericPart) + 1).padStart(numericPart.length, "0");
      return nonNumericPart + incrementedNumeric;
    }
  }

  console.log(incrementString("foo"));      //  foo1
  console.log(incrementString("foobar23")); //  foobar24