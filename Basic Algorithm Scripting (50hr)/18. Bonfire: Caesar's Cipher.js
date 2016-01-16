/**
 18. Bonfire: Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, 
also known as a shift cipher. In a shift cipher the meanings of the letters 
are shifted by some set amount.

A common modern use is the ROT13 cipher, 
where the values of the letters are shifted by 13 places. 
Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character 
(i.e. spaces, punctuation), but do pass them on.


 Code by Henry Arbolaez
 henryarbolaez@gmail.com
 http://www.freecodecamp.com/henryarb92
 */


function rot13(str) { // LBH QVQ VG!

  str = str.toUpperCase();
  var splitStr = str.split("");
  var alpha = [];
  var finalString = [];

  /*======================================
  =            Array Creation            =
  ======================================*/

  // Generate Alphabet letters from 1 to 26
  for (var first = 65; first < 91; first++){
  // push the first alphabet to the >> alpha array
    alpha.push(String.fromCharCode(first));
  }
  // Generate Another set of alpbahet letter
  // with the number of places you want to decode the letter 65 + (13)
  for (var second = 65; second < (65 + (13)); second++){
    // push the second alphabet to the >> alpha array
     alpha.push(String.fromCharCode(second));
  }

/*=====  End of Array Creation  ======*/


  for(var i = 0; i < splitStr.length; i++){    
    // Checking if aplha[] does NOT contains char from the splitStr
    // it will return it as it
    // indexOf Returns -1 if the value is not found.
    if(alpha.indexOf(splitStr[i]) === -1 ){// for >>>UNKOWN SYMBOLS<<<
      // push the str to finalString and return
      finalString.push(splitStr[i]);
    }else{ // if the string passed is in the alpha it will
      // iterate over the alpha[]
      for(var k = 0; k < alpha.length; k++){
        // check if the splitStr and alpha in the same index match 
        if(splitStr[i] === alpha[k]){
          // when it find the match will add 13 palces to the current alpha index
          // and push that letter to the finalString Array
          finalString.push(alpha[k + (13)]);
        }
      }
    }
  }
  return finalString.join("");
}
// Change the inputs below to test
console.log(rot13("SERR YBIR?"));