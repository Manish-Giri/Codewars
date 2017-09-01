/*
Reverse and invert all integer values in a given list.

Python:

reverse_invert([1,12,'a',3.4,87,99.9,-42,50,5.6]) = [-1,-21,-78,24,-5]
Ignore all other types than integer.
*/

function reverseInvert(array){
  //your code here
  return array.filter(n => typeof n === 'number' && n % 1 === 0).map(a => parseInt(rev(a)));
}

function rev(n) {
 let reduced = n.toString().split('').reverse().join('');
 return n >= 0 ? '-' + reduced : reduced;
}
