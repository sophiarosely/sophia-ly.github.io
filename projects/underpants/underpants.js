// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

//const { result } = require("lodash");

// declaring a variable _ and assigning it an empty object
var _ = {};
//add properties to this object and it will be functions 
// this object is getting added many functions 
// visually : ==> 

/**
 * _ = {
 * identity: function(),
 *  typeOf: function(),
 * }
 * 
 */



/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity // => add a property object named _ 
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value) {
    //return parameter value unchanged 
    return value;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

//adding property typeOf to _
_.typeOf = function (value) {
    //returning a string "array", if the input value is an array
    if (Array.isArray(value)) {
      return "array";
      //returning a string "null", if the input is a null object
    } if (typeof value === "object" && !Array.isArray(value) && value === null) {
      return "null";
    }
      //returning the typeof value for input value, if input value does not execute the above if statements
      return typeof value;
  }
/** _.first
* Arguments:
*   1) An array
*   2) A numberr
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function (array, number) {
  var emptyArray = [];
  //returning an empty array, if array is not an array
  if (!Array.isArray(array)) {
    return emptyArray;
  //returning the first element in array, if number is not given or not a number
  } if (!number) {
    return array[0];
    //returning the first "number" items of array 
  } if (typeof number === "number") {
    return array.splice(0, number);
  }
  }




/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number) {
  //creating an empty array 
  var emptyArray = [];
  //if array is not an array, returning an empty array
  if (!Array.isArray(array)) {
    return emptyArray;
    //if number is not a number or is not given, return the last element in array 
  } if (!number) {
    return array[array.length - 1]; 
    //if number is positive, return the last element in array 
  } if (typeof number === "number" && !(number < 0)) {
    return array.splice(-number);
    //if number is negative, return an empty array 
  } if (-number) {
    return emptyArray;
  }
};

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function (array, value) {
//creating a for-loop to iterate through array 
    for (var i = 0; i < array.length; i++) {
// returning the index of the array, if the first occurance of the input value is located
    if (value === array[i]) {
    return i;
  }
// returning -1, if input value is not found in array 
} return -1;
  }

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function (array, value) {
  //if array includes value, returns true 
    if (array.includes(value)) {
      return true;
    }
    //returning false if array does not include value
    return false;
  }


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

//parameters/arguments = collection, function
//adding to object "_" and assigning the property "each" a function 
_.each = function(collection, func)  {
//determine if collection is an array, else its an object (assume its if-else)
if (Array.isArray(collection)) {
    //call input function to each element in the array
    //gives access to current item in array 
    for (var i = 0; i < collection.length; i++) {
        //calling function to have access to the current element, index, and array
        //func(//current element//index//collection aka array)
        // invokes input func on current element, index, and array 
        func(collection[i], i, collection);
    }
} else { //else its an object 
    //iterate through collection using for in loop
    for (let key in collection) {
        //invoke input func, passing in current key, value, and object 
        func(collection[key], key, collection);
    }
}
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array) {
  //creating a new array for all the non-duplicated values from input array
  let nonDuplicates = [];
  //creating a for-loop to loop through input array 
  for( var i = 0; i < array.length; i++){
    //if the indexOf the array value is equal to -1, this means, it is not in the nonDuplicates array
    if(nonDuplicates.indexOf(array[i]) === -1) {
    //if value is not a repeat, it will be pushed into nonDuplicates array, preventing duplicates
        nonDuplicates.push(array[i]);
    }
}
//returning nonDuplicates array
return nonDuplicates;
}



/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
_.filter = function(array, func) {
  //creating a new array that contains elements that returned true 
  let trueArray = [];
  //looping through input array 
  for(var i = 0; i < array.length; i++) {
  //calling function for each element in array, with arguments of: element, index, and array
  // as long as it results in true
  if (func(array[i], [i], array) === true && func(array[i], [i], array) !== false )  {
    //pushing elements that returned true into new array
    trueArray.push(array[i]); 
      }
                }
  //returning array that contains elements that returned true 
  return trueArray;
  }



/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function (array, func) {
  //creating a new array that contains elements that returned false
      let falseArray = [];
   //looping through input array 
      for (var i = 0; i < array.length; i++) {
        //calling function for each element in array, with arguments of: element, index, and array
  // as long as it results in false
  if (func(array[i], [i], array) === false) {
     //pushing elements that returned false into new array
   falseArray.push(array[i]);
  }
}
return falseArray;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, index, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function (array, func) {
  //creating an array to place 2 sub arrays
  var newArray = [];
  //creating first sub array
  var subArray = [];
  //creating second sub array 
  var subArrayTwo = [];
    //looping through input array
      for (var i =  0; i < array.length; i++) {
        //calling function for elements in array, with arguments of element, index, array
            if (func(array[i], i, array) === true) {
                //pushes to subArray, if array values returned truthy 
              subArray.push(array[i]);
        } if (func(array[i], i, array) === false) {
              //pushes to subArrayTwo if array values returned falsy
          subArrayTwo.push(array[i]);
        }
     }
             //pushing both subarrays into one final array
             newArray.push(subArray, subArrayTwo);
             //returning an array that is made of 2 sub arrays
                return newArray;
    }


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/


_.map = function (collection, func) {
      //creating new array
      var newArray = []; 
        //checking if collection is an array 
              if (Array.isArray(collection)) {
                //looping through collection if it is an array
          for (var i = 0; i < collection.length; i++) {
            //returning the value of function call into new array 
           newArray.push(func(collection[i], i, collection)); 
          }
        } else {
          //if it's not an array, it is an object => looping through object
          for (let key in collection ) { 
            //returning the value of function call into new array
            newArray.push(func(collection[key], key, collection)); 
          }
        }
        //returning new array
        return newArray;
  }
  
/**_.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, prop) {
    //using map function to loop over every element in the input array, which will return a new array 
       return _.map(array, function(arrayValue) {
        //pushing every property value to new array 
           return arrayValue[prop];
    }); 
  }

/**  _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the parameters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function (collection, func) {
  //determine if func was not passed in 
  if (func === undefined) {
    //determine if array 
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        if (!collection[i]) {// determine if collection[i] is truthy
          return false; 
        }
      }
    } else { 
      for (let key in collection) {
      if (!collection[key]) {
        return false; 
      }
    }
    }
  } else { // func was defined
    //determine if collection is an array
    if (Array.isArray(collection)) {
      //iterate through every value in array 
      for (var i = 0; i < collection.length; i++) {
        //determine if the result of invoking func on the params is true
        if (func(collection[i], i, collection) === false) {
          return false;
        }
      }
    } else { //it's an object 
      //iterate through object 
      for (let key in collection) {
        if (func(collection[key], key, collection) === false) {
          return false;
        }
      }
    }
  }
  return true;
}

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function (collection, func) {
  //determine if function was passed in 
  if (func === undefined) {
     //determine if array 
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) { // determine if collection[i] is truthy
        if (collection[i]) {
          return true; 
        }
      }
    } else { //it's an object 
       //iterate through object 
      for (var key in collection) {
        if (collection[key]) {
          return true; 

        }
      }
    }
  } else {
     //determine if collection is an array
    if (Array.isArray(collection)) {
      //iterate through every value in array 
      for (var i = 0; i < collection.length; i++) {
        if (func(collection[i], i, collection) === true) {
          return true; 
        }
      }
    } else {//it's an object 
        //iterate through object 
      for (var key in collection) {
        if (func(collection[key], key, collection) === true) {
          return true;
        }
      }
    }
  }
  return false; 
}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function (array, func, seed) {
  //create result variable
     let result;
    //determine if seed was not given a value
    if (seed === undefined) {
      //assign result first value in array          
        result = array[0];
        //iterate through input array
        for (let i = 1; i < array.length; i++) {
          result = func(result, array[i], i, array);
        }
      } else  {
        //assign result the seed value
          result = seed; 
          //iterate normally
          for (let i = 0; i < array.length; i++) {
            result = func(result, array[i], i, array);
          }
      }
      //else seed has a value
      return result;
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function (object, ...object2) {
  //looping through object and copying argument's properties to object 
  for (let key in object2) {
    var finalObj = Object.assign(object, object2[key]); 
  }
  //returning updated object
  return finalObj;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
