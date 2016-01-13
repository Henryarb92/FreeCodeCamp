/**
 2. Bonfire: Repeat a string repeat a string

Repeat a given string (first argument) n times (second argument). 
Return an empty string if n is a negative number.

 Code by Henry Arbolaez
 henryarbolaez@gmail.com
 http://www.freecodecamp.com/henryarb92
 */

function repeat(str, num) {
  // repeat after me
  var string = [];
  
  for(var i = 0 ; i < num; i++){
  	// will push the string to the arrray string
  	// as many times as argument num is
    string.push(str);
   }
  // string is array containing the the string passed
  // with the join method it will join the string inside the array and output as an array
  return string.join("");

  /*if(num > 0){
  	// repeat method, just repeat the string( mulitply the string)
    return str.repeat(num);
  }else{
    return "";
  }*/
}

console.log(repeat("abc", 3));