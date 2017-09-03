/*
Implement a function that normalizes out of range array indexes (converts them to 'in range' indexes) by making them repeatedly 'loop' around the array. The function should then return the value at that index. Indexes that are not out of range should be handled normally and indexes to empty arrays should return undefined.

For positive numbers that are out of range, they loop around starting at the beginning, so

normIndex(arr, arr.length);     //Returns first element
normIndex(arr, arr.length + 1); //Returns second element
normIndex(arr, arr.length + 2); //Returns third element
//And so on...
normIndex(arr, arr.length * 2); //Returns first element
For negative numbers, they loop starting from the end, so

normIndex(arr, -1);    //Returns last element
normIndex(arr, -2);    //Returns second to last element
normIndex(arr, -3);    //Returns third to last element
//And so on...
normIndex(arr, -arr.length); //Returns first element
*/

function normIndex(array, index){

 return index >= 0 ? index < array.length ? array[index] : array[index % array.length] : Math.abs(index % array.length) === 0 ? array[0]: array[array.length - Math.abs(index % array.length)];
}


// first attempt
/*
function normIndex(array, index){
  
  // case 1 - index is positive
  if(index >= 0) {
    // if index not out of bounds
    if(index < array.length) {
      return array[index];
    }
    else {
      // index out of bounds
      return array[index % array.length];
    }
  }
  
  else {
    // case 2 - index is negative    
    console.log(index);
    let pos = index % array.length;
    console.log(pos);
    console.log(array.length - Math.abs(pos));
    
    if(Math.abs(pos) === 0) {
      return array[pos];
    }
    return array[array.length - Math.abs(index % array.length)];
  }
}
*/

// var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var array = [78, 93, 6, 22, 89, 11, 2, 10, 87, 71, 23];

//console.log(normIndex(array, Math.round(Math.random() * 40 + 10)));
console.log(normIndex(array, -11));
