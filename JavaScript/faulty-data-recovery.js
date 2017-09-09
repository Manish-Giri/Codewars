/*
The problem

A common way to prevent data loss in case of hard disk failures is to use an array of disks that keep the information redundant. If a disk fails, the information can be recovered based on the information contained in the other disks.

The simplest example to reason about this is by having two disks with exactly the same information mirrored on each other. While this solves the problem, is not very efficient.

  diskA = [0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0]
  diskB = [0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0]
Example1. Two identical disks. If one fails, it can be rebuilt by cloning the surviving disk.

A better method is to use XOR for parity checks. A simple use of XOR to create parity on an array of disks is to use several disks of the same size and reserve one of them to hold parity information.

Let's start with a three disk array: A, B and C. We'll store our data on A and B, and we'll use C to store parity information.

  diskA = [0,0,0,1,1,1,1,0]
  diskB = [0,1,0,0,1,0,1,0]
Example 2. Same data as before, split in two arrays.

This is how we calculate the values for C: For each position in the array, we count how many ones there are. If it's an odd amount of them, we set 1 on C. If it's an even amount, we put zero.

For instance, A[0]==0 and B[0]==0, so we set C[0]=0, but A[1]==0 and B[1]==1, so we set C[1]=1.

  diskC = [0,1,0,1,0,1,0,0]
Example 3. Parity array calculated from values from diskA and diskB

If any of the disks is damaged, it can be rebuilt by recalculating the parity information.

You are not restricted to 3 arrays, you can have as many arrays as you like.

  diskA = [0,0,0,1]
  diskB = [1,1,1,0]
  diskC = [0,1,0,0]
  diskD = [1,0,1,0]
  diskE = [0,0,0,1]
Example 4. The same data distributed across disks A-D and diskE used for parity

The challenge

In this Kata, you are going to write two functions calculateParity(cluster) and recoverDisk(cluster).

calculateParity()

The function calcualateParity(cluster) receives a an array of n arrays of zeros and ones, all of the same length l. It must calculate the parity of the cluster and return an array of n+1 arrays of length l (with the parity array appended at the end).

e.g. Input:

[[0,0,0,1],
 [1,1,0,0]]
Output

[[0,0,0,1],
 [1,1,0,0],
 [1,1,0,1]]
recoverDisk()

The function recoverDisk(cluster) recieves an array of n arrays of zeros and ones (each of the same length) which are using XOR parity. One (and only one) of the arrays on the cluster is damaged. Damaged positions are marked with null. The function must repair the array return the fixed cluster.

e.g.

Input

[[0,0,0,1],
 [null,1,0,0],
 [1,1,0,1]]
Output

[[0,0,0,1],
 [1,1,0,0],
 [1,1,0,1]]

*/


function calculateParity(cluster) {
  let parity = [];
  let arrayLen = cluster[0].length;
  for(let i = 0 ; i < arrayLen; i++) {
    let xOR = null;
    for(let j = 1; j < cluster.length; j++) {
     if(j === 1) {
        xOR = cluster[j][i] ^ cluster[j-1][i];
      }
      else {
        xOR = xOR ^ cluster[j][i]; 
      }
    }
    parity[i] = xOR;
  }
  cluster.push(parity);
  return cluster;
}

function recoverDisk(cluster) {
 let defectiveRow = cluster.findIndex(arr => arr.some(e => e == null));
 if(defectiveRow === cluster.length - 1) {
   let inputCluster = cluster.filter((row, index) => index !== cluster.length - 1 ? row : false);
   let newCluster = calculateParity(inputCluster);
   let newParity = newCluster[newCluster.length - 1];
   for(let x = 0; x < newParity.length; x++) {
     cluster[defectiveRow][x] = newParity[x];
   }
   return cluster;
 }
 
 
 let arrayLen = cluster[0].length;
 let recovered = [];
 let counts = countOnes(cluster, defectiveRow);
 let parityRow = cluster[cluster.length - 1];
 
 for(let i = 0; i < parityRow.length; i++) {
   if(parityRow[i] === 0) {
     if(counts[i] === 0) {
       recovered[i] = 0;
     }
     else {
       if(counts[i] % 2 === 0) {
         recovered[i] = 0;
       }
       else {
         recovered[i] = 1;
       }
     }
   }
   else if(parityRow[i] === 1) {
     if(counts[i] === 0) {
       recovered[i] = 1;
     }
     
     else {
       if(counts[i] % 2 === 0) {
         recovered[i] = 1;
       }
       else {
         recovered[i] = 0;
       }
     }
   }
   
 }

 for(let x = 0; x < recovered.length; x++) {
   cluster[defectiveRow][x] = recovered[x];
 }
 return cluster;
}

function countOnes(arr, bad) {
  let counts = [];
  for(let i = 0 ; i < arr[0].length; i++) {
    let ones = 0;
    for(let j = 0; j < arr.length - 1; j++) {
      if(j === bad) {
        continue;
      }
      if(arr[j][i] === 1) {
        ++ones;
      }
      
    }
  counts[i] = ones;  
    
  }
  return counts;
}

