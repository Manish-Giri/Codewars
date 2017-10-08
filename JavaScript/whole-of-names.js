/*
Task

Create a function hallOfFame(players) which return an ordered list of sub-arrays of players with same score.
Input :

    list of players
    each player is a 2-items array of the form [name, score]

Output :

    list of 3 best ranks
    each rank is an array of the form [score, name1 (,name2, (name3,...) )] with names of each player with same score.
    ranks should be sorted from best score (==higher) to "worst" (lower).

eg:

hallOfFame(["Aya",5], ["Ben",9], ["Clo",5], ["Dan",7]) // -> [ [9,"Ben"], [7, "Dan"], [5, "Aya", "Clo"] ]

    when more than 1 player have the same score, they should be sorted alphabeticaly ([42, "Xin","Yang","Zhu"] not [42, "Yang", "Zhu", "Xin"])

Important

In case of equality in first places, next ones will be moved. It means :

    If 2 players share the 1st rank, next one(s) move to 3rd rank.
    If more than 2 players share the 1st rank other players can't figure on the podium.
    If there is only one "1st player" but more than one "2d players" then "3rd" rank is inoccupied.

In these cases "empty" ranks should figure in returned array as empty sub-arrays : [ [123,"Xin","Yang","Zhu"], [], [] ]
Examples :

hallOfFame(["Aya",9], ["Ben",9], ["Clo",9], ["Dan",8.99])
  // -> [ [9, "Aya", "Ben", "Clo"], [], [] ] : 3 players on 1st place no 2nd nor 3rd rank allowed)

hallOfFame(["Aya",9], ["Ben",9], ["Clo",8], ["Dan",7.99])
  // -> [ [9,"Aya","Ben"], [], [8,"Clo"]  ] : 2 players on 1st place -> "2nd" score goes to 3rd rank

hallOfFame(["Aya",9], ["Ben",8], ["Clo",8], ["Dan",7.99])
  // -> [ [9,"Aya"], [8,"Ben","Clo"], []  ] : 1 "1st player", 2 "2nd players" -> no place for the 3rd

hallOfFame(["Aya",9], ["Ben",8], ["Clo",7], ["Dan",6.99])
  // -> [ [9,"Aya"], [8,"Ben"], [7,"Clo"]  ] :  each first places occupied by only 1 player

Don't give up, stay in the Top !

*/

// Refactored

function hallOfFame( players ){
  let dupPlayers =  players.slice();
  dupPlayers.sort((a,b) => a[1] > b[1] ? -1 : a[1] < b[1] ? 1 : a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0);
  let results = {}
  dupPlayers.forEach((e, i) => {
    if(!results.hasOwnProperty(e[1])) {
      let idxs = findIndexesOfSameRank(dupPlayers, e[1])
      results[e[1]] = idxs;
    }
  });
  let ranksFromObj = Object.keys(results).sort((b,a) => a - b);
  let resultArr = [];
  for(let i = 0; i < 3; i++) {
    let key = ranksFromObj[i];
    let idxs = results[key];
    let tempArr = [+key];
    idxs.forEach(i => tempArr.push(dupPlayers[i][0]));
    if(i === 0) {
      resultArr.push(tempArr);
    }
    else if (i === 1) {
       let l = resultArr[0].slice(1).length;
       if(l === 2) {
         resultArr.push([], tempArr);
         break;
       }
       else if(l >= 3) {
          resultArr.push([], []);
          break;
        } 
       else {
         resultArr.push(tempArr);
       }
    }
    else if(i === 2) {      
      if(resultArr[0].slice(1).length + resultArr[1].slice(1).length >= 3) {
        resultArr.push([]);
        break;
      }
      else {
        resultArr.push(tempArr);
      } 
    }
  }
  return resultArr;
}
function findIndexesOfSameRank(arr, score) {
  let indexes = [];
  arr.forEach((e,i) => {
     if(e[1] === score) {
      indexes.push(i);
    }
  });
  return indexes;
}

// Original

function hallOfFame( players ){
  let dupPlayers =  players.slice();
  dupPlayers.sort((a,b) => {
    if(a[1] > b [1]) {
      return -1;
    }
    else if(a[1] < b[1]) {
      return 1;
    }
    else {
      return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
    }
  });
  
  let results = {}
  
  
  dupPlayers.forEach((e, i) => {
    if(!results.hasOwnProperty(e[1])) {
      let idxs = findIndexesOfSameRank(dupPlayers, e[1])
      results[e[1]] = idxs;
    }
  });
  
  
 // console.log(results);
  let ranksFromObj = Object.keys(results).sort((b,a) => a - b);
  
  let resultArr = [];
  
  let countInEachArr = 0;
 
  for(let i = 0; i < 3; i++) {
    let key = ranksFromObj[i];
    
    let idxs = results[key];
    
    let rankLengths = idxs.length;
    
    if(i === 0) {
      let tempArr = [+key];
      idxs.forEach(i => tempArr.push(dupPlayers[i][0]));
      resultArr.push(tempArr);
    }
    
    else if (i === 1) {
       let tempArr = [+key];
       idxs.forEach(i => tempArr.push(dupPlayers[i][0]));
       
       // if first element already has 2 players, this becomes the third element, with an empty array in between, and break
       if(resultArr[0].slice(1).length === 2) {
         resultArr.push([]);
         resultArr.push(tempArr);
         break;
       }
       
      else if(resultArr[0].slice(1).length >= 3) {
        // push [] for 2nd rank
        resultArr.push([])
        // and for 3rd rank
        resultArr.push([]);
        // and break
        break;
      } 
       
       else {
         resultArr.push(tempArr);
       }
    }
    
    else if(i === 2) {
      
      if(resultArr[0].slice(1).length + resultArr[1].slice(1).length >= 3) {
        resultArr.push([]);
        break;
      }
      
      else {
        let tempArr = [+key];
        idxs.forEach(i => tempArr.push(dupPlayers[i][0]));
        
        resultArr.push(tempArr);

      }
      
      
    }

  }
  return resultArr;
}



function findIndexesOfSameRank(arr, score) {
  let indexes = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i][1] === score) {
      indexes.push(i);
    }
  }
  return indexes;
}

