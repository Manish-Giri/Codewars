// https://www.codewars.com/kata/consonant-please/train/javascript

function sortLetters(arr) {
  const merged = arr.reduce((a,b) => a+b.join(""),'').replace(/[\d]/g,'').toUpperCase();
  return [merged.match(/[aeiou]/gi) || [], merged.match(/[^aeiou\d]/gi) || []] ;
}
