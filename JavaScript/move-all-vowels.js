/*
Given a string as input, move all of its vowel to the end of the string.

Example input: day Example output: dya

Example input: apple Example output: pplae

Note: All input string are of small letters, and the order of the vowels at the end should be the same as they were before.
*/

function moveVowel(input) {
 const vowels = ['a', 'e', 'i', 'o', 'u'];
 return input.replace(/[aeiou]/g, '') + input.split('').filter(e => vowels.includes(e)).join('');
}
