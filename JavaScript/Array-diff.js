/**
 * Created by manishgiri on 6/17/17.
 */

/**
 * Your goal in this kata is to implement an difference function, which subtracts one list from another.

 It should remove all values from list a, which are present in list b.

 */

function array_diff(a, b) {
    return a.filter(element => !b.includes(element));

}


console.log(array_diff([1,2],[1]));
