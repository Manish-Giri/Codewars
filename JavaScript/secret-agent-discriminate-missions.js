/*
You're a secret agent. And not just any secret agent, you're the best in the business! Everyone wants you to take on missions because you guarantee 100% success rate. Whatever the job is, you can complete it!

Luckily for the world, you have great morals. You make sure that the missions you accept are altruistic for mankind. As a result you refuse any mission that is immoral, any mission whose target is a good person, any mission from an evil government, or any mission with a secret plan.

Since you're a very busy agent, you've decided to create a function that will be accessible to the world and it will determine through advanced state-of-the-art AI whether or not to accept the mission. Program newMission that takes two parameters: an action and a target. This program will determine if a mission is acceptable and return true, or not acceptable and return false. A mission that is not acceptable will fall into any one of these categories:

Immoral
An immoral mission is any mission that requires that you "kill", "murder", or "torture" a target (your action). This isn't what you signed up for and you won't stand for it.

Targetting Good People
As an advanced secret agent with programming prowess, you have been actively mantaining a database of goodPeople and badPeople since you started the bussiness. Think of it as your naughty and nice list. These arrays are a list of string names and available to your program globally.

Issued By An Evil Government
You made this function available to the world so anyone can call on you at anytime. Unfortunately this leaves you open to accepting missions from an evil government. Somehow you'll have to determine if the evil government is the one calling your method...

Part of a Secret Plan
Secret plans are bad for everyone. Long ago you realize they are just bad business. You'll be able to tell if a mission is part of a secret plan if the person mentioned anything about a "secret plan" just before calling your program...

Good luck!
*/

function newMission(action, target) { 
  return !((action.includes("kill") || action.includes("murder") || action.includes("torture")) || goodPeople.includes(target) || (/EvilGovernment/gi.test(new Error('Failed').stack.toString())) || (newMission.caller.toString().includes("secret"))); 
}
