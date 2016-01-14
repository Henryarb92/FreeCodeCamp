/**
	6. Bonfire: Find the Longest Word in a String 

Return the length of the longest word in the provided sentence.
Your response should be a number.

 Code by Henry Arbolaez
 henryarbolaez@gmail.com
 http://www.freecodecamp.com/henryarb92
 */

function findLongestWord(str) {
  var longest = str.split(" "), 
      last = 0;
  
  for(var i = 0;i < longest.length; i++){    
       if(longest[i].length > last){
         last = longest[i].length;
       }
    }
  return last;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));