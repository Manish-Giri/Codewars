//Move the first letter of each word to the end of it, then add 'ay' to the end of the word.

function pigIt(str){
    //Code here
    return str.split(' ').map(word => word.slice(1) + word.charAt(0) + "ay").join(' ');
}
