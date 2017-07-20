function remove(s){
  //coding and coding....
  let chars = s.split('');
  for(let i = 0; i < chars.length;i++) {
    if(chars[i] === '!') { 
      if(i !== chars.length -1) {
         chars[i] = '';
      }
    }
  }
  if(chars[chars.length -1] !== '!') {
   // append !
     chars[chars.length] = '!';
   }
  return chars.join('');
  
}
