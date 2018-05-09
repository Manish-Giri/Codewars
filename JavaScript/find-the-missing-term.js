/*
An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

You have to write the function findMissing(list), list will always be at least 3 numbers. The missing term will never be the first or last one.

Example
findMissing([1, 3, 5, 9, 11]) == 7
```

PS: This is a sample question of the facebook engineer challenge on interviewstreet. I found it quite fun to solve on paper using math, derive the algo that way. Have fun!
*/

var findMissing = function (list) {  
  const len = list.length, diff = (list[len-1] - list[0])/len;
  for(let i = 0; i < len-1; i++) {
    if(list[i] + diff !== list[i+1]) {
      return list[i] + diff; 
    }
  }
  return -1;
}
