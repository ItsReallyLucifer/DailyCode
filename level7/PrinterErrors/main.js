// Create a function that takes a string representing colors used by a printer, 
// identifying errors by counting characters outside the range 'a' to 'm',
//  returning the error rate as a string in the format 'number of errors/total length' without simplification






function printerError(s) {
    const errorCount = s.split('').filter(char => char > 'm').length;
    return `${errorCount}/${s.length}`;
  }
  
  // Test cases
  const s1 = "aaabbbbhaijjjm";
  console.log(printerError(s1)); //  "0/14"
  
  const s2 = "aaaxbbbbyyhwawiwjjjwwm";
  console.log(printerError(s2)); //  "8/22"
  