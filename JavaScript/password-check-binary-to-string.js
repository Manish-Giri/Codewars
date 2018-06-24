/*
Password Check - Binary to String
A wealthy client has forgotten the password to his business website, but he has a list of possible passwords. His previous developer has left a file on the server with the name password.txt. You open the file and realize it's in binary format.

Write a script that takes an array of possible passwords and a string of binary representing the possible password. Convert the binary to a string and compare to the password array. If the password is found, return the password string, else return false;
*/

function decodePass( passArr, bin ){
  const str = bin.split(" ").reduce((a,b) => a + String.fromCharCode(parseInt(b,2)),'');
  return passArr.find(e => e === str) || false;
}
