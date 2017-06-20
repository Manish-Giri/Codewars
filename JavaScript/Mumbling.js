/**
 * Created by manishgiri on 6/19/17.
 */

/*
 This time no story, no theory. The examples below show you how to write function accum:
 */
function accum(s) {
    // your code

    return s.split('').map((letter, index) => {
        return index === 0 ? letter.toUpperCase() : letter.toUpperCase() + letter.toLowerCase().repeat(index);
    }).join('-');

}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
