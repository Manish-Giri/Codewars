/*
The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

What if the string is empty ? Then the result should be empty object literal { }
*/

function count (string) {  
  // The function code should be herehttps://www.codewars.com/kata/which-are-in
   let result = {};
   string.split('').forEach(key => result.hasOwnProperty(key) ? result[key] += 1 : result[key] = 1);
   return !string ? {} : result;
}
