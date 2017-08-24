/*
Given a string of words (x), you need to find the highest scoring word.

Each letter of a word scores points according to it's position in the alphabet. a=1, z=26 and everything inbetween.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lower case and all inputs will be valid.
*/

function high(x){
  let myObj = {};
  for(let i = 1; i <= 26; i++) {
    myObj[String.fromCharCode(i+96)] = i;
  }
  let scores = x.split(' ').map(word => [...word].map(a => myObj[a] || 0).reduce((a,b) => a + b, 0));
  return x.split(' ')[scores.indexOf(Math.max(...scores))];
}
