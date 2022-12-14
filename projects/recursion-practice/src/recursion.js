// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
 //if number is 1 or 0, then return 1 (base-case)
  if (n === 1 || n === 0) {
    return 1; 
    // if it's a negative number, return null 
  } else if (n < 0) {
    return null;
    //if it's any other type of number, number will undergo recursion until base case is met 
  } else {
    return  n * factorial(n - 1);
  }
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array, total = 0) {
  //if there is an empty array, return the accumulated total 
  if (array.length === 0) {
      return total;
  //otherwise, the array will undergo recursion until base case is met 
    } 
    return sum(array.slice(1), total + array[0]);        

};

// 3. Sum all numbers in an array containing nested arrays. (Do not complete)
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(num) { 
  // if number is zero, returning true 
    if (num === 0) {
      return true; 
  }
    // if number is 1, return false
     if (num === 1) {
     return false; 
   } 
      // else if, num is greater than 1, return recursion of num - 2
      else if (num > 1) { 
      return isEven(num - 2);
    }
       // else if, num is greater than 1, return recursion of -num
       else if (num < 1) {
      return isEven(-num)
    }

  
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(number, total = 0) {
    //base
    //exit recursion if number is equal to zero
    if (number === 0) {
      return total;
    }
    //recursion
    //if number is positive, total should subtract 1 to the input number
    if (number > 0) {
      total += (number - 1);
      return sumBelow(number - 1, total);
    }
      //if number is negative, total should add 1 to the input number
    if (number < 0) {
      total += (number + 1);
      return sumBelow(number + 1, total);
    }
  

};


// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]

var range = function(x, y, output = []) {
    //base
      //recursion will stop in these instances 
    if (x - y === 1 || x - y === -1 || x === y || x === (y - 1)) {
    return output; 
    }
    //recursion
      //if x is greater than y, subtract 1 to x 
    if (x > y) {
      //push the value into output
      output.push((x - 1));
       return range(x - 1, y, output);
     }
      //if -x is greater than -y, add 1 to x
     if (-x > -y) {
      //push the value into output
      output.push((x + 1)); 
        return range(x + 1, y, output);
        
      }
  
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  //if exponent is one, base will return 
    if (exp === 1) {
    return base;
  }
  //an exponent of zero equals to 1
  if (exp === 0) {
    return 1;
  }
  //if exponent is negative, convert exponent to positive value then divide base * exponent(base, exp - 1)
  if (exp < 0) {
    exp *= -1;
    return 1 / (base * exponent(base, exp - 1))
  }
  //else, continue recursion until base case is met 
  return base * exponent(base, exp-1)   
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  // if number is equal to one, return true 
  if (n === 1) {
    return true;
    //if number is not even or is equal to zero, it is false 
  } else if (n % 2 !== 0 || n === 0){
    return false;
  }
  //continuing recursion until base is met 
  return powerOfTwo(n / 2);
};


// 9. Write a function that accepts a string a reverses it.
var reverse = function(string, output = "") {
  //base
  //if there is an empty string left, return the reversed string 
  if (string.length === 0) {
  return output; 
  } 
  //recursion
    //if there is no empty string, return the string in reverse 
  output += string[string.length - 1]  
    //invoking reverse to start recursion again until base is met
  return reverse(string.slice(0, string.length - 1), output);

};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // palindrome => racecar
  // capital letters and characters are ignored, therefore, the string is converted into a string without lowercase and no characters
    string = string.replace(/\s/g, '').toLowerCase()
  // base case: if string is empty, the string was a palindrome 
     if (string.length === 0) {
     return true;
  } 
  //continue recursion until base case is met
  if (string[string.length-1] === string[0]) {
    return palindrome(string.slice(1, string.length-1));
  }
  return false;

};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION OR DIVIDE BELOW. The test is looking for any ('/').
var multiply = function(x, y, output = 0) {
    if (y === 0) {
    return output;
  }
    output += x

if (y < 0 && x < 0) {
 return multiply(-x, -y + 1, output);
}
return multiply(x, y - 1, output);

};


// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {

  //base 
  // if both strings are different lengths, it will return false 
  if (str1.length === 0 && str2.length >= 1 || str1.length >= 1 && str2.length === 0)  {
    return false;
   }
   // if each character in the string equal to each other, it will return true
  if (str1.length === 0 || str2.length === 0) {
    return true; 
  }
  //continuing recursion until base cases are met 
  return compareStr(str1.slice(1), str2.slice(1));
};


// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, output = []){

     //base
      //if an empty string, return the final output array 
         if (str.length === 0) {
           return output; 
         }
           //recursion
            //else, the character at the first index pushes to output array
              output.push(str[0]);
            //invokes createArray function until base case is found
            return createArray(str.slice(1), output);
  
};

// 17. Reverse the order of an array
var reverseArr = function (array, output = []) {
        //base
          //if array is empty, return final output
        if (array.length === 0) {
          return output; 
        }
        //recursion
        //else, push the last element in the array into the array, creating a reverse order in output array
          output.push(array[array.length - 1]);
          //invoking reverseArr again to restart recursive process until base is met
         return reverseArr(array.slice(0, array.length - 1), output);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, output = []) {
      //base
      //if output's length is the same length as length, return output array 
      if (output.length === length) {
        return output;
      }
  
     //recursion
      output.push(value);
      return buildList(value, length, output);
  
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, count = 0) {
      //base
         //if array is empty, return the final count of occurrences
      if (array.length === 0) {
            return count; 
      }
      //recursion
        //if the current index of the array is equal to the value, increase the count
     if (array[0] === value) {
           count += 1; 
    }
    //invoking countOccurrence again to restart recursive process until base is met
    return countOccurrence(array.slice(1), value, count);

};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length === 1) {
    return callback(array[0]);
  }
  return [callback(array[0])].concat(rMap(array.slice(1), callback))
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  //output will be the fibonacci number at the index 
  // base case 
    //if number is zero, return 0
  if (n === 0) {
    return 0;
    //if number is 1, return 1
  } if (n === 1) {
    return 1; 
  }
    // if number is negative, return null
  if (n < 2){
   return null;
  }
  //continuing recursion until base case is met
  return nthFibo(n-1) + nthFibo(n-2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, output = []) {
     //base
      //if it's an empty array, then return the final output array
     if (input.length === 0) {
      return output; 
    }
         //recursion 
            //else, push the value at current index of the array into the output array and capitalize it
       output.push(input[0].toUpperCase());
      return capitalizeWords(input.slice(1), output);
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, output = []) {
      //base
        //if array is an empty array, return output
      if (array.length === 0) {
        return output;
      }
      //recursion
        //push the current value in the array into output with a capitalized first letter 
      output.push(array[0].charAt(0).toUpperCase() + array[0].slice(1)); 
        //invoke capitalizeFirst to continue recursion until base case is met 
      return capitalizeFirst(array.slice(1), output); 
    
      
    };

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
//not apart of assignment, attempted on accident
    //base
    if (array.length === 0)  {
      return output; 
  }
  //recursion
if (typeof array[0] === "number") {
  output.push(array[0]);
}
if (Array.isArray(array[0])) {
  output.push(array[0].pop());
}

return flatten(array.slice(1), output);
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {

    // base
    // if string is empty, return object 
  if (str.length === 0) {
    return obj;
    // if the  object has the property, increase the value by 1
  } else if (obj[str[0]]) {
    obj[str[0]] ++;
    // if the object does not have a property, value equals to 1
  } else {
    obj[str[0]] = 1;
  }
  //continue recursion until base case is met 
  return letterTally(str.slice(1), obj);

};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, output = []) {

  //base 
    //if list is an empty array, return the output
        if (list.length === 0) {
           return output;
        }
    //recursion
        //as long as list[0] is not equal to the last value of the output array, then you can push it into output
         if (list[0] !== output[output.length - 1]) {
         output.push(list[0]);
       }
       //invoke compress until base case is met 
         return compress(list.slice(1), output);
  
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, output = []) {
    
  // base
  if (array.length === 0) {
    return output; 
  }
  // recursion 
    // if the current item in the array is zero and the last value of output array is a zero, 
    // then remove it from the array  
  if (array[0] === 0 && output[output.length - 1] === 0) {
             output.pop(array[0]);
  }
         output.push(array[0]);

   return minimizeZeroes(array.slice(1), output);
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, output = []) {
  
    // base case: if array is empty, return final output array 
    if (array.length === 0) {
      return output; 
    }
  //if output is empty, always enter a positive number first 
  if (output.length === 0 || output[output.length - 1] < 0) {
    output.push(Math.abs(array[0]));
  }
  // if the last value in the output array is positive, then push a negative number
  else if (output[output.length - 1] > 0 ) {
    output.push(-Math.abs(array[0])); 
  }
  //if the last value in the output array is negative, then push a positive number 
   else if (output[output.length - 1] > 0 ) {
    output.push(Math.abs(array[0])); 
  }
  //continue recursion until base case is met 
    return alternateSign(array.slice(1), output);
  };

  

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
  var numToText = function(str, output = "") {
    
    // base
    // if string is empty, return the output
    if (str.length === 0) {
      return output; 
    }
    //recursion
      /* if the current value in the string is equal to any of these number values, add their 
      string version to "output" instead */
    if (str[0] === "0" ) {
      output += "zero"
    }
    else if (str[0] === "1" ) {
       output += "one"
    }
    else if (str[0] === "2" ) {
        output += "two"
    }
    else if (str[0] === "3" ) {
        output += "three"
    }
    else if (str[0] === "4" ) {
       output += "four"
    }
    else if (str[0] === "5" ) {
          output += "five"
    }
    else if (str[0] === "6") {
       output += "six"
    }
    else if (str[0] === "7" ) {
       output += "seven"
    }
    else if (str[0] === "8" ) {
         output += "eight";
    }
       else if (str[0] === "9" ) {
         output += "nine";
       }
    else {output += str[0]; 
         }
         //continue recursion until base case is met 
    return numToText(str.slice(1), output);
  
    
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array, output = []) {
  // base case => if array is empty, then sort output array from least to greatest 
    if (array.length === 0) {
      return output.sort((a, b) => a - b); 
    }
    //push every value from given array into output 
    output.push(array[0]);
    //continue recursion until every array value from input is into output 
    return mergeSort(array.slice(1), output);
    
  };



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
