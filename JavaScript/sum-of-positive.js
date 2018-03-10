/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: array may be empty, in this case return 0.
*/

function positiveSum(arr) {
  return arr.length ? arr.filter(e=>e>0).reduce((a,b)=>a+b,0) : 0;
}
