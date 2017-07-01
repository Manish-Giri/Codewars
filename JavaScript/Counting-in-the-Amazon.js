/**
 * Created by manishgiri on 6/30/17.
 */

/*
 The Arara are an isolated tribe found in the Amazon who count in pairs. For example one to eight is as follows:

 1 = anane
 2 = adak
 3 = adak anane
 4 = adak adak
 5 = adak adak anane
 6 = adak adak adak
 7 = adak adak adak anane
 8 = adak adak adak adak

 Take a given number and return the Arara's equivalent.
 */

function countArara(n) {
    //your code here
    const odd = 'anane';
    const even = 'adak';
    let result = [];
    let i = Math.floor(n / 2);
    const j = n % 2;

    while (i > 0) {
        result.push(even);
        i--;
    }
    if (j > 0) result.push(odd);
    return result.join(' ');
}

console.log(countArara(8));
