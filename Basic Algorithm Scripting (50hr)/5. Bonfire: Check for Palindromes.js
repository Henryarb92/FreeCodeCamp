/**
 5. Bonfire: Check for Palindromes

Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's 
spelled the same way both forward and backward,
ignoring punctuation, case, and spacing.

 Code by Henry Arbolaez
 henryarbolaez@gmail.com
 http://www.freecodecamp.com/henryarb92
 */

function palindrome(str) {
  // Good luck!
  var normal = str.replace(/[\W_]/g, '').toLowerCase();
  var reverse = normal.split("").reverse().join("");
  return normal === reverse;
}

console.log(palindrome("race car"));