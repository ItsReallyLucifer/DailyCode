// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format.
//  IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.



function isValidIP(str) {
    const octets = str.split('.');
    if (octets.length !== 4) {
      return false;
    }
    for (let i = 0; i < octets.length; i++) {
      const octet = octets[i];
      if (!isValidOctet(octet)) {
        return false;
      }
    }
    return true;
  }
  
  function isValidOctet(octet) {
    if (octet.length === 0 || octet.length > 3 || isNaN(octet)) {
      return false;
    }
    
    const number = Number(octet);
    return number >= 0 && number <= 255 && !(octet.length > 1 && octet[0] === '0');
  }
  
  console.log(isValidIP('1.2.3.4')); // Output: true
  console.log(isValidIP('123.45.67.89')); // Output: true
  console.log(isValidIP('1.2.3')); // Output: false
  console.log(isValidIP('01.02.03.04')); // Output: false
  