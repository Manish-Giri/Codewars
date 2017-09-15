/*
Given any number of arrays each sorted in ascending order, find the nth smallest number of all their elements.

All the arguments except the last will be arrays, the last argument is n.

nthSmallest([1,5], [2], [4,8,9], 4) // returns 5 because it's the 4th smallest value
Be mindful of performance.
*/

function nthSmallest(/* ...arrays, n */) {
  let args = [...arguments];
  let arrs = args.slice(0, args.length - 1);
  let n = args[args.length - 1];
  return [].concat(...arrs).sort((a,b) => a - b)[n-1];
}
