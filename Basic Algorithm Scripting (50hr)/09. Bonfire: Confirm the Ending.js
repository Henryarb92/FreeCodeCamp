/**
  9. Bonfire: Confirm the Ending

Check if a string (first argument) ends
with the given target string (second argument).

 Code by Henry Arbolaez
 henryarbolaez@gmail.com
 http://www.freecodecamp.com/henryarb92
 */

function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  		// str.substr( will return the the word in the giving string )
  // return target == str.substr((str.length - 1) - (target.length - 1));
  
  // Only work with ECMAScript 6 
  return target.endsWith(target) == str.endsWith(target);
}

end("Bastian", "n");
