/*
Given an array of numbers, determine whether the sum of all of the numbers is odd or even.

Give your answer in string format as 'odd' or 'even'.

If the input array is empty consider it as: [0] (array with a zero).

*/

function oddOrEven(array) {
   //enter code here
   return !array.length || (array.reduce((a,b) => a + b, 0) % 2 === 0)  ? "even" : "odd";
}
