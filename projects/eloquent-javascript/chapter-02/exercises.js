
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function triangles(number) {
//creating a for-loop that will print a triangle with 7 rows and each iteration adds a "#"
  for (var i = "#"; i.length <= number; i += "#")  {
    //printing "#"
    console.log(i);
  }
  }

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for
numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
for numbers divisible by only one of those).
(This is actually an interview question that has been claimed to weed out
a significant percentage of programmer candidates. So if you solved it, your
labor market value just went up.)
 */
function fizzBuzz(num1, num2) {
  for (var i = num1; i <= num2; i++) {
    // if parameters are divisible by 3 & 5, prints "fizzbuzz" to console
    if (i % 15 === 0) {
      console.log("fizzbuzz");
      // if parameters are divivisble by 3, prints "fizz" to console
    } else if (i % 3 === 0) {
      console.log("fizz");
      // if parameters are divivisble by 5, prints "buzz" to console
    } else if (i % 5 === 0) {
      console.log("buzz");
      //if parameters are not divisible by the conditions above, their number position prints
    } else {
      console.log(i);
    }
  }
  }



////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
  var board = "";
  for(var i = 0; i < size; i++){
   for(var a = 0; a < size; a++){
    board += (a % 2) == (i % 2) ? " " : "#";
   }
   board += "\n";
  }
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
