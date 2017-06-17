/**
 * Created by manishgiri on 6/17/17.
 */

/**
 Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

 If your language can handle float binaries assume the array won't contain float or doubles.
 */

function arr2bin(arr){
    // show me the code

    /*
    // get filtered array with numbers
    let numbers = arr.filter(char => typeof char === "number");
    // sum up numbers
    let sum = numbers.reduce((a,b) => a+b);
    //find binary rep
    console.log(sum.toString(2));
    return sum.toString(2);*/

    return arr.filter(char => typeof char === "number").reduce((a,b) => a+b, 0).toString(2);
}


arr2bin([1,2]);
arr2bin([1,2,3,4,5]);
arr2bin([1,10,100,1000]);
arr2bin([true,true,false,15]);
