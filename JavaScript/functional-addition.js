/*
Create a function add(n)/Add(n) which returns a function that always adds n to any number

var addOne = add(1);
addOne(3); // 4

var addThree = add(3);
addThree(3); // 6
*/

function add(n) {
  return a => a + n;
}
