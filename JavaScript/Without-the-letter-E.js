/**
 * Created by manishgiri on 6/25/17.
 */

/*
 How much "e" does it contains (case-insensitive) - return number as String.
 If given String doesn't contain any "e", return: There is no "e".
 If given String is empty, return empty String.
 If given String is null, return null
 */

function find_E(str){
    if(str == "") {
        return "";
    }
    if(str == null) {
        return null;
    }

   let eCount =  str.split('').filter(letter => letter.toLowerCase() === "e").length;

    console.log(eCount);
    return eCount ? eCount.toString() : 'There is no "e".';
}


find_E("English")
