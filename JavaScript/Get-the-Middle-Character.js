/**
 * Created by manishgiri on 6/17/17.
 */

/*
 You are going to be given a word. Your job is to return the middle character of the word.
 If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
 */

function getMiddle(s) {
    //Code goes here!
  /*  var middle = '';
    if(s.length % 2 !== 0) {
        middle = s[parseInt(s.length / 2)];
    }
    else {
        let mid = s.length / 2;
        middle = s[mid-1] + s[mid];
    }
    return middle;*/

    // ternary op
    return s.length % 2 !== 0 ? s[parseInt(s.length / 2)] : s[(s.length /2) - 1] + s[s.length / 2];
}


console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
