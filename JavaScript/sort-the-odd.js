/*
You have an array of numbers.
Your task is to sort ascending odd numbers but even numbers must be on their places.

Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

Example

sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
*/

function sortArray(array) {
  // Return a sorted array.
   let odds = [], oddPos = [];
  array.forEach((n, i) => {
    if(n % 2 !== 0) {
      odds.push(n);
      oddPos.push(i);
    }
  });
  
  odds.sort((a,b) => (a-b));
  let j = 0;
  oddPos.forEach(n => {
    array[n] = odds[j];
    ++j;
  });
  return array;
}
