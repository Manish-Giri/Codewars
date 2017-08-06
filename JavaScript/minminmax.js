/*
Given an unsorted array of integers, find the smallest number in the array, the largest number in the array, and the smallest number between the two array bounds that is not in the array.

For instance, given the array [-1, 4, 5, -23, 24], the smallest number is -23, the largest number is 24, and the smallest number between the array bounds is -22. You may assume the input is well-formed.

You solution should return an array [smallest, minimumAbsent, largest]

The smallest integer should be the integer from the array with the lowest value.

The largest integer should be the integer from the array with the highest value.

The minimumAbsent is the smallest number between the largest and the smallest number that is not in the array.
*/

// Note -tests are buggy

function minMinMax(array) {
  // solution goes here!
  let sorted = array.slice().sort((a,b) => a-b);
  let min = sorted[0];
  let max = sorted[sorted.length-1];
  let smallestAbsent = sorted[0];
  for(let i = 1; i < sorted.length; i++) {
    if(sorted[i] !== (sorted[i-1] + 1)) {
     smallestAbsent = sorted[i-1] + 1;
     break;
    }  

  }
  return [min, smallestAbsent, max];
}
