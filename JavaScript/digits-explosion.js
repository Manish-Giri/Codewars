/*
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
Digits.Explode("312") = "333122"
Digits.Explode("102269") = "12222666666999999999"
*/

function explode(s) {
  return s.split("").map(e=>e.repeat(+e)).join("");
}
