/**
 12. Bonfire: Chunky Monkey

Write a function that splits an array (first argument)
into groups the length of size (second argument) and
returns them as a multidimensional array.

 Code by Henry Arbolaez
 henryarbolaez@gmail.com
 http://www.freecodecamp.com/henryarb92
 */


function chunk(arr, size) {
  // Break it up.
  var array= [];
  for(var i = 0; i < arr.length; i){
    array.push(arr.slice(i,i+=size));
  }
  return array;
}

console.log(chunk(["a", "b", "c", "d"], 2));