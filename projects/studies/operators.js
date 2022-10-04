/**
 * OPERATORS
 * 
 * 0: Take an action on values. They can assign or compare a variable and  
 * are even used in arithmetic operations. Operators are classified based on 
 * what they are able to do and how many operands they use. There are
 * three classifications of operators are: unary, binary, and ternary. There are
 * also four categories of operators: arithmetic (binary), comparison (binary),
 * assignment (binary), and logical. 
 * 
 * 1: We need to use the assignment operator (=), in order to initialize variables.
 * 
 * 2: Arithmetic operators compute simple math to calculate number values, such as 
 * (+, -, *, /, %).
 * 
 * 3: When comparing two values (two operands), you can use comparision operators to (<, >, <=, >=, ==, !==)
 * resolve these two values as a boolean, as long as ONE value is TRUE or ONE value is FALSE.
 * 
 * 4: When comparing two values (two operands), you can use logical operators to 
 * resolve these two values as a boolean, as long as BOTH values are true (&&), if at LEAST
 * one of them is true (||), or flips the truthiness of a value (!);
 * 
 * 5: Unary operators act on a single operand to produce a new value (typeof, !, -). The type of operator tells you
 * what type of data your value is. The bang operator (!) flips the truthiness of your values, while the (-) unary 
 * minus operator is your negation operator. This is different from your subtraction operator.  
 * 
 * 6: Ternary operators take three operands, which follow the format of (condition ? truthy expression : falsy expression)
 * 
 * 
 * 
 * // 1. assignment operators //
 * // When you initalize a variable, you use an assignment operator (=). 
 **/
     var faveColor = "pink"; 
    console.log(faveColor); // prints => "pink" 

 /**
  * // 2. arithmetic operators //
  * // We can use assignment operators (+, -, *, /, %) to compute math equations with 
 * number values.
 **/
    var add = 3 + 3; 
    console.log(add); // prints => 6 

 /**
  * // 3. comparison operators // 
  * // When comparing two operands, we can use comparison operators (<, >, <=, >=, ==, !==), in order to 
  * resolve the conditions as a boolean (true or false). One condition has to be true and the other has to be false.  
  */
    var isGreaterThan = (1 > 2);
    console.log(isGreaterThan); // prints => false

    var isLooselyEqual = ("Sophia" == "sophia");
    console.log(isLooselyEqual); // => prints true

/**
 * // 4. logical operators // 
 * // When comparing two operands, we can use logical operators, in order to resolve the conditions
 * as a boolean (true or false). Both conditions must be resolved as true (&&), one or the other has to resolve
 * as true (||), or you can use the bang operator (!) to flip the truthiness of a value
 */
    var andOperator = (444 > 222 && 555 > 333);
    console.log(andOperator); // => prints true;

    var orOperator = (1 > 2 || 10 > 5);
    console.log(orOperator); // prints => true

    var bangOperator = (1 != 2);
    console.log(bangOperator); // => prints true

/**
 * // 5. unary operators //
 * // Unary operators act on a single operand to bring a new value (typeof, !, -). 
 */
    var typeOf = typeof "Sophia";
    console.log(typeOf); // => prints string

    var notTrue = (!true);
    console.log(notTrue); // => prints false

    var x = 3
    y = -x; 
    console.log(y); // => prints -3

/**
 * // 6. ternary operators //
 * //The only JS operator that takes in 3 operands. A condition followed by a question mark (?), followed by 
 * an expression that is executed to see if the condition is truthy, followed by a colon (:), and finally the expression
 * to execute if the condition is falsy. => (condition ? truthy expression : falsy expression)
 * 
 * Translation: If the person's age is over 21, they can take wine. If they are not, they take soda!
 * 
 */
    var age = 16; 
    var beverage = age >= 21 ? "wine" : "soda";
    console.log(beverage); // prints => "wine"
 
