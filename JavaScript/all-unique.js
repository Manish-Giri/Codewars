/*
Write a program to determine if a string contains all unique characters. Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters.
ALGORITHMSSTRINGS
*/

function hasUniqueChars(str){
  // ...
  return str.length === new Set(str).size;
}
