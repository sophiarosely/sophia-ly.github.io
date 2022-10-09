/**
 * DATA TYPES
 * 0. Data types specify what kind of data can be stored and manipulated inside a program. 
 * They are categorized between either primitive data values or complex data values. 
 * 
 * 1. Numbers are arithmetic values that can be positive, negative, or decimal values. 
 * They are considered a primitive data type. 
 * 
 * 2. Strings are text or string of characters. They are indicated between quotation 
 * marks or single quotes. Strings are considered a primitive data type. 
 * 
 * 3. Booleans result in either true or false values. They can be seen in control flow
 * statements. They are considered a primitive data type. 
 * 
 * 4. Arrays are a zero-indexed list. It is a complex data type. It is also a collection that 
 * allows us to store a list of values of any data type and store them as one variable. You can access 
 * an array through its indexes. 
 * 
 * 5. Objects are also a complex data type and a collection. However, they are not zero-indexed like arrays. Objects
 * do not have order nor do they have indexes. Objects contain key-value pairs, which are known as properties. You can 
 * access an object through its properties. 
 * 
 * 6. A function is a complex data type that encapsulates a block of code that can be repeated to many possible data 
 * values. 
 * 
 * 7. Undefined is a primitive value of a property of the global object “undefined”. If a variable is not assigned to 
 * a value, a value can read undefined. Undefined means lack of value or unknown value. 
 * 
 * 8. Null represents the intentional absence of an object. It is a primitive data type and is treated as falsy for 
 * boolean operators. Null means the absence of a value. 
 * 
 * 9. NaN means “Not a Number”. NaN appears when arithmetic operations result in undefined or unrepresentable values.
 * NaN is a primitive number data value.
 * 
 * 10. Infinity is when a number reaches the upper limit for a value, whereas a negative infinity is when a number 
 * reaches the lower limit for a number. Infinity is greater than any number. 
 * 
 * 11. Primitive data types have a definite size in memory. They cannot store or collect values besides themselves. 
 * In comparison, complex data types have an infinite size in memory. They can store or collect values inside themself. 
 * 
 * 12. Copy by value is used among primitive data types, whereas copy by reference is used among complex data types.
 *  Copy by value is when a variable assigns to a primitive data type and the variable takes a copy of the value they 
 * were assigned to. However, the original value they were copied from is not affected. The variable and the original 
 * are not pointing at the same value, however, they are pointing to duplicates of the same value. Copy by reference is
 * when a variable assigns to a complex data type. A complex data type points to a reference when assigned to a variable,
 * which differs from a primitive data type. A variable that is assigned to this data type, will then point to the same
 * reference. Changing the value of a variable never changes the underlying primitive or object, it will just point the
 * variable to that new primitive or object. However, if a variable points to an object and is referencing them, and 
 * the object’s property changes, the object changes and they both point to the new reference. 
 *  */ 

// 1. numbers //
// Numbers can be negative, positive, or a decimal value. 
0.5; 
222; 
-78;  

// 2. strings //
// Strings are a string of characters between two quotation marks or two single quotes. My variable diaryEntry contains a string. 
var diaryEntry = “I miss New York, but not the cold winters. “;

// 3. booleans //
// Booleans result in true or false. My variables notTrue and notFalse both carry booleans. 

//false
var notTrue = !true;
console.log(notTrue);
// => prints false

//true
var notFalse = !false ;
console.log(notFalse);
// => prints true 

// 4. arrays //
//An array listing values of my favorite movies, stored in the variable faveMovies.
var faveMovies = ["Romy and Michele's High School Reunion", "Spirited Away", "Kill Bill", "Napoleon Dynamite"]; 
console.log(faveMovies);
/*=> prints [
  "Romy and Michele's High School Reunion",
  'Spirited Away',
  'Kill Bill',
  'Napoleon Dynamite'
]
*/







// 5. objects //
// An object with properties (key-value pairs), stored in the variable mySelf 
let mySelf = {firstName: "Sophia", middleName: "Rose", lastName: 
"Ly", DOB: "02/03/1999" };
console.log(mySelf); 
/* => prints 
{
  firstName: 'Sophia',
  middleName: 'Rose',
  lastName: 'Ly',
  DOB: '02/03/1999'
}
*/

// 6. functions // 
//A function, called sum, where it is being declared (defined) and called (executed). 
//function declaration 
function sum (num1, num2) {
var sum = num1 + num2; 
return sum;
}

//function call 
console.log(sum(1,2));  // prints out => 3

// 7. undefined //
//A variable that is being declared and when logged to the console, the variable logs as undefined because the variable is not pointing to any value. 
let mySchool; 
console.log(mySchool); // => prints undefined 

//8. null // 
//Code prints as null 
const foo = null;
console.log(foo); // => prints null 

// 9. NaN // 
//Using a function that results in a product of two numbers, inputting two strings will result in NaN because strings are not recognized as numbers 

//function declaration 
function product (num1, num2) {
var product = num1 * num2; 
return product;
}

//function call 
console.log(product("Sophia", "Ly"));  // prints out => NaN

//10. infinity and -infinity // 
//infinity 
//Setting the variable y to equal a number higher than the Javascript limit of a number 
let x = 1.797693134862315E+308;
let y = x * 1.001;
console.log(y); // => prints  Infinity

//-infinity 
//Setting the variable y to equal a number lower than the Javascript limit of a number 
let x = -1.797693134862316E+308;
let y = x * 1.001;
console.log(y);  // => prints -Infinity 

//11. primitive data types vs. complex data types 
//primitive data type 
//cannot add another data than itself to a primitive data type, you can only re-assign a primitive data type, but you cannot access it in order to add to itself, like an array or object

let myName = “Sophia”; 
console.log(myName); // => prints “Sophia” 


//adding data to complex data type 
let mySelf = {firstName: "Sophia", middleName: "Rose", lastName: 
"Ly", DOB: "02/03/1999" };

//adding an array to mySelf because it is able to, due to being able to store other types of values than itself
let myCousins = ["Kelly", "Anthony", "Kenneth", "Kevin", "Jessica"];
mySelf.cousins = myCousins; 
console.log(mySelf);  /* => prints  {
  firstName: 'Sophia',
  middleName: 'Rose',
  lastName: 'Ly',
  DOB: '02/03/1999',
  cousins: [ 'Kelly', 'Anthony', 'Kenneth', 'Kevin', 'Jessica' ]
}
*/ 


// 12. copy by value vs. copy by reference // 
//copy by value 
//Showing that the variable incorrectName now prints the correct name because it was copied by the original value 
let correctName = "Sophia"; 
let incorrectName = "Sophie";
incorrectName = correctName; 
console.log(correctName); // still prints "Sophia" and is unchanged
console.log(incorrectName); //  prints "Sophia" because it was copied by value 

//copy by reference
//Showing that the variabel 
let newObject = {firstName: "Sophia", lastName: "Ly", faveFood: "sushi"};

let myObject; 
myObject = newObject; 
console.log(newObject); 
console.log(myObject); // showing that myObject and newObject both point to the SAME object, not a copy of the value 
/*
prints to the console 
{ firstName: 'Sophia', lastName: 'Ly', faveFood: 'sushi' } // from console.log(newObject); 
{ firstName: 'Sophia', lastName: 'Ly', faveFood: 'sushi' } // from console.log(myObject);
*/ 

//adding to show that when a property is changed, both variables point to the same object with the new property faveColor
newObject.faveColor = "pink";
console.log(newObject);
console.log(myObject); 
/*
prints to the console 
{
  firstName: 'Sophia',
  lastName: 'Ly',
  faveFood: 'sushi',
  faveColor: 'pink'
}  from console.log(newObject);
{
  firstName: 'Sophia',
  lastName: 'Ly',
  faveFood: 'sushi',
  faveColor: 'pink'
} from console.log(myObject); 

*/
