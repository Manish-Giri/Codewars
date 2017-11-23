/*
Implement a function to calculate the sum of the numerical values in a nested list. For example :

sumNested([1, [2, [3, [4]]]]) => 10
*/

const sumNested = arr => {
  let flat = [];
  let flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flat.push(arg);
    } else {
      for (let a in arg) {
        flatten(arg[a]);
      }
    }
  };
  arr.forEach(e => flatten(e));
  return flat.reduce((a,b) => a + b,0);
};
