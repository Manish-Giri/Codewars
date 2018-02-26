/*
A consonant is any letter of the alphabet except a, e, i ,o, u. The consonant substrings in the word "zodiacs" are z, d, cs. Assuming a = 1, b = 2 ... z = 26, the values of these substrings are 26 ,4, 22 because z = 26,d = 4,cs=3+19=22. The maximum value of these substrings is 26. Therefore, solve("zodiacs") = 26.

Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings.
*/

function solve(s) {
  console.log(s);
  let obj = {};
  const nums = new Array(26).fill(0).map((e,i) => i+1);
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  nums.forEach(num => obj[String.fromCharCode(`${97+num-1}`)] = num);
  // console.log(obj);  
  let maxSum = 0, currSum = 0;
  let n = 0, prevVowel = false;
   s.split('').forEach((e, i) => {

        if (!vowels.includes(e)) {
            currSum += obj[e];
            prevVowel = false;
        } else {
            prevVowel = true;
            if(maxSum < currSum) {
                maxSum = currSum;
            }
            currSum = 0;
        }
    });
  return maxSum;
};

