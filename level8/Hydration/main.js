// write a function that calculates litres of water per hour-
// that you should drink.
// calculate 0.5 liters per hour
// take in a parameter of hours and return the liters.



function litres(time){
    let intake = Math.floor(time * 0.5)
    return intake
}

console.log(litres(3)) // 1.5 -> rounded down to 1 litre