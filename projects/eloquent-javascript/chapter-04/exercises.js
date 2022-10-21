////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, next) {
  var rangeArray = [];
  for (let i = start; i <= end; i++) {
    //if start and end are the same numbers, return an empty array
    if (start === end || next < 0) {
      return rangeArray;
    }
    //if next exists, add start and next 
    if (typeof next === "number") {
      start + next 
    }
    //next doesn't exist, just push like normal 
    rangeArray.push(i);
}
return rangeArray;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  var emptyArray = [];
  //if array is an empty array, return the value 0
  if (array === emptyArray) {
    return 0;
  }
  return array.reduce((previous, current) => previous + current, 0);
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
    //creating a NEW reversed array 
        let reversedArray = [];
        //creating for-loop to iterate each array value in reverse and push each value into new array
            for (let i = array.length - 1; i >= 0; i--) {
                     reversedArray.push(array[i]);
                       }
            //returning new array with values in reverse
              return reversedArray;
                  }

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
    //reversing an array in place 
      array.reverse();
      //returning reversed array 
      return array;

}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
    let rest = null; 

    for (let i = array.length - 1; i >= 0; i--) {
      // array[i] = 3 
      rest = {value: array[i], rest: rest}
    }
return rest; 
}

// invoke arrayToList([1, 2, 3])
  // rest = null 
    // iterate backwards 
      // 2
        // rest = {value : 3, rest: null 
          // 1 
            // rest = {value : 2, rest: { value : 3, rest : null}
              // 0 
                // rest = {value: 1, rest: {value : 2}, rest: { value : 3, rest : null} }
      
////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, output = []) {

    // base 
    if (list.rest === null) {
      output.push(list.value);
      return output;
    }
    // recursion 
      // push the list object's value at "value" into array 
    output.push(list.value); // [1]
    
    // return recursive function call 
    return listToArray(list.rest, output); 
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend() {

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth() {

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(value1, value2) {
/*
Write a function deepEqual that takes two values and returns true only if they
are the same value or are objects with the same properties, where the values
of the properties are equal when compared with a recursive call to deepEqual.
To find out whether values should be compared directly (use the === operator
for that) or have their properties compared, you can use the typeof operator.
If it produces "object" for both values, you should do a deep comparison.
But you have to take one silly exception into account: because of a historical
accident, typeof null also produces "object".
*/

  // determine if value1 and value2 are not objects 
  if (typeof value1 !== "object" && typeof value2 !== "object") {
  return value1 === value2; 
}
  // determine if either x or y is not an object b/c if one is string and object, then false
  if (typeof value1 !== "object" || typeof value2 !== "object") {
    return false; 
  }
  // if above statements did not execute, then that means value1 and value 2 are both complex data types
  // create arrays of each object's keys 
  let value1Keys = Object.keys(value1); // ["a", "b"];
  let value2Keys = Object.keys(value2); // ["a", "b"];
  // check if the lengths are different 
  if (value1Keys.length !== value2Keys.length) {
    return false; 
  }
  //if both arrays have same number of properties, we have to iterate through arrays
  for (let i = 0; i < value1Keys.length; i++) {
    if (!value2Keys.includes(value1Keys[i]) || !deepEqual(value1[value1Keys[i]],value2[value1Keys[i]])) {
      return false; 
    }
  }
  return true;
}



////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
