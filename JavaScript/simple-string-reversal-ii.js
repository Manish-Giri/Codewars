/*
In this Kata, you will be given a string and two indexes. Your task is to reverse the portion of that string between those two indexes inclusive.

solve("codewars",1,5) = "cawedors" -- elements at index 1 to 5 inclusive are "odewa". So we reverse them.
solve("cODEWArs", 1,5) = "cAWEDOrs" -- to help visualize.

Input will be lowercase and uppercase letters only.

More examples in the test cases!
*/

function solve(st,a,b){
 return `${st.slice(0,a)}${[...st.slice(a,b+1)].reverse().join('')}${st.slice(b+1)}`;
}
