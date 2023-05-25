// Create a function that takes in two strings.
// return the string in the form of "short-long-short"




function solution(a, b){
    return (a.length > b.length) ? b + a + b : a + b + a;
  }

  console.log(solution('hello','goodbye'))
