// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

reverse = function(array) {
  // TODO: program me!;
   return array.map((e,i) => array[array.length-1-i]); 
}
