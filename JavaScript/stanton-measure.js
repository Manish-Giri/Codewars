/*
number of 1s in the array. Let this count be n. The Stanton measure is the number of times that n appears in the array.

eg:-

 The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3 

 because 1 occurs 2 times in the array and 2 occurs 3 times.
*/

function stantonMeasure(arr) {
  let stanton = arr.filter(n => n === 1).length;
  let count = 0;
  arr.forEach(a => a === stanton ? count++: 0)
  return count;
}

// other way

function stantonMeasure(arr) {
  return checkLength(arr, checkLength(arr,1));
}

function checkLength(arr, element) {
  return arr.filter(a => a === element).length;
}
