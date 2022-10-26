/**
 * STRING MANIPULATION
 * 
 * 0. String manipulation consists of being able to: edit a string, such as adding or removing elements to and from 
 * a string, finding indexes of a particular character in the string, or even converting a string or character to 
 * uppercase or lowercase.   To be able to manipulate a string, you can use an operator to edit a string, such as (+), 
 * or you can use string methods.
 * 
 * 1. The most common operator used to manipulate a string is the addition operator. This operator is used to add 
 * elements to a string or concatenate it. 
 * 
 * 2. There are various amounts of string methods that allow you to edit a string: .concat(), .indexOf(), .lastIndexOf(),
 * .charAt(), .match(), .replace(), .split(), .splice(), .length(), .substring(), .search(), .toUpperCase(), .toLowerCase(),
 * .trim(). 
 */

// 1. string operators // 
//Lets you join two strings together. You must have one string on the left and one string on the right of the assignment operator (+). Here, we are joining two strings, which results in one final string. 

//two joined strings using the assignment operator 
  var stringOne = "My name is ";
  var stringTwo = "Sophia.";
  var finalString = stringOne + stringTwo; 
   console.log(finalString); // => prints “My name is Sophia.” 

// 2. string methods // 
//Using string methods to manipulate a string, such as adding or removing elements, finding indexes of particular characters in a string, or converting a string or character to uppercase or lowercase. 

//.concat ()
//First string is in front of .concat() and the second string is inserted between the parentheses. 
  var string = "The weather is ";
  var strings= "really nice today!";
  var finalStrings = stringOne.concat(stringTwo); 
    console.log(finalStrings); // => prints "The weather is really nice today!" 

//.indexof() 
//Finding the index of a word in the string of stringOne. Note that it will return -1, if the string is not found in the string 
// var string = “The weather is “;
​​console.log(stringOne.indexOf("is")); // => prints 12, which means is starts at the 12th index of the string 



//.lastindexof() 
//Finding the last index of a word in the string of variable newerString 

let newerString = "My name is Sophia. Sophia means wisdom in Greek";
//remember, it is case sensitive, this will result in  -1, meaning it is not found
var last = newerString.lastIndexOf("sophia"); // => prints -1 
var lastcopy = newerString.lastIndexOf("Sophia"); // => prints 19 

console.log(last); // => prints -1 b/c it is not found, we have “Sophia”, but we do not have “sophia”
console.log(lastcopy); // => prints 19 b/c it will find the last first index of the word "Sophia", even though it shows up twice in the string

//.charAt() 
//Find the character at the index inputted into this string method 

//Find character at the first index of the string 
var fullName = "Sophia Rose Ly";
var firstChar = fullName.charAt(0); 
console.log(firstChar);  // => prints first character of sentence, which is S

//Finding the character at the last index of the string 
var lastChar = fullName.charAt([fullName.length - 1]);
console.log(lastChar); // => prints the last letter of string, which is y


//.match()
//Finds matching terms within string of newerString
//let newerString = "My name is Sophia. Sophia means wisdom in Greek";
console.log(newerString.match(/phia/g));  // => prints [“phia”, “phia”] 
//Note that without /g added, it would only return one instance of “phia”, Also, phia does not need quotations within match. 

//.replace() 
//Replaces matching terms within string of newerString
//let newerString = "My name is Sophia. Sophia means wisdom in Greek";
console.log(newerString.replace("Sophia", "Phia"));  // => prints “My name is Phia. Sophia means wisdom in Greek”; 



//.split() 
//Splits the string into an array of substrings
//let newerString = "My name is Sophia. Sophia means wisdom in Greek";
var splitString = newerString.split(" "); 
//remember, to assign to a new variable, the original variable will return a split string 
console.log(splitString); /* => prints [
  'My',     'name',
  'is',     'Sophia.',
  'Sophia', 'means',
  'wisdom', 'in',
  'Greek'
]
*/

//.slice() 
//let newerString = "My name is Sophia. Sophia means wisdom in Greek";
//Cuts out a portion of the string, removing “in Greek”. Slice starts at the 0 index and “slices” at the 39th index in the string. 
var slicedString = newerString.slice(0, 39);
console.log(slicedString); // => prints "My name is Sophia. Sophia means wisdom"

//.length() 
//Finds the length of the entire string stored in variable lengthOfString
//let newerString = "My name is Sophia. Sophia means wisdom in Greek";
var lengthOfString= newerString.length; 
console.log(lengthOfString); // => prints 47 

//.substr() 
//Taking two parameters, start and end, and returns the characters in these indexes 
//Finding a substring between indexes 0 to 10 
//let newerString = "My name is Sophia. Sophia means wisdom in Greek";
var subString= newerString.substr(0, 18); 
console.log(subString); // => prints the string from indexes 0 to 18 

//.search() 
//Searches a word in the string, and returns the index it is placed 
//let newerString = "My name is Sophia. Sophia means wisdom in Greek";
let newSearch = newerString.search("wisdom");
console.log(newSearch); // => prints the first index where the word “wisdom” appears 


 //.toUpperCase() 
//Uppercases every word in string stored in variable myName
var myName = "my name is Sophia"
var upperCased = myName.toUpperCase() ;
console.log(upperCased); // => uppercases every letter in the string

//.toLowerCase()
//Lowercases every word in the string stored in variable newSentence
var newSentence = "I REALLY LIKE THIS BAND CALLED NO VACATION!"
var lowerCased = newSentence.toLowerCase(); 
console.log(lowerCased); // => prints "i really like this band called no vacation!"

//.trim()
//Gets rid of spaces or tabs in string from beginning and end ONLY
var newBand = " No Vacation is awesome!  "
console.log(newBand); // => prints " No Vacation is awesome! "   
//getting rid of spaces 
var noSpaces = newBand.trim();
console.log(noSpaces); // => prints "No Vacation is awesome!"

