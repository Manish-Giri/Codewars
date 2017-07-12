/*
Unscramble the eggs.

The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.

example:

unscrambleEggs("Beggegeggineggneggeregg"); => Beginner
*/

function unscrambleEggs(word){
  //coding is feggunegg
    return word.replace(/egg/g, '');
}