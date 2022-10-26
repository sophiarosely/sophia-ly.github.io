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
 * 2. Var keywords consist of var, let, const, in which the interpreter knows you are declaring a variable. 
 * Var is a keyword that can be reassigned or re-declared to another value. Let is a keyword that can be re-assigned, 
 * but not re-declared to another value. While, const cannot be re-assigned to another value. In terms of scoping, 
 * var is function scoped, while let and const are block scoped. 
 * 
 * 
 * 3. Declarations that move to the top of the scope.  This can apply to variable declarations and function declarations.
 * Let and const are also hoisted but not before being intialized. 
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
 * With the var keyword, we can reassign or re-declare a value shown with ourFaveCharacter identifier. With the let keyword, 
 * we can only reassign a value. With the const keyword, we cannot reassign or redeclare a value. 
 * Var is function scoped (cannot be accessed outside of function), while let and const are
 *  block scoped (cannot be accessed outside of code block).
 * */
//re-declaring var ✅
  var faveCharacter = "Hello Kitty";
  var faveCharacter;
    console.log(faveCharacter); // => prints "Hello Kitty"

//re-assigning var ✅
  var faveCharacter = “Hello Kitty”; 
  faveCharacter = “My Melody”;
    console.log(faveCharacter) = “My Melody”; // => prints “My Melody” 

//re-declaring let ❌
  let faveCharacter = "Hello Kitty";
  let faveCharacter;
    console.log(faveCharacter); // => prints SyntaxError: Identifier "faveCharacter has already been taken"

//re-assigning let ✅
  let faveCharacter = "Hello Kitty";
  faveCharacter = “Cinnamonroll”; 
    console.log(faveCharacter); // => prints “Cinnamonroll”

//re-assigning or re-declaring const ❌
const faveCharacter = “Hello Kitty” 
const faveCharacter; // => prints SyntaxError: Identifier “faveCharacter” has already been taken

faveCharacter = “Kuromi”; // prints TypeError: assignment to constant variable 

//function-scoping with var 
  function newCar() {
  var carName = "BMW";
    return carName;
  }
  console.log(carName);// => prints Reference Error: car name is not defined at Object


// <= block-scoped with let and const (compare-contrast) =>

//using var in code block
  var flower = "roses"
  {var flower2 = "hydrangeas";
  var flower3 = "tulips";
  }
    console.log(flower); // => prints “roses”
    console.log(flower2); // => prints “hydrangeas”
    console.log(flower3); =/> prints “tulips”

//using let in code block 
    var flower = "roses";
    {var flower2 = "hydrangeas";
    let flower3 = "tulips";
    }
      console.log(flower); // => prints “roses”
      console.log(flower2); // => prints “hydrangeas”
      console.log(flower3); // =>  prints ReferenceError: flower 3, is not defined at object 


//using const in code block 
    var flower = “roses”
    {var flower2 = “hydrangeas”;
    const flower3 = “tulips”;
    }
        console.log(flower); // => prints “roses”
        console.log(flower2); // => prints “hydrangeas”
        console.log(flower3); // =>  prints ReferenceError: flower 3, is not defined at object 



/** 
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
 * 
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
//hoisting let and const 
  console.log(myName); // => prints “Cannot access before being initialized at object”
  console.log(myDog); // => prints ““Cannot access before being initialized at object””
  console.log(artist); // => undefined

  var artist = "Xavier Wulf";
  let myName = "Sophia";
  const myDog = "Iro";

