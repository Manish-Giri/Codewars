// https://www.codewars.com/kata/find-the-unique-number-1/train/typescript

/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains more than 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique
*/

export function findUniq(arr: Array<number>): number {
  while(true) {
    for(let i = 0; i < arr.length-1; i++) {
      if(arr[i] !== arr[i+1]) {
        return i===0 ? arr[i] === arr[i+2] ? arr[i+1]: arr[i] : i === arr.length - 2 ? arr[i] === arr[i-1] ? arr[i+1]: arr[i]: arr[i+1]; 
      }
    }
  }
}

