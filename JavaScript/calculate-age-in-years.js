/*
Complete the following function that will return the difference in years (age) for a birthdate, and optionally a "now" date. Both arguments to the function are expected to be Date objects. The returned difference can be either positive or negative.

getAge(new Date('1980/01/01')) === 33 // assuming today's date is 2013/08/01
getAge(new Date('1913/01/01'), new Date('2013/01/01') === 100
getAge(new Date('2008/02/29'), new Date('2032/03/01')) === 24
getAge(new Date('2008/01/01'), new Date('2000/01/01')) === -8

*/

function getAge(birthDate, nowDate) {
  // if no now date - use current date
  if(!nowDate) {
    return Math.abs(birthDate.getFullYear() - new Date().getFullYear()); 
  }
  else {
    let bYear = birthDate.getFullYear();
    let nYear = nowDate.getFullYear();
    let diff = bYear - nYear;
    
    // account for month diff
    if(birthDate.getMonth() > nowDate.getMonth()) {
      diff += 1;
    }
    
    let diffDays = Math.round(Math.abs((birthDate.getTime() - nowDate.getTime())/(24*60*60*1000)));
    // check if leap year
    if(diffDays <= 365 && (bYear % 4 === 0 || nYear % 4 === 0)) {
     return 0;
    }    
    // return negative when first date is after second date
    return nYear > bYear? Math.abs(diff) : - diff;
  }
}
