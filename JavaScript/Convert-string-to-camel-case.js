/**
 * Created by manishgiri on 6/25/17.
 */

/*
 Complete the method/function so that it converts dash/underscore delimited words into camel casing.
 The first word within the output should be capitalized only if the original word was capitalized.
 */

function toCamelCase(str){
    let letters = str.split('');

    // iterate through the array
    // - if first word is uppercase, it should be uppercased
    // - replace dash and underscore
    // - replace next letter with uppercase

    // TODO: Do it with regex
    
    for(let i = 0; i < letters.length; i++) {
        if(letters[i] === '_' || letters[i] === '-') {
            letters[i+1] = letters[i+1].toUpperCase();
            letters[i] = '';
        }
    }

    return letters.join('');
}

console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("The-Stealth-Warrior"));
