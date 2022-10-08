
/**
 * FUNCTIONS: 
 * 0. Sometimes, our code needs to be more efficient. Functions define a code block, in which they are designed to 
 * perform a specific task repeatedly. Functions are called functions because they are able to produce something.
 *  In this case, a function produces an action (from their code block) to multiple data values that are passed as 
 * arguments. 
 * 
 * 1. It’s important to note there are the two phases of a function: function declaration (defining) and 
 * function invoking (calling). Function declaration consists of: function keyword, function name, parameters, and 
 * a function body. The function call consists of the function name with its arguments.
 * 
 * 2. Arguments and parameters are an important factor of our functions. When we encapsulate a block of code, it doesn’t
 * automatically execute, until we call our function. We usually call our function by passing in our arguments. However,
 * before we even know which data values will be passed as arguments, we use parameters as temporary placeholders for our
 * arguments.  Parameters have no real value, however, arguments do. Note: functions do not need an argument and can have
 * zero parameters. 
 * 
 * 3. The syntax for a named function consists of: function keyword, function name, parentheses for our placeholders, 
 * two curly braces, and a semicolon. 
 *
 * 4. Through variable initialization, we can assign our function to a variable, making it a function expression. 
 * You need a variable that is assigned or pointing to a function. 
 * 
 * 5. Functions do not always need parameters or to return a single value. Usually, our inputs are determined by our
 * parameters. An empty parameter is okay, and it signals to the function to evaluate based on what is in the code block.
 * A globally scoped variable can be used as in input, even though it wasn’t placed in the parameter.  A lack of a return 
 * statement is also okay, and it signals to the function to output what is also in the code block, too. 
 * 
 * 6. Functions are also special when it comes to scopes. Functions are able to access their parent scope or the global scope,
 * however, their parent and global scope cannot access them.
 * 
 * 7. A closure is an inner function that has access to its outer function’s (parent scope) variables.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
*/



// 1. function declaration/function call //

//function declaration does not execute. It defines. A function call, however, executes an action. 

//function declaration 
function sum (num1, num2) {
var sum = num1 + num2; 
return sum;
};

//function call 
console.log(sum(1,2));  // prints out => 3


// 2. arguments and parameters  //
//Parameters do not have a concrete value, however, passed in arguments do and are used in a function call. 

//parameters 
function sum (num1, num2) {
var sum = num1 + num2; 
return sum;
}
/* => Our parameters  are num1 and num2, which act as placeholders, until our data values are called in. 
Note: a function declaration does not execute an action, yet  */

//arguments
console.log(sum(1,2));  // prints out => 3
/* => our arguments, now, take the place of the placeholders (num1, num2) and they are replaced with concrete data 
values(1, 2). */

// 3. named function syntax //
//Named functions consist of: a function keyword, function name, parameters, and a function body. 
function multiply (num1, num2) {
var product = num1 * num2; 
return product;
}

// 4. function expressions // 
//The variable add is now assigned/pointing to a function 

var add = function(num1, num2) {
return num1 + num2; 
} 

/*Note that this is how you call a function expression. You have to set your function call as a variable, too. Then, 
you have to log the variable. */

var newValue = add(5, 2); 
console.log(newValue); => prints 7 


// 5. optional function inputs & optional return statements // 
//Functions can have inputs, but they don’t need it.  This also applies to return statements. 

var side = 34;
//function declaration
function area_of_square(){ // => function still works, although, there is no parameters 
 var area = side * side;  // => our “input” is a value that is accessed from a global scoped variable
 console.log(area);
}
//function call 
console.log(area_of_square()); // => prints 1156, although, there is no return statement. 

//6. function scope// 
//Functions can access variables in their parent scope, such as the global scope. However, the function’s parent scope, such as the global scope, cannot access variables inside of the function. To summarize, a parent scope cannot access the child scope, but the child scope can access the parent scope. 

//functions accessing their parent scope vs. parent scopes accessing their child scope
var a = 2;
function foo() {
	var b = 1;
}
console.log(foo());  // => prints undefined because you cannot access the variable out of its scope
console.log(b); // => prints ReferenceError b/c global scope cannot access a var variable inside a function

//7. closures//
//Closures are a function having access to its parent scope, even after their parent scope is “closed”. 

function multiply(x, y) {
	return function(y){
return  x*y; 
}
}

var multiply5 = multiply(5);  // => assigning the function to a variable 
console.log(multiply5(2)); // => prints 10 the console 


