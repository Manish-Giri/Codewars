/*
In Russia regular bus tickets usually consist of 6 digits. The ticket is called lucky when the sum of the first three digits equals to the sum of the last three digits. Write a function to find out whether the ticket is lucky or not. Return true if so, otherwise return false. Consider that input is always a string. Watch examples below.

isLucky('123321') => 1+2+3 = 3+2+1 => true // The ticket is lucky
isLucky('12341234') => false // Only six-digit numbers allowed :(
isLucky('12a21a') => false // Letters are not allowed :(
isLucky('100200') => false // :(
isLucky('22') => false // :(
isLucky('abcdef') => false // :(
*/

function isLucky(ticket) {
 let ticketNums = ticket.split('');
 if(ticketNums.length !== 6 || ticketNums.some(t => typeof parseInt(t) !== "number")) {
    return false;
  }
  let firstSum = 0, secondSum = 0;
  ticketNums.forEach((digit, index) => index <= 2 ? firstSum += parseInt(digit): secondSum += parseInt(digit));
  return firstSum === secondSum;
}


function isLucky(ticket) {
  let ticketNums = ticket.split('');
  return (ticketNums.length !== 6 || ticketNums.some(t => typeof parseInt(t) !== "number")) ? false : ticketNums.slice(0,3).map(t => +t).reduce((a,b) => a + b) === ticketNums.slice(3).map(t => +t).reduce((a,b) => a + b);
}
