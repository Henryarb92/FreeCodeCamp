/**
 13. Bonfire: Slasher Flick

Return the remaining elements of an array after chopping off n elements from the head.

The head meaning the beginning of the array, or the zeroth index

 Code by Henry Arbolaez
 henryarbolaez@gmail.com
 http://www.freecodecamp.com/henryarb92
 */

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.slice(howMany);
}

console.log(slasher([1, 2, 3], 2));
