/*
Given an array of integers, and a target integer, return the largest integer from the array that is less than or equal to the target.

If there is no number that is less than or equal to the target number then return undefined.

The array of integers may be empty, but will always be an array.
*/

function priceIsRight(numbers, target) {
  if(!numbers.length || numbers.every(e => e > target)) {
   return undefined;
  }
  let diff = Number.MAX_SAFE_INTEGER, num, curr;
  for(let i = 0; i < numbers.length; i++) {
    curr = numbers[i];
    if(target-curr >= 0 && target-curr < diff) {
      diff = target-curr;
      num = curr;
    }
  }
  return num;
}
