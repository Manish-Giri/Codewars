/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
*/

function sumStrings(a,b) { 
 let firstNum = a.split('').reverse().join('');
 let secondNum = b.split('').reverse().join('');
 let result = [];
 let largerNum = a.length >= b.length ? a : b;
 let carryOver = 0;
 for(let i = 0; i < largerNum.length; i++) {
   let d1 = firstNum[i] || 0;
   let d2 = secondNum[i] || 0;
   let c = carryOver + (+d1) + (+d2);
   let temp = c % 10;
   result[i] = temp;
   carryOver = c > 9 ? 1 : 0;
 }
 if(carryOver) {
   result.push(carryOver);
   return result.reverse().join('');
 }
 let ans = result.reverse().join('');
 return ans.startsWith('0') ? ans.replace(/^0*/g,'') : ans;
}
