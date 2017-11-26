/*
Today's task is to write a function empty(), which take an array as argument. This function should return the same array, but empty.

To make it even more fun, you are not allowed to use any kind of loop (nor recursion)
*/

function empty(array) {
  array.splice(0, array.length);
  return array;
}
