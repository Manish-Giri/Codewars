/*
#Input: string containing a single positive valid hex number without # symbol. Ex: 'FF'.

#Output: converted decimal number, 255

#Restriction: code length <= 26 characters

#Trivia: you have time to type only 26 characters before the daily angry zombie mob will break into your house.
*/

weirdHexToDec=x=>+`0x${x}`
