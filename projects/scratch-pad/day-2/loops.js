// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */


function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  //creating a for-loop that loops over the array and prints its values
  for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
  }

  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //

  //creating a for-loop that loops backwards and prints its values
  for (var i = array.length - 1; i > -1; i--) {
      console.log(array[i]); 
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //create an array that contains the object keys
  var array = [];
  
  //iterate through objects 
  for (var key in object) {
    //key => current key

    //push keys into the array called array
    array.push(key);

  }
  //returning the array containing the object keys
  return array; 
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
//creating a for-in loop that loops over object and printing its keys using console.log
  for (var key in object) {
    console.log(key);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  //creating an array that will store the object's values
  var anArray = [];

  //retrieving the object's values using a for-in loop
  for (var key in object) {
    //pushing the values into the new array 
    anArray.push(object[key]);
  }

  //returning the array containing the object's values
  return anArray;

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  //creating a for-in loop for an object and print its value using console.log
 for (var key in object) {
  console.log(object[key]);
 }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //

  for (var key in object) {
  return object[key].length;
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */

function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
// new array 
var newArray = [];

  //iterate through object 
  for (var key in object) {
    //push the current values into newArray 
    newArray.push(object[key]);
      //now, the values are in an array 
  }
  
  //iterate through values in reverse 
for (var i = newArray.length - 1; i > -1; i--){
  console.log(newArray[i]);
}
  //print each item in reverse to the console 
  console.log(newArray);
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
