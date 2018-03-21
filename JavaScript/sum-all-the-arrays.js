/*
You are given an array of values.

Sum every number value in the array, and any nested arrays (to any depth).

Ignore all other types of values.*/

function arraySum(arr) {
    return flatten(arr).filter(e=>typeof e === "number").reduce((a,b)=>a+b,0);
}

function flatten(items) {
  const flat = [];
  items.forEach(item => {
    if (Array.isArray(item)) {
      flat.push(...flatten(item));
    } else {
      flat.push(item);
    }
  });
  return flat;
}
