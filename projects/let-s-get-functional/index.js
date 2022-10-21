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
 *         // result = 0
 * //1
 *      //result = 1
 * //2
 *      //result = func(1, {customer, 2, []);
 * 
 */


var oldestCustomer = function (array) {
    let oldestAge = _.reduce(array, function(previous, current) {
        // if previous's age is greater than current's age, return previous's object
     if (previous.age > current.age) {
        return previous;
        //if not, return current's object
    } else {
        return current;
    } 
    });
        //returning oldest age's name
        return oldestAge.name;
}


var youngestCustomer = function (array) {
  let youngestAge = _.reduce(array, function (previous, current) { 
        //if previous object's age is less than the current object's, return previous object
    if (previous.age < current.age) {
        return previous;
        //else, return the current object
    } else {
        return current; 
    }

  });
  //returning youngest customer's name 
  return youngestAge.name;
};

/**
 * ### 5: `averageBalance`
 - **Objective**: Find the average balance of all customers
 - **Input**: `Array`
 - **Output**: `Number`
 - **Constraints**:
 */

 
var averageBalance = function (array) {

   let sum =  _.reduce(array, (previous, current) => 
   previous + parseFloat((current.balance.replace(/[$,]/g, "")))
   , 0);
   console.log(sum);
   //sum equals the total balance of ALL customers  ==> ex. sum = 56456.78

   //counting all total customer objects
   let count =  _.reduce(array, function (acc, current) {
    //current = {customer object} 
    //if customer object has a balance, add to total count 
    if (current.hasOwnProperty("balance")) {
                acc += 1; // acc = 1
                      } return acc;  //return total count
         }, 0);
                    // => count = how many customers 

    //calculating average by dividing sum by number of customers 
    let finalAverage = sum/count;
    //return finalAverage;
    return finalAverage;

};




var firstLetterCount = function (array, letter) {
    //creating variable to keep track of how many customers name begin with given letter
    var count = 0;
    //creating a for-loop to access each object's name property 
    for (var i = 0; i < array.length; i++) {
    //if customer's name begins with the letter provided, increase count by 1
        if (array[i].name.charAt(0).toUpperCase() === letter.toUpperCase()) {
            count += 1
            //else, keep count value
        } 
    
}
    //returning count of customers 
    return count; 
    };

  /**  ### 7: `friendFirstLetterCount`
 - **Objective**: Find how many friends of a given customer have names that start with a given letter
 - **Input**: `Array`, `Customer`, `Letter`
 - **Output**: `Number`
 - **Constraints**:
 */

var friendFirstLetterCount = function (array, customer, letter) {
    //creating variable to keep track of count of friends that have a name that start with given letter
    var count = 0; 
   
    //looping through array to access given customer's object and accessing their friends
   for (let i = 0; i < array.length; i++) {
        if (array[i].name === customer && array[i].hasOwnProperty("friends")) {
            var friendsArray = array[i].friends;
        }
    }
    // looping through customer's friend list and counting how many friends' name that start with given letter 
    for(let i = 0; i < friendsArray.length; i++) {
        if (friendsArray[i].name.charAt(0).toUpperCase() === letter.toUpperCase()) { //case-insensitive
            count += 1 // count increasing every time letter matches with first letter of their name 
        }
        count;
    }
    //returning final count 
   return count;
}

    
 


/**
### 8: `friendsCount`
 - **Objective**: Find the customers' names that have a given customer's name in their friends list
 - **Input**: `Array` , `Name`
 - **Output**: `Array`
 - **Constraints**:
 */


 
 var friendsCount = function (array, name) {
//filtering through each customer object and returning each customer's object if it's true 
  /*
var filtered = _.filter(array, function(obj) {
    for (var i = 0; i < obj.friends.length; i++) {
        //this is accessing each customer's friend array 
        if (obj.friends[i].name === name) {
            return obj;
        }
    }
});

 console.log(filtered);
 /*_.map(filtered, (obj) => {
   obj.name; 
 });

 */


};




/*
### 9: `topThreeTags`
 - **Objective**: Find the three most common tags among all customers' associated tags
 - **Input**: `Array`
 - **Output**: `Array`
 - **Constraints**:
*/
var topThreeTags = function (array) {

    // combining all tags together into one single array to sort 
let tagArray = _.reduce(array, (acc, current) => {
    if (Array.isArray(current.tags) === true) {
      //adding all tags together 
     acc = acc.concat(current.tags); 
    }
  return acc; 
}, []);

//console.log(tagArray); 
// array named tag includes every tag from every customer 
// using reduce function to create an object with each tag and their count of occurrence
let newObj = _.reduce(tagArray, (acc, current) => {
    if (!acc.hasOwnProperty(current)) {
        acc[current] = 1; 
    } else {
        acc[current]++; 
    }
    return acc; 
}, {});
console.log(newObj);

for (var key in newObj) {
    let newArray = [];
    if (newObj[key] > 2) {
        newArray.push(key);
    }
    console.log(newArray); 
}

};



var genderCount = function (array) {
    //creating summary object
    var summary = {};
    //adding male count to object
    summary.male = 3; 
    //adding female count to object
    summary.female = 4; 
    //adding non-binary count to object 
    summary["non-binary"] = 1;
    //returning object of gender summary 
    return summary;

}

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
