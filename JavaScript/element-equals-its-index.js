/*
Given a sorted array of distinct integers, write a function indexEqualsValue that returns the lowest index for which array[index] == index.
Return -1 if there is no such index.

Your algorithm should be very performant.

[input] array of integers
[output] integer

Examples:
input: [-8,0,2,5]
output: 2 # since array[2] == 2

input: [-1,0,3,6]
output: -1 # since no index in array satisfies array[index] == index
Random Tests Constraints:
Array length: 200 000
Amount of tests: 1 000

Time limit: 150 ms
*/

function indexEqualsValue(a) {
  return idxSearch(a, 0, a.length-1);
}

function idxSearch(arr, low, high) {
  if(low > high) {
    return -1;
  }
  let mid = Math.floor((high + low)/2);
  if(arr[mid] === mid) {
    let leftVal = idxSearch(arr, low, mid-1);
    return (leftVal !== -1 && leftVal < mid) ? leftVal: mid;
  }
  if(arr[mid] > mid) {
    return idxSearch(arr, low, mid-1);
  }
  else {
    return idxSearch(arr, mid+1, high);
  }
  return -1;
}
