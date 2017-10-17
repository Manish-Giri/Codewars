/*
Write a function that takes a string which has integers inside it separated by spaces, and your task is to convert each integer in the string into an integer and return their sum.
Example

summy("1 2 3")  ==> 6
*/

function summy(stringOfInts){
    return stringOfInts.split(" ").map(e => +e).reduce((a,b) => a + b);
}
