// Create a function that solves the problem below
// " a young man asks as a compensation only 1 grain of rice for the first square,
// 2 grains for the second, 4 for the third, 8 for the fourth and so on, always doubling the previous."
// given an amount of grains, you need to return up to which square of the chessboard one should count in order to get at least as many.



function squaresNeeded(grains){
    return Math.ceil(Math.log2(grains+1))
  }

  console.log(squaresNeeded(100))