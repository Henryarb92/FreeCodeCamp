/**
  8. Bonfire: Return Largest Numbers in Array

Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.


 Code by Henry Arbolaez
 henryarbolaez@gmail.com
 http://www.freecodecamp.com/henryarb92
 */


/*function largestOfFour(arr) {
  // You can do this!
  var array = [0,0,0,0];
  
for(var i = 0;i < arr.length;i++){
  for(var k = 0;k < arr[i].length;k++){
    if(array[i] < arr[i][k]){
    array[i] = arr[i][k];
    }
  }
}
    return array;
}*/


function largestOfFour(arr){
  var biggest = [];
    
   for (var i = 0; i < arr.length; i++) {
   biggest.push(Math.max.apply(null, arr[i]));  
   // console.log( biggest);
  }
  return biggest;
}

console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));