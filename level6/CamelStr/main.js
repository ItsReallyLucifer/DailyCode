//Create a function that converts a string with dash or underscore delimited words into camel case,
// ensuring the first word retains its capitalization, while capitalizing -
// the first letter of all subsequent words and returning the resulting camel case string. 




function toCamelCase(str) {
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
  }

  console.log(toCamelCase('the-dragon-warrior')); // theDragonWarrior
  console.log(toCamelCase('The-Dragon-Warrior')); // TheDragonWarrior


  //  // Use the `replace` method with a regular expression to find all occurrences
    // of a dash or underscore followed by a character, and replace them with
    // the uppercase version of that character.
    // The `(_, c)` function is a callback that takes the matched character (c)
    // and converts it to uppercase, effectively capitalizing the next word.