/*
Complete the method so that it does the following:
Removes any duplicate query string parameters from the url
Removes any query string parameters specified within the 2nd argument (optional array)
Examples:
stripUrlParams('www.codewars.com?a=1&b=2&a=2') // returns 'www.codewars.com?a=1&b=2'
stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) // returns 'www.codewars.com?a=1'
stripUrlParams('www.codewars.com', ['b']) // returns 'www.codewars.com
*/

function stripUrlParams(url, paramsToStrip=[]){
  if(!url.includes("?")) {
    return url;
  }
  const pos = url.indexOf("?")+1;
  let queryString = url.slice(pos);
  let queryParams = queryString.split("&");
  let map = {}, revised='';
  queryParams.forEach(e => !map.hasOwnProperty(e[0]) && !paramsToStrip.includes(e[0]) ? map[e[0]] = e[2]: 0 );
  Object.keys(map).forEach(e => revised += `${e}=${map[e]}&`);
  revised = revised.replace(/&$/g, '');
  return url.slice(0, pos) + revised;
}

// clever solution
function stripUrlParams(url, paramsToStrip){
  return url.replace(/&?([^?=]+)=.+?/g, function(m, p1, qPos) {
    return url.indexOf(p1 + '=') < qPos || (paramsToStrip||[]).indexOf(p1) > -1 ? "": m;
   });
}
