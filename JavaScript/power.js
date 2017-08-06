/*
The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).
Note: Math.pow and some others Math functions are disabled on final tests.
*/


function numberToPower(number, power){
  // Code here
 let result = 1;
 for(let i = 1; i<= power; i++) {
   result *= number;
 }
 return result;
}
