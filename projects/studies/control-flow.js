/**
 * CONTROL FLOW
 * 
 * 0. Conditional statements allow us to control the flow of actions that our program takes. Controlling the flow of our
 * application refers to how we can make decisions in our code by asking true or false questions. Based on the result 
 * of these questions, we can decide what runs if it’s true or false. 
 * 
 * 1. If statements consist of: an if keyword, test condition, and a code block. The test condition, that is placed in
 * parentheses, determines if the code in the code block will run or not. If it’s true, the code block will run. If it
 * is not, it will not run, and it will move onto the next if-statement, if there is one. 
 * 
 * 2. Else-if statements are chained to an if statement and consist of: the else if keyword, test condition, and a 
 * code block. If the previous if statement did not run, it will move onto the else-if statement and run the condition
 * to see if it’s true or false. If true, the code block will be executed. If not, it will move onto the next statement that
 * is chained to it. 
 * 
 * 3. Else statements are the last statement executed if the previous conditions were not true. Else statements consist
 * of: the else keyword and a code block that will be executed. 
 * 
 * 4. Switch statements are similar to if-else statements. They evaluate an input expression and match it to the 
 * expression’s value to a case, and it will execute statements based on that case. Switch statements consist of: 
 * the switch keyword, a case condition, a code block with case keywords and a colon, followed by the code that will
 * execute if the case matches. Remember, to put break keywords after every case that is ending, or it will cause the 
 * next block to execute, if you did not intend it to. 
 * 
 * 
 */

// 1. if statements // 
// The code block associated with the if-statement is executed because the condition is true
var color = “pink”;
if (color === “pink”) {
console.log(“That's my favorite color! I love pink!”);
 // => prints “That’s my favorite color! I love pink!”

 //2. else-if statements //
 // The code block associated with the else-if statement is executed because the condition is true, if is ignored because
// it was false
 var color = “green";
if (color === “pink”) {
console.log(“That's my favorite color! I love pink!”);
} else if (color == “green”) {
console.log(“That's my second favorite color..”)
} 
// => prints "That's my second favorite color.."

//3. else statements// 
 // The code block associated with the else statement is executed because all of the previous conditions were false, 
var color = “pink”;
if (color === “pink”) {
console.log(“That's my favorite color! I love pink!”);
} else if (color == “green”) {
console.log(“That's my second favorite color..”)
} else {
    console.log("That's not my favorite color.")
}
// => prints "That's not my favorite color"
