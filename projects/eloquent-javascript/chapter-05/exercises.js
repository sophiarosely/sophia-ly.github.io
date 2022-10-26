// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  // example: [[hey], [hello], [hi]];
  
  // using reduce method to combine each array value into one final array 
  let flattened = array.reduce((acc, current) => {
    //if the current value in the array is an array, using concat to add the current value to the accumulated array
  if (Array.isArray(current) === true) {
    acc = acc.concat(current);
  }
  return acc; }, []);
 //returning flattened array 
    return flattened;
  }


// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

//  function takes a: value, test function, update function, and body function
function loop(value, test, update, body) {
  // start is the current loop value; each iteration test function runs on current loop value; update
  // create a new value from itself 
  for (let start = value; test(value); value = update(value)) {
    // the body function that gives the current value 
    body(value);
  }
}
    


// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

  function every(array, test) {
    for (let element of array) {
        if (!test(element)) {
            return false;
        }
    }
    return true;
}


// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string) {
//  create two arrays to store occurences of ltr and rtl
  let ltr = [];
  let rtl = [];
  // iterate through the input string
  for (let i = 0; i < string.length; i++) {
    // string [i] = "H"
    let script = characterScript(string.charCodeAt(i));

    if (script !== null) {
      if (script.direction === "ltr") {
        ltr.push(script);
      } else {
        rtl.push(script);
      }
    }
  }
        if (ltr.length > rtl.length){
          return "ltr";
        } else {
          return "rtl";
        }
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
