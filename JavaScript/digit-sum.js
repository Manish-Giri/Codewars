// So, your task is to sum up all the digits in string, possibly multiple times, till you get a one digit result. You should then return it as a string. The input will be always valid.

function digitSum (str) {
  //Your code goes here
  return str.length === 1 ? str : digitSum(findString(str));
}

function findString(str) {
 return str.split('').map(n => parseInt(n)).reduce((a,b) => a +b, 0).toString();
}
