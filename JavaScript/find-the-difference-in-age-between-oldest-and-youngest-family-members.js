/*
At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].
*/

function differenceInAges(ages){
  // console.log(age);
  let min = Math.min(...ages);
  let max = Math.max(...ages);
  let diff = max - min;
  return [min, max, diff];  
}
