/**
 15. Bonfire: Falsy Bouncer 

Remove all falsy values from an array.

Falsy values in javascript are false, null, 0, "", undefined, and NaN.

 Code by Henry Arbolaez
 henryarbolaez@gmail.com
 http://www.freecodecamp.com/henryarb92
 */

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  
  //The filter() method creates a new array 
  //with all elements that pass the test implemented by the provided function.
  return arr.filter(function(val){
    return val;
  });
}

console.log(bouncer([7, "ate", "", false, 9]));