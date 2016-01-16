/**
 16. Bonfire: Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.

 Code by Henry Arbolaez
 henryarbolaez@gmail.com
 http://www.freecodecamp.com/henryarb92
 */


// function destroyer(arr) {
//   // Remove all the values
//   var args = Array.prototype.slice.call(arguments);

//   for(var i =0;i < arr.length;i++){
//     for(var j =0; j < args.length; j++){
//       if(arr[i] == args[j]){
//         delete arr[i];
//       }
//     }
//   }
//   //arr return empty fiels, so filter remove those falsy values
//   return arr.filter(function(val){
//     return val;
//   });
  
// }

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));



function destroyer(arr) {
  // Remove all the values
  
  //Get full array list
  //To convert arguments into an array
  var args = Array.prototype.slice.call(arguments);
  
  return arr.filter(function(val){
    //returns the index array if present, or -1 if not.
      var ar = args.indexOf(val) != -1;
      return !ar;
      
  });
 
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
