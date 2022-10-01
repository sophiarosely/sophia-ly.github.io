// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) { // check to see if there is a method you can already use? (google it)
    // YOUR CODE BELOW HERE //

   //using Array.isArray method to see if "value" is an array 
    if (Array.isArray(value)) {
        //returning true if it is an array
        return true;
        //returning false if it is not an array
    } else {
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */


 function isObject(value) { 
     // YOUR CODE BELOW HERE //
       //determining  if typeOf value is an object && value is not an array && value is not null 
     // && value is not a date object
     if (typeof value === "object" && !Array.isArray(value) && value !== null && !(value instanceof Date)) {
         return true;
     } else {
         return false;
     }
 console.log(isObject(new Date()));
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */

var today = new Date();
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    //returning true if it is an array or object, if it's object, it is only an object intended as a collection
    if (typeof value === "object" && !(value instanceof Date) && value !== null){
        return true; 
    //returning false if it does not follow the above conditions 
    } else {
        return false;
    }
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 


function typeOf(value) {
    // YOUR CODE BELOW HERE //
    if(typeof (value) === "object" && Array.isArray(value)) {
        return "array";
    } else if (typeof (value) === "object" && value === null) {
        return "null"; 
} else if (typeof (value) === "object" && value instanceof Date) {
           return "date"; 
} else {
    return (typeof (value)); 
}

    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
