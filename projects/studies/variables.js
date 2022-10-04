/**
 * VARIABLES:
 * 
 * 0. Variables are named-identifiers that stores values into memory. Without storing
 * values into memory, our values become useless and disappear. We can retrieve our values
 * from our variables, whenever we want, to execute an action. Variables contain values
 * of different data-types, such as simple and complex data types. Simple can include: strings, booleans, or numbers. 
 * Complex can include: arrays & objects. Variables can also change values by being re-assigned 
 * or re-declared. 
 * 
 * 1. To declare a variable, you need a var keyword, such as var, const, or let with the variable name following.
 * To assign a variable, you need the assignment operator (=) after the variable's name, following by a semi-colon. 
 * 
 * 
 * 3. Declarations that move to the top of the scope.  
 * 
 * // 1. declaration and assignment //
 * When you declare a variable without a value, it will log undefined to the console. However, when you assign 
 * the variable after declaring, the undefined valued becomes the value you assigned it to. 
 * 
 */
    var myName; => 
    console.log(myName); // prints => undefined;
    myName = "Sophia"; 
    console.log(myName); // => prints "Sophia"
/*
 * 
 * // 2. var, let, const //
 * 
 * // 3. hoisting // 
 * Variable declarations move to the top of the scope, excluding their values. Function declarations, 
 * along with their code block, move to the top of the scope, as well.
 * 
 * You can see that the variable faveFlower is undefined, but it is not an error. It's because it was hoisted
 * to the top of the scope. JS still recognizes it as a variable, even though being declared and assigned 
 * after being logged to the console. 
 * 
 * You can see that the function is being called and logged before it is even declared. However, in the console, it stil
 * shows that the string "Kerropi" was added to the array, due to the whole entire function being 
 * hoisted to the top of the scope.
 */

//Variable declaration 
console.log(faveFlower); // prints => undefined
var faveFlower = "roses";

//Function declaration 
var sanrioArray = ["Hello Kitty", "My Melody"];

console.log(addCharacter("Kerropi"));

function addCharacter (character) {
sanrioArray.push(character);
  return sanrioArray;
}