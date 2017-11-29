/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

function sumMix(x){
  return x.map(e => +e).reduce((a,b) => a+b,0);
}
