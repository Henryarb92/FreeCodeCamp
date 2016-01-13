/**
 2. Bonfire: Truncate a string

Truncate a string (first argument) if it is longer 
than the given maximum string length (second argument). 
Return the truncated string with a "..." ending.

Note that the three dots at the end add to the string length.
If the num is less than or equal to 3, 
then the length of the three dots is not added to the string length.

 Code by Henry Arbolaez
 henryarbolaez@gmail.com
 http://www.freecodecamp.com/henryarb92
 */

function truncate(str, num) {
  if (str.length <= num){
    return str;
  }
  if (num <= 3){
    return str.substr(0,num) + "...";
  }
  return str.substr(0,num-3) + "...";
}


truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);