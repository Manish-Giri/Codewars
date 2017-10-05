/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/
function findLongest(array){
  const lengths = array.map(e => (''+e).length);
  return array[lengths.indexOf(Math.max(...lengths))];
}
