//Write a function that converts a given string into title case, 
//capitalizing the first letter of each word while considering 
//a list of provided minor words (which should remain in lowercase).



function titleCase(title, minorWords) {
    if (!minorWords) {
      return title.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    }
  
    const titleArray = title.toLowerCase().split(' ');
    const minorWordsArray = minorWords.toLowerCase().split(' ');
  
    titleArray[0] = titleArray[0].charAt(0).toUpperCase() + titleArray[0].slice(1);
  
    for (let i = 1; i < titleArray.length; i++) {
      if (!minorWordsArray.includes(titleArray[i])) {
        titleArray[i] = titleArray[i].charAt(0).toUpperCase() + titleArray[i].slice(1);
      }
    }
  
    return titleArray.join(' ');
  }

  console.log(titleCase('Guide to lake fishing')) // Guide To Lake Fishing
  console.log(titleCase('Guide to lake fishing','to lake fishing')) // Guide to lake fishing