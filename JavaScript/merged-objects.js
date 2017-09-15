/*
In this kata, you will be given array of Objects a=[{obj1},{obj2},...]. You will return merged Objects. Incase a key exists in one or more Objects and since you can not have duplicate values for a single key in your final set, you keep the most recent value for that key as show in the example below.

var a={1:'1',2:'2',3:'3'},
    b={3:'4',5:'6',6:'7',7:'8'},
    c={5:'9',8:'9',6:'12',23:'35'}
    o=[a,b,c];
var objConcat=(o)=> {
  return a.concat(b).concat(c) ?
//should return the following
// { '1': '1','2': '2','3': '4','5': '9','6': '12','7': '8','8': '9','23':'35' }
//key 3 exist in both a and b, so in the final result above we keep {3:'4'} because that is most recent seen
// key 5 exist in both b and c, so we keep {5:'9'} from c
// key 6 exist in both b and c so we keep {6:'12'} from c
};
*/

function objConcat(arr){
  return Object.assign({}, ...arr);
}
