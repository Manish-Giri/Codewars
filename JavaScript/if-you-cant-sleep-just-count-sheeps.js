/*
If you can't sleep, just count sheeps!!

Task:
Given a number, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep..."

Note:
You will always receive a positive integer.
*/

var countSheep = function (num){
  return new Array(num).fill(0).map((e,i)=>`${i+1} sheep...`).join("");
}
