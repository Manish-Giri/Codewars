/*
Given an array of ints, return the index such that the sum of the elements to the right of that index equals the sum of the elements to the left of that index. If there is no such index, return -1.

For example:

peak([1,2,3,5,3,2,1]) = 3, because the sum of the elements at indexes 0,1,2 == sum of elements at indexes 4,5,6. We don't sum index 3.
peak([1,12,3,3,6,3,1]) = 2
peak([10,20,30,40]) = -1
*/

function peak(arr){
 let peakFound = true, i = arr.length-2;
  while(peakFound) {
    if(i === 0) {
      return -1;
    }
   
    if(getSum(arr, i+1, arr.length) === getSum(arr, 0, i)) {
      return i;
    }
   i--;
 }
}

function getSum(arr, start, end) {
  return arr.slice(start, end).reduce((a,b) => a + b, 0);
}
