/*
In order to stop too much communication from happening, your overlords declare that you are no longer allowed to use certain functionality in your code!

Disallowed functionality:

    Strings
    Numbers
    Regular Expressions
    Functions named "Hello", "World", "HelloWorld" or anything similar.
    Object keys named "Hello", "World", "HelloWorld" or anything similar.

Without using the above, output the string "Hello World!" to prove that there is always a way.
*/

var helloWorld = function () {
  var emptyString = new String();
  var l = (new String(null)).split(emptyString).pop();
  var earr = (new String(undefined)).split(emptyString);
  var d = earr.pop();
  var e = earr.pop();
  var oarr = (new String(Object())).split(emptyString);
  oarr.shift(); 
  var o = oarr.shift();
  oarr.shift(); 
  oarr.shift(); 
  oarr.shift();
  oarr.shift(); 
  oarr.shift(); 
  var space = oarr.shift();
  var spaceCode = space.charCodeAt();
  spaceCode++;
  var excl = String.fromCharCode(spaceCode);
  var aarr = Array.name.split(emptyString);
  aarr.shift();
  var r = aarr.shift();
  var w = WeakMap.name.split(emptyString).shift();
  var marray = Math.toString().split(emptyString);
  marray.pop(); 
  var h = marray.pop().toUpperCase();
  return h+e+l+l+o+space+w+o+r+l+d+excl;
}
