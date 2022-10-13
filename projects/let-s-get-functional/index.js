// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./sophia-ly.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

// filter => use for any functioni asking you to access only customers who pass a test 

// map => use if you need to return a new array of every value from input array transformed 

// reduce => iterates through an array to "accumulate a single return value"


var maleCount = function(array) {
    //implement a high-order function call --> filter
    let males = _.filter(array, function(customer){ //assign males to result of what filter function returns 
    //return true if the input customer is male 
   return customer.gender === "male";
}); // [male, male, male];
return males.length; //represents count of male customers 
};

var femaleCount = function(array) {
    //implement reduce to get number of female customers 
    let females = _.reduce(array, function(acc, current){
        //acc = 0 | current = {name: "Sophia", gender: "female"};
        if (current.gender === "female"){
            acc += 1; // acc = 1
        } 
        return acc; // return 1
    }, 0); 
    return females; 
};

/**
 * invoke _.reduce
 * seed or no seed  => seed value of 0 => result = 0
 * 
 * //iterate through array
 *  //0
 *      //result = func(0, {customer, -, [....]});
 * 
 */


var oldestCustomer = function (array) {

};

var youngestCustomer;

var averageBalance = function () {

};

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
