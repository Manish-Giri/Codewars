/*
String Templates - Bug Fixing #5

Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects! 
*/

export class Kata {
    public static buildString(...template:string[]):string {
        return `I like ${template.join(', ')}!`
    }
}

