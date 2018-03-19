/*
Recreation of Project Euler problem #6

Find the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and the square of their sum.

Example
For example, when n = 10:

The square of the sum of the numbers is:

(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)2 = 552 = 3025

The sum of the squares of the numbers is:

12 + 22 + 32 + 42 + 52 + 62 + 72 + 82 + 92 + 102 = 385

Hence the difference between square of the sum of the first ten natural numbers and the sum of the squares of those numbes is: 3025 - 385 = 2640
*/

function differenceOfSquares(n){
  const fillArr = new Array(n).fill(0).map((e,i)=>i+1);
  return Math.abs(Math.pow(fillArr.reduce((a,b)=>a+b,0),2)-(fillArr.map(e=>Math.pow(e,2)).reduce((a,b)=>a+b,0)))   
}
