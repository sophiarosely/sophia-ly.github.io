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
    //getting all of the object's values and turning it into an array. 
  var array = Object.values(object); 
  // ==> now, we're going to filter the strings only and it's going to result in an array with the strings only
  var array2 = array.filter(item => typeof item === 'string');
  //joining the strings from the array, separated by a space
  var strings = array2.join(" ");
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

function maybeNoises(object) {
    //if the object has a noises array, return them separated as a string with a space
    if (object.hasOwnProperty("noises") && object.noises.length > 0) {
      return object.noises.join(" ");
      //if it has no property "noises" = "there are no noises"
  } else if (object.hasOwnProperty("noises") ===  false) {
      return "there are no noises";
  }
  //if it's an empty array = "there are no noises"
    else if (object.noises.length === 0) {
    return "there are no noises";
    }
  }



//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
   //takes a string of words => "Sophia is awesome!"
//creating an array, so we can loop through the words 
//visually => ["Sophia", "is", "awesome!"]
var splitArray = string.split();
//creating a for-loop to look through array of strings
for(var i = 0; i < splitArray.length; i++) {
  ////if word is found in the array, then return true 
if (splitArray[i].includes(word) === true) {
  return true; 
  //if word is not found in the array, then false
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
//Should take a name and an object and return true if <name> is a friend of <object> and false otherwise

//test cases: does the object even have a friends property? => return false

/*creating a function called isFriend with two parameters: name(property) and friend (object) */

function isFriend(name, object) {
  //if object has the property friends and includes the name => return true
  //must have name b/c test case => what if the friends list does not exist?
  if (object.hasOwnProperty("friends") && object.friends.includes(name)) {
    return true; 
    //if the friends list doesn't have the name that is inputted, then it will return false 
  } else {
    return false; 
  }
  }
  

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*nonFriends() : Should take a name and a list of people, and return a list of 
all the names that <name> is not friends with
*/
/*
var data = [
  {name: "Jimmy", friends:["Sara", "Liza"]},
  {name: "Bob", friends:[]},
  {name: "Liza", friends: ["Jimmy"]},
  {name: "Sara", friends: ["Jimmy"]}
];
*/
/*
function nonFriends(name, array) {
  var notFriends = [];
  for (var i = 0; i < array.length; i++) {
   if (array[i].indexOf(name) === -1) {
    return 
   }
    notFriends.push(); 
    return notFriends;

}

*/
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// taking  a key and a value. 
//updating the property <key> on <object> with new <value>. 
//if <key> does not exist on <object>, we are creating it. 

function updateObject(object, key, value) {
  object[key] = value;
  return object;
 }


//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*Should take an object and an array of strings. Should remove any 
properties on <object> that are listed in <array>
*/

function removeProperties(object, array) {
  for (let i = 0; i < Object.keys(object).length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] === Object.keys(object)[i]) {
        var holdVariable = (array[j]);
        delete object[holdVariable];
      }
    }
    }
  }
//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
//creating a variable that will contain the new array with the duplicates removed
  let arrays = [...new Set(array)];
  //returning the new array with the duplicates removed 
return arrays;
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