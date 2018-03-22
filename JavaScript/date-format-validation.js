/*
Create a function that will return true if the input is in the following date time format 01-09-2016 01:20 and false if it is not.

This Kata has been inspired by the Regular Expressions chapter from the book Eloquent JavaScript.
*/

function dateChecker(date){
	return /\d{2}-\d{2}-\d{4}\s\d{2}:\d{2}/g.test(date);
}
