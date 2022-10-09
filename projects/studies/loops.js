/**
 * LOOPS
 * 0. Loops are a great way to create efficient code. Although functions allow us to give instructions 
 * to multiple data values, loops provide a way to repeat instructions multiple times. Loops repeat
 *  tasks and execute a block of code as many times as needed. There are three types of loops: 
 * for, for-in, and while loops. 
 * 
 * 1. For loops come in handy when you know the exact number of times you need to execute a block of code. 
 * It allows you to apply a set of conditions to be executed repeatedly until a condition is satisfied.
 * 
 * A for-loop consists of: a for keyword, start condition, stop condition, incrementation/decrementation,
 * and the code block. A for keyword translates to the computer that a loop is being declared. The start condition
 * tells us what number the loop will start on. The stop condition tells us what number the loop will end on. 
 * The increment or decrement will tell us to either add or remove after each iteration. Lastly, what is
 * written in the code block will be executed for each iteration until the stop condition. Note: an 
 * iteration represents every time the code block is being repeated. 
 * 
 * For-in loops are practical when you are dealing with objects. If you want to pull out all the keys 
 * out of an object one-by-one, this is the loop to use. This allows you to use the key to access 
 * inside an object. A for-in loop consists of: a for keyword, the var key in object format, and the
 * code block.  A for keyword translates to the computer that a loop is being declared. The word 
 * object in “var key in object” is replaced with the object you are accessing. The code block will be 
 * executed, and depending on your code, you can get the values for each key in the object you are 
 * referring to or even the keys themselves. If the object was named person =>(ex. console.log(person[key]) 
 * or console.log([key]);
 * 
 * While loops are perfect if you want to execute an action repeatedly, based on if a condition was true
 * or false. They can also be practical if you don’t know the exact number of times you want to execute
 *  a code, in comparison to the for-loop. The while-loop consists of: the while keyword, a condition 
 * that while true will continue to loop, and the code block that will be executed. 
 * 
 * 
 * 2. Loops can be useful when trying to print numbers to the console, creating efficiency if we were 
 * to access a huge amount of numbers. We can print numbers forward counting up to a certain value and 
 * backward counting to zero. 
 * 
 * 3. Loops can loop through arrays, creating efficiency if we want to access certain values at each
 * index of an array. We can loop through arrays forwards or backwards. 
 * 
 * 4. Loops can loop through objects, creating efficiency if we want to access values or keys of an 
 * object. 

 */







//1. for-loop, for-in loop, and while loops

//for-loop
//Our code has a for keyword, start condition, stop condition, increment/decrement value, and lastly, the code block that will be executed after each iteration. Every value from the array is printed to the console along with the string concatenated with it. 

let sanrioCharacters = ["My Melody", "Kuromi", "Hello Kitty", "Cinnamonroll", "Twin Stars"]; 

for (var i = 0; i < sanrioCharacters.length; i++) {
  console.log("My favorite characters are: " + sanrioCharacters[i] + ".");
}
// => prints My favorite characters are: My Melody.
My favorite characters are: Kuromi.
My favorite characters are: Hello Kitty.
My favorite characters are: Cinnamonroll.
My favorite characters are: Twin Stars


//for-in loop 
//Our code executes and as a result, every value from the accessed key, is printed to the console. 
let myName = {firstName: "Sophia", middleName: "Rose", lastName: "Ly"};

for (var key in myName) {
  console.log(myName[key]);
}

// => prints Sophia Rose Ly 


//while loop 
//Our code starts at 0, as our global variable states, and as long as the count is less than 10, it will continue to increment by 1. Remember, it is important to increment or your program will crash. 
var count = 0; 

while (count < 10) {
  console.log(count);
  count++; 
}

// prints => 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

// 2. loop any number of times, forward counting up and backward to 0. //
//forward counting up
//we could either use a for-loop or a while loop 
var count = 0; 

while (count <= 12) {
  console.log(count);
  count++; 
}
// prints => 0, 1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 10, 11, 12 


//backward counting down to zero 
//we could either use a for-loop or a while loop 
var count = 12; 

while (count >= 0) {
  console.log(count);
  count--; 
}
// prints => 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 

// 3. looping through an array forwards and backwards // 
//Our code loops through every index in the array, starting from the zeroth index to the last value in the array, and prints each array value. 
let faveArtists = ["Kid Cudi", "Kanye West", "Mac Miller", "Pharrell"];

//looping through an array forwards
for (var i = 0; i < faveArtists.length; i++) {
  console.log(faveArtists[i]);
}
// prints => Kid Cudi 
Kanye West
Mac Miller
Pharrell




//looping through an array backwards
//Our code loops through every index in the array, starting from the last index in the array to the zeroth index, and prints each array value. 

let faveArtists = ["Kid Cudi", "Kanye West", "Mac Miller", "Pharrell"]

for (var i = faveArtists.length - 1; i >= 0; i--) {
  console.log(faveArtists[i]);
}

// 4. looping through objects //
//Our code accesses each value in each key
//Our code access only the keys


let identity = {id: 2732, username: "pheeuh", zipCode: 70056, faveColor: "pink", faveFlower: "roses"};


for (var key in identity) {
  console.log(identity[key]);
}
/*prints => 2732
pheeuh
70056
pink
roses
*/

//logging key instead
for (var key in identity) {
  console.log([key]);
}

/*prints =>
[ 'id' ]
[ 'username' ]
[ 'zipCode' ]
[ 'faveColor' ]
[ 'faveFlower' ]
*/
