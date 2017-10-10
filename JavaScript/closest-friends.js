/*
INFO:
Timmy spends a lot of time talking on the phone and he would like to see which friends he talks to the most.

TASK:
Complete the function closestFriends that takes an array history as input. Each element of history is a string in the following format "(000) 000-0000 00:00:00" (where the first part "(000) 000-0000" represents the phone number Timmy talked to and the second "00:00:00" is the call duration (hours : minutes : seconds). Your job is to find the three contacts Timmy talked to the most and return their names in an array sorted by total call durations.
A global variable phonebook is preloaded and contains all the contacts and their phone numbers.

var phonebook = {
     'John' : '(555) 010-3535',
    'Melissa' : '(442) 130-5165',
  'Jack' : '(333) 010-5135'
    //and so on...
};

The input history array will always have at least three different phone numbers.

EXAMPLE:

var history = ["(555) 010-3535 00:13:24", "(442) 130-5165 01:36:26",
"(333) 010-5135 01:38:24"];
closestFriends(history)  // should return ['Jack','Melissa','John'];
*/


var moment = require('moment');
var _ = require('underscore');
function closestFriends(history) {
  let inv = _.invert(phonebook);
  let entries = {}, invEntries = {};
  history.map(e => [inv[e.substr(0,14)], moment.duration(e.substr(15)).asSeconds()]).forEach(e => entries.hasOwnProperty([e[0]]) ? entries[e[0]] += e[1] : entries[e[0]] = e[1]);
  invEntries = _.invert(entries);
  return Object.keys(invEntries).sort((a,b) => b - a).slice(0,3).map(e => invEntries[e]); 
}
