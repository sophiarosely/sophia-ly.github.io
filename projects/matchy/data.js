/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//creating a variable named animal with an empty object
var animal = {};
//adding a property species with a value to object
animal.species = "Panda";
//using bracket notation to give object a property called name with a value
animal.name = "Henry";
//using either notation give animal a property called noises with a value of empty array
animal.noises = [];
//print object to console
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a variable named noises and assign it to an empty array
var noises = [];
//using bracket notation, give noises its first element => representing a noise it would make 
noises[0] = "munch";
//using array method to give it another noise
noises.push("scream");
//using an array function to add another noise
noises.unshift("whine");
//using bracket syntax, to add another element and it's not hardcoded 
noises[noises.length] = "sneeze";
//console.log the length of noises
console.log(noises.length);
//console.log the last element of the array, without hardcoding
console.log(noises[noises.length - 1]);
//console.log the whole array
console.log(noises);
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//using bracket syntax, assign noises property to our new noises array
animal["noises"] = noises;
//using any syntax, add another noise to the noises property on animal
animal.noises[noises.length]= "yawn";
//logging animal to the console
console.log(animal);
/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * Either bracket notation or dot notation
 * 2. What are the different ways of accessing elements on arrays?
 *  Bracket notation
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//creating a variable named animals and assign it to an empty array
var animals = [];
//pushing our animal that was created in animals 
animals.push(animal);
//logging animals
console.log(animals);
//creating a variable named duck and assigning it to an object
var duck = { species: 'Duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }
//pushing duck to animals
animals.push(duck);
//logging animals
console.log(animals);
//creating two more animal objects, each with a species, name, and 2 sounds to each
var tiger = {species: "Tiger", name: "Tony", noises: ["growl", "purr"] };
var elephant = {species: "Elephant", name: "Edward", noises: ["splashing", "trumpeting"]};
//add each to animals
animals.push(tiger);
animals.push(elephant);
//log animals and length of animals
console.log(animals);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//using an array to sort list of friend's array, due to indexes 
var friends = [];
//creating a function called getRandom that takes an array and returns a random index of the array
function getRandom(array) {
return array[Math.floor(Math.random() * animals.length - 1)];
};
friends.push(getRandom(animals).name);
//logging to the console
console.log(friends);
//using bracket notation, add the friends list as a property also named friends on one of the animals in the 
//array
animals[0].friends = friends;

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}