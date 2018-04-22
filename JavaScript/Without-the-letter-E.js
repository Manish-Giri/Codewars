/*
Is it possible to write a book without the letter 'e' ?
Task

Given String str, return:
How much "e" does it contains (case-insensitive) - return number as String.
If given String doesn't contain any "e", return: "There is no "e"."
If given String is empty, return empty String.
If given String is null/None/nil, return null/None/nil*/

function findE(str){
  return !str ? "" : !(/e/gi).test(str) ? 'There is no "e".' : ''+str.match(/e/gi).length;
}
