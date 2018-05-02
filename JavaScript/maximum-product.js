// https://www.codewars.com/kata/maximum-product/train/javascript

function adjacentElementsProduct(array) {
  let max = -9999999;
  for(let i = 0; i < array.length-1; i++) {
      const product = array[i] * array[i+1];
      if(product > max) {
        max = product;
      }
  }
  return max;
}
