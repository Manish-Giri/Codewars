/*An onion array is an array that satisfies the following condition for all values of j and k:

If all of the following are true:

j >= 0
k >= 0
j + k = array.length - 1
j != k
then:

a[j] + a[k] <= 10
Examples:

isOnionArray([1, 2, 19, 4, 5])  // -> true as 1+5 <= 10 and 2+4 <= 10
isOnionArray([1, 2, 19, 4, 10]) // -> false as 1+10 > 10
Write a function named isOnionArray/IsOnionArray/is_onion_array() that returns true if its argument is an onion array and returns false if it is not.
*/

function isOnionArray(arr){
  for(let i = 0; i < Math.floor(arr.length / 2); i++) {
    let j = i;
    let k = arr.length - 1 - i;
    if(!(j >= 0 && k >= 0 && (j + k === arr.length - 1 ) && j !== k)) {
      return false;
    }
    if(arr[j] + arr[k] > 10) {
      return false;
    }
  }
  return true;
}
