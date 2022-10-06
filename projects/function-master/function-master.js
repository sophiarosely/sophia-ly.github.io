//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//const { split } = require("lodash");

//const { words } = require("lodash");

function objectValues(object) {
return (Object.values(object));
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
  // //should take an object and return all its keys in a string each separated by a space 
function keysToString(object) {
    //this takes all the keys from this object and puts it into an array
  var array = Object.keys(object);
  // ==> [key, key]
  //now, we have to turn the array into strings 
  var newStrings = array.join(" ");
//returning newString
    return newStrings;

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

 //taking an object and returning its string values in a string separated by a space
function valuesToString(object) {
    //getting all of the object's values
  var array = Object.values(object); 
  // ==> now values are in an array through variable array e.g. [key, key, key];
  for (var i = 0; i < array.length; i++) {
    //if-else chain to make sure the keys are a string
    if (array[i] === "string") {
      return array[i];
    }
  }
  //joining the strings from the array, separated by a space
  var strings = array[i].join(" ");
  //returning the strings
  return strings; 
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection) === true) {
        return "array";
    } else if (typeof collection === "object") {
        return "object";
    }
}
//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
 var strings = string.charAt(0).toUpperCase() + string.slice(1);
 return strings;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //splits word in to an array => ["sophia", "ly"]
    words = string.split(" ");
    //looping through array
    for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
//now join the words from the array 
var newString = words.join(" ");
return newString;
}





//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
 var message = "Welcome" + " " + capitalizeWord(object.name) + "!";
 return message; 
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    //name is a species 
var message = capitalizeWord(object.name)+ " " + "is a" + " " + capitalizeWord(object.species);
return message;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*function maybeNoises(object) {
    //if the object has a noises array, return them separated as a string with a space
if (object.hasOwnProperty("noises") && Array.isAnArray(object.noises) {
    return object.noises.toString(" ");
} else  {
    return "there are no noises";
}
}
*/

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
   //takes a string of words => "Sophia is awesome!"
//creating an array, so we can loop through the words 
//visually => ["Sophia", "is", "awesome!"]
var splitArray = string.split();
//if word is found in the string, then return true 
for(var i = 0; i < splitArray.length; i++) {
if (splitArray[i].includes(word) === true) {
  return true; 
} else {
  return false; 
}

}
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
        //adding the name to an object friend's array 
        // visually ==> object = {friends: []}; 
        //accessing the object's name property to retrieve the friend's array
        var friendsArray = object.friends; 
        //pushing the name into the friend's array
        var newName = friendsArray.push(name);
        //returning the object with the updated friend's array 
        return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*creating a function called isFriend with two parameters: name(property) and friend (object) */
function isFriend(name, object) {
         //takes a name and returns true if the name is found in object
        //visually: => {friends: ["Sophia"]};
        //using a for-loop to "look" or loop through the object 
          if (object.friends.includes(name) === true) {
            return "true"; 
          } else {
            return "false";
          }
        }

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}