/*
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

#Example:

s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(s1, s2) --> 13
*/

function mxdiflg(a1, a2) {
 const d1 = Math.abs(Math.min(...a1.map(e => e.length)) - Math.max(...a2.map(e => e.length)));
 const d2 = Math.abs(Math.max(...a1.map(e => e.length)) - Math.min(...a2.map(e => e.length)));
 return !a1.length || !a2.length ? -1 : d1 > d2 ? d1 : d2;
}
