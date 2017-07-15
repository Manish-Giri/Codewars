function isAlt(word) {
  // happy codinggg
  let vowels = ['a','e','i','o','u'];
  let letters = word.split('');
  for(let i = 0; i < letters.length - 1; i++) {
    if(vowels.includes(letters[i])) {
        if(vowels.includes(letters[i+1])) {
           return false;
       }
    }
    else {
      if(!vowels.includes(letters[i+1])) {
        return false;
        }
     }
   }
    return true;
}
