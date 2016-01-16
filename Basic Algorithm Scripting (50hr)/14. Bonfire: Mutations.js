/**
 14. Bonfire: Mutations

Return true if the string in the first element of the array 
contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], 
should return true because all of the letters 
in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] 
should return false because the string "hello" does not contain a "y".

 Code by Henry Arbolaez
 henryarbolaez@gmail.com
 http://www.freecodecamp.com/henryarb92
 */


function mutation(arr) {
  // Lowercase the arr first letter
 var arr1 = arr[0].toLowerCase();
 var arr2 = arr[1].toLowerCase();

  for(var i = 0; i < arr2.length ;i++){
    // if arr1 does not contain arr2 return false
    if (arr1.indexOf(arr2.charAt(i)) == -1) {
      return false;
    }   
   }
  return true;
}

console.log(mutation(["hello", "hey"]));