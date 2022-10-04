// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //

    //return a function that tests whether value is greater than base 
    return function(value){
        //determine if value is greater than base 
        return value > base; 

    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function(value) {
        return value < base;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 * Needs to be case-insensitive!
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    return function(string) { 
         //returning "true" if the first letter of the string is the same as the first letter of the start sWith character
     return string[0].toLowerCase() === startsWith.toLowerCase();
    }

    
    
    
    // YOUR CODE ABOVE HERE //
    }

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //

    //returning a function that passes a string 
    return function(string) {
        //returning "true" if the last letter of the string is the same as the last letter of the endsWith character
        return string[string.length - 1].toLowerCase() === endsWith.toLowerCase();
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
 
    //creating an array where the modified strings will be stored in the return statement
    var modifiedStrings = [];
  //creating a for-loop to iterate off the array of strings 
  for (var i = 0; i < strings.length; i++) {
    console.log(strings[i]);
    modifiedStrings.push(modify(strings[i]));
}
return modifiedStrings;




    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) { // test is a function that will "test" a single string
    // YOUR CODE BELOW HERE //

    //creating a for-loop that iterates each value from the array 
       for (var i = 0; i < strings.length; i++) {
        if (test(strings[i]) === false) {
            return false; 
        }
    }
   return true;

        //this is basically saying any string is true, it will return true. that's what the loop is doing, but the prompt is asking
        // true if ALL OF THEM ARE
        // => if (test(strings[i]) == true) --> this is not what we want 

        //now, this is giving us a result of every true or false it came up with,
        //but how do we let JS know to only print true if everything was true?
        //if (test(strings[i])) {
        

    //console.log(allStringsPass(strings, function()))
    //similar to filterNums example from today 
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
