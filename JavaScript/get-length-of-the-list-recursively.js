// Write funcion lenR which returns the length of a given list. Try no to cheat and provide recursive solution.

function lenR(x) {
 if ( typeof x === "string") x = [...x];
 if (!x.length) {
  return 0;
 }
 x.pop();
 return 1 + lenR(x);
}
