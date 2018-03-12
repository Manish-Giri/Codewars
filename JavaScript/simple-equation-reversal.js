/*
Given a mathematical equation that has *,+,-,/, reverse it as follows:

solve("100*b/y") = "y/b*100"
solve("a+b-c/d*30") = "30*d/c-b+a"
*/

function solve(eq){
    let ops = eq.match(/\W/g).reverse();
    return eq.split(/\W/).reverse().reduce((a,b,i)=>a+(ops[i-1]||'')+b);
}
