/*
A non-empty array a of length n is called an array of all possiblities if it contains all numbers between [0,a.length-1].Write a method named isAllPossibilities that accepts an integer array and returns true if the array is an array of all possiblities,else false.

Example:

a=[1,2,0,3]
a.length-1=3 
a includes [0,3] ,hence the function should return true
*/

function isAllPossibilities(x){
 return (!x.length || (x.length > 1 && x.every(e => e === 0))) ? false : range(0, x.length).every(e => x.includes(e));
}
const range = (start, end) => new Array(end - start).fill().map((d, i) => i + start);
