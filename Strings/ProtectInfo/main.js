//Create a function that replaces all characters in a given input string,-
// EXCEPT for the last four, with '#' to mask sensitive information(credit card numbers)
// ensuring the original string remains unchanged if it has four or fewer characters.



function maskify(cc) {
    if (cc.length <= 4) {
      return cc;
    }
    const maskedChars = '#'.repeat(cc.length - 4) + cc.slice(-4);
    return maskedChars
  }

  const sensitiveNum = "12345678"
  const protectedNum = maskify(sensitiveNum)

  console.log(protectedNum) // ####5678

  
// OR


// const maskify = cc => cc.length <= 4 ? cc : '#'.repeat(cc.length - 4) + cc.slice(-4)

// const sensitiveNum = "12345678"
// const protectedNum = maskify(sensitiveNum)

// console.log(protectedNum) // ####5678