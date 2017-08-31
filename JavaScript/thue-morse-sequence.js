/*
Given a positive integer n, return first n dgits of Thue-Morse sequence, as a string (see examples).

Thue-Morse sequence is a binary sequence with 0 as the first element. The rest of the sequece is obtained by adding the Boolean (binary) complement of a group obtained so far.

For example:

0
01
0110
01101001
and so on...
alt

Ex.:

thueMorse(1); //'0'
thueMorse(2); //'01'
thueMorse(5); //'01101'
thueMorse(10): //'0110100110'
You don't need to test if n is valid - it will always be a positive integer.
n will be between 1 and 10000
*/

function thueMorse(n){
  //101010 is the answer to everything... but not to this kata
  let bit = '0';
  while(bit.length < n) {
    bit += generateXORBits(bit);
  }
  return bit.slice(0,n);
}


function generateXORBits(bit) {
  let comp = '';
  for(let i = 0; i < bit.length; i++) {
    comp += bit[i] === '0' ? '1': '0';
  }
  return comp
}
