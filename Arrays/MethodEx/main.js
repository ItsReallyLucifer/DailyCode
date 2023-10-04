//Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

//That is: removes all dashes, each word after dash becomes uppercased.


function camelize(str) {
    return str.split('-')
              .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
              .join('');
}
  
    console.log(camelize('did-it-work')); // Output: "didItWork"

//___________________________________

  
//Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

//The function should only modify the array. It should not return anything.

function filterRangeInPlace(arr, a, b){
    for (let i = 0; i < arr.length; i++){
        let val = arr[i];
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }  
    }
}
let arr = [5,3,8,1];
filterRangeInPlace(arr, 1, 4);
console.log(arr) // [ 3, 1 ]

//________________________________________

// Sort in decreasing order (greatest val to least)

let array = [5, 2, 1, -10, 8];
 array.sort((a, b) => b - a);

 console.log(array) // [8, 5, 2, 1, -10]

 //_________________________________________

 // You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

 let john = { name: 'John', age: 25 };
 let pete = { name: 'Pete', age: 30 };
 let mary = { name: 'Mary', age: 28 };

 let users = [ john, pete, mary];
 let names = users.map(item => item.name);

 console.log(names) // ['John', 'Pete', 'Mary']