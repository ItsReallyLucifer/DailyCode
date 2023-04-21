// write a function that calculates whether your test score (yourPoints) 
//is higher than the average of the class's test scores 
//(including your own) and return true if it is, or false if it's not.






function betterThanAverage(classPoints, yourPoints) {
    const totalPoints = classPoints.reduce((acc, current) => acc + current, yourPoints);
    const average = totalPoints / (classPoints.length + 1);
    
    return yourPoints > average;
  }

  const classPoints = [85, 90, 92, 88, 78];
  const yourPoints = 88;
  const result = betterThanAverage(classPoints, yourPoints);
  console.log(result); // true