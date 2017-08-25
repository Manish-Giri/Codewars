/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
*/

var moveZeros = function (arr) {
  // TODO: Program me
   return arr.filter(a => a !== 0).concat(arr.filter(a => a === 0));
}
