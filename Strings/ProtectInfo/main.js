//Create a function that replaces all characters in a given input string,
// EXCEPT for the last four, with '#' to mask sensitive information(credit card numbers)
// ensuring the original string remains unchanged if it has four or fewer characters.



function maskify(cc) {
    // Check if the input string is empty or has less than 5 characters
    if (cc.length <= 4) {
      return cc; // Return the original string as it is
    }
  
    // Replace all characters except the last four with '#'
    const maskedChars = cc.slice(0, -4).replace(/./g, '#');
  
    // Concatenate the masked characters with the last four characters
    return maskedChars + cc.slice(-4);
  }

  const sensitiveNum = "12345678"
  const protectedNum = maskify(sensitiveNum)

  console.log(protectedNum) // 5678