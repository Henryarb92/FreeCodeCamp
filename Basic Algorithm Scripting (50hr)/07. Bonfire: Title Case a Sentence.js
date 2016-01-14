/**
	7. Bonfire: Title Case a Sentence

Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.


 Code by Henry Arbolaez
 henryarbolaez@gmail.com
 http://www.freecodecamp.com/henryarb92
 */

function titleCase(str) {
  var elSplit = str.split(" ");
  
  for(var i = 0; i < elSplit.length; i++){
       elSplit[i] = elSplit[i].charAt(0).toUpperCase() + elSplit[i].substring(1).toLowerCase();
  }
  return elSplit.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
