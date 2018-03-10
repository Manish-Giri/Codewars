/*
Given a credit card number we can determine who the issuer/vendor is with a few basic knowns.

Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.

| Card Type  | Begins With          | Number Length |
|------------|----------------------|---------------|
| AMEX       | 34 or 37             | 15            |
| Discover   | 6011                 | 16            |
| Mastercard | 51, 52, 53, 54 or 55 | 16            |
| VISA       | 4                    | 13 or 16      |
Language specific notes
Python
To be PEP8 compliant please use the function name get_issuer() instead of getIssuer().

C/C++
In C/C++ the input is a numeric string. The return value in C is not freed.

Examples
getIssuer(4111111111111111) == "VISA"
getIssuer(4111111111111) == "VISA"
getIssuer(4012888888881881) == "VISA"
getIssuer(378282246310005) == "AMEX"
getIssuer(6011111111111117) == "Discover"
getIssuer(5105105105105100) == "Mastercard"
getIssuer(5105105105105106) == "Mastercard"
getIssuer(9111111111111111) == "Unknown"
*/

function getIssuer(number) {
  if(/^6011\d+/g.test(number) && (''+number).length === 16)
    return "Discover";
  if(/^3\d+/g.test(number) && (''+number).length === 15)
    return "AMEX";
  if(/^5[1-5]\d+/g.test(number) && (''+number).length === 16)
    return "Mastercard";
  if(/^4\d+/g.test(number) && ((''+number).length === 16 || (''+number).length === 13))
    return "VISA";
  else 
    return "Unknown";
}
