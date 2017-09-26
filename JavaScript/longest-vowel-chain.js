// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only and no spaces, return the length of the longest vowel substring.

const vowels = ['a', 'e', 'i', 'o', 'u'];
function solve(s){
  let combined = '', current = '';
  let isNextVowel = false;
   for(let i = 0; i < s.length; i++) {
     if(vowels.includes(s[i])) {
       if(!isNextVowel) {
         current = s[i];
         isNextVowel = false;
       }
       if(i !== s.length - 1) {
         if(vowels.includes(s[i+1])) {
           isNextVowel = true;
           current += s[i+1];
         }
         else {
           isNextVowel = false;
         }
       }  
     }
     if(current.length > combined.length) {
       combined = current;
     }
   }
 return combined.length;
}
