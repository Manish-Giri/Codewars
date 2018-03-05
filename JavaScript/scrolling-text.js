/*
Let's create some scrolling text!

Your task here is to write the function scrollingText, which takes a string, and returns an array:

scrollingText("codewars") should return

["CODEWARS",
"ODEWARSC",
"DEWARSCO",
"EWARSCOD",
"WARSCODE",
"ARSCODEW"
"RSCODEWA",
"SCODEWAR"]
*/

function scrollingText(text){
  let result = [text.toUpperCase()];
  let i = 1, end = text.length - 1;
  while(i <= end) {
    result.push((text.slice(i) + text.slice(0,i)).toUpperCase());
    i++;
  }
  return result;
}
