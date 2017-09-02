/*
If we write out the digits of "60" as English words we get "sixzero"; the number of letters in "sixzero" is seven. The number of letters in "seven" is five. The number of letters in "five" is four. The number of letters in "four" is four: we have reached a stable equilibrium.

Note: for integers larger than 9, write out the names of each digit in a single word (instead of the proper name of the number in English). For example, write 12 as "onetwo" (instead of twelve), and 999 as "nineninenine" (instead of nine hundred and ninety-nine).

For any integer between 0 and 999, return an array showing the path from that integer to a stable equilibrium:

e.g. numbersOfLetters(60) --> ["sixzero", "seven", "five", "four"]
e.g. numbersOfLetters(1) --> ["one", "three", "five", "four"]
*/

function numbersOfLetters(integer) {
  // your code here
  let result = [];
  let currentNum = integer;  
  while (true) {
    let joinedWord = lookUpWords(currentNum).join('');
    currentNum = joinedWord.length;
    result.push(joinedWord);
    if(joinedWord === "four") {
      break;
    }
  }
  return result;
}

function lookUpWords(...numbers) {
  const map = new Map();
    map.set(1, "one");
    map.set(2, "two");
    map.set(3, "three");
    map.set(4, "four");
    map.set(5, "five");
    map.set(6, "six");
    map.set(7, "seven");
    map.set(8, "eight");
    map.set(9, "nine");
    map.set(0, "zero");
  return (numbers + '').split('').map(d => map.get(+d));
}
