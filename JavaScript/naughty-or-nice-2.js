/*
In this kata, you will write a function that receives an array of string and returns a string that is either 'naughty' or 'nice'. Strings that start with the letters b, f, or k are naughty. Strings that start with the letters g, s, or n are nice. Other strings are neither naughty nor nice.

If there is an equal amount of bad and good actions, return 'naughty'
*/

function whatListAmIOn(actions){
  //your code here
  let naughty = 0, nice = 0;
  actions.forEach(action => (action.startsWith('b') || action.startsWith('f') || action.startsWith('k')) ? 
   naughty += 1 : (action.startsWith('g') || action.startsWith('s') || action.startsWith('n')) ? nice += 1 : 0);
   
  return naughty >= nice ? 'naughty' : 'nice';
}
