/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//const { animals } = require("./data");

// visual => animals = [ {name: Henry...}, {name: Jerome...}, {name: Edward}];

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a function called search that has parameters of an array
//and string
function search(array, string) {
    //looks through array values to find an object
    // with a name property that has a value of the string 
    for (var i = 0; i < array.length; i++) {
        //when array accesses the object at index i, it will access
        //the object's name property & if the name value equals to our string
        // it will return the object 
        if (array[i].name === string) {
            return array[i];
    } 
     //if it doesn't equal our string, the function will return null
     // we wouldn't want to put this in the for-loop because once the name executes, it won't execute null**
} return null;
    };
//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* creating a function declaration called "replace", which takes 3 parameters: an animals array, a string of
the animals name, and a replacement object */
   function replace (animals, name, replacement) {
    //creating a for-loop to loop or "look" through array 
    for (var i = 0; i < animals.length; i++) {
        /*if a string is equal to the name of an animal in the object of the animals array, replace its entire object with 
the replacement object*/
    if (animals[i].name === name)  {
       /*finding object at its index in the animals array, then using splice, starting at its index, 
       and deleting the object and replacing the object with its "replacement"
       */
        return animals.splice([i], 1, replacement);
    }
}

    }

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*creating a function called remove with parameters of (animals, name) that removes the animal from the array if
their name is found in the search */
function remove (animals, name) {
    //creating a for-loop to "look" or loop through if the name is in the animals array 
    for (var i = 0; i < animals.length; i++) {
   //if we find the animal's name (name) in the array (animals), remove it
    //if we find the the animals name (the element in the array), we're removing it from the array 
    if (animals[i].name === name) {
        return animals.splice([i],1);
    }
// note to self: notice we're deleting it and not replacing it with anything, therefore, it's just ([i], 1)
    }
 

}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/** Write a function declaration called `add` with a signature of `add(animals, animal) { //... }` that:
   - Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
   - Checks that the animal Object has a `name` property with a length > 0.
   - Checks that the animal Object has a `species` property with a length > 0.
   - Has a **unique** name, meaning no other animals have that name.
   - Adds this new Object to the `animals` Array, **only** if all the other conditions pass.
   - Make sure it works. */
/*creating a function called add with parameters of animals, animal
*/


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
    