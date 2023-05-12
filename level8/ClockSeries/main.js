// write a function which returns the time since midnight in milliseconds.



function past(h, m, s){
    let hours = h * 60 * 60 * 1000;
    let minutes = m * 60 * 1000;
    let seconds = s * 1000;
    
    return hours + minutes + seconds;
  }

console.log(past(2,3,1)) // (2 hours, 3 minutes, 1 second after midnight) = 7381000 milliseconds
