/*
Given two arrays of strings a1 and a2 return an array consisting of the elements of a2 sorted based on the elements in a1.

Example 1

var a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino'];
var a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus'];

returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
Example 2

var a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin'];
var a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo'];

returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']
Each element in the array will start with a unique letter and there will only be a single match for each element.
*/

function sortArray(a1, a2) {
  let order = a1.map(a => a[0]);
  let result = [];
  a2.forEach(word => {
    let pos = order.indexOf(word[0]);
    result[pos] = word;
  })
  return result;

}
