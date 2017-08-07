/*
Your task is to find the first element of an array that is not consecutive.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non consecutive number.

If the whole array is consecutive then return null

The array will always have at least 2 elements and all the elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
*/

function firstNonConsecutive (arr) {
  let numbers = arr.slice().sort((a,b) => a-b);
  for(let i = 1; i < numbers.length; i++) {
    if(numbers[i] !== (numbers[i-1]) + 1) {
     return numbers[i];
    }
  }
  return null;
}
