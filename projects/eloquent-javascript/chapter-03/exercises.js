////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//takes two parameters and returns its smallest argument
function min(num1, num2) {
  //if second argument is smaller, return second argument or if arguments are negative, returns the more negative number 
if (num1 > num2) {
  return num2;
 // if arguments are the same, returns a zero 
} else if (num2 === num1) {
  return 0;
  //if first argument is smaller, return the first argument
} else if (num2 > num1) {
  return num1;
}
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//create a recursive function ==> a function that calls itself
function isEven(number) {
//if number is even, return true, if not, return false
if (number % 2 === 0) {
  return true;
}
return false;
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, string2) {
  //creating a counting variable to keep track of everytime string has a character that matches string2
    var count = 0;
    //creating a for-loop to loop through both strings 
    for (var i = 0; i < string.length; i++) {
      //iterating through each character of string 1 and if it equals string 2, the count will go up
      if (string.charAt(i) === string2) {
        count++;
      }
    }
    //returning the final count
    return count;
  }





////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//creating a function that takes a string as its only argument
//returns a number of how many uppercase B's they have 
function countBs(string) {
  //if it's an empty string, return zero 
  if (string === "") {
    return 0;
  }
  //seeing if string has the capital letter B => searching for every instance of B with "/g"
  var count = string.match(/B/g); 
  /* if count found any instances of B, it will push all instances into an array. therefore, if we count the array
   length, it will return the amount of B's in the array */
  var countLength = count.length; 
  return countLength;
  }

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
