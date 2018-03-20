/*
Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).

Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
*/

function initializeNames(name){
  const names = name.split(" ");
  return names.length<=2?name:names.map((e,i)=>(i===0||i===names.length-1)?e:(e.charAt(0)+".")).join(" ");
}
