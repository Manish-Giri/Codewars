/*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

#Example 1: a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

#Example 2: a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

*/

function inArray(array1,array2){
  //...
  return array1.filter(word => {
    let found = false;
    array2.forEach(outer => {
      if(outer.indexOf(word) > -1) {
        found = true;
      }
    });
    return found;
  }).sort();
}

var a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// var a1 = ["xyz", "live", "strong"];
var a1 = ["live", "strong", "arp"]
console.log(inArray(a1, a2));
