/**
 * OPERATORS:
 * 
 * 0. In Javascript, operators perform actions on values to produce a result.  Operators 
 * are effective in manipulating values and solving problems.  They have been separated 
 * into different groups depending on their capabilities.  Operators depend on operands, 
 * which is what operators act upon.  Operands are like the nouns of a sentence, 
 * operators are the verbs.
 *
 * 1. Assignment operators assign values to its operand.  Assignent operators play
 * a part in initializing variables and creating function expressions.  Assignment 
 * operators are recognized by addition, subtraction, division, mutiplication, remainder,
 * and many more assignments.
 *
 * 2. Arithmetic operators add, subtract, multiply, divide, provide remainders, and 
 * much more. 
 * 
 * 3. Comparison operators compare different values and output a boolean value.
 * Examples of comparison operators are <, >=, ===, and ==.
 * 
 * 4. Logical operators (&&, ||, !), like comparison operators, return boolean values 
 * depending on the content.
 * 
 * 5. Unary operators contain only one operand. Types of unary operators are !, typof, 
 * and -.
 * 
 * 6. Ternary operators take three operands: 
 *      1.) A condition with a question mark
 *      2.) An expression that executes if the block of code is true, with a colon
 *      3.) An expression that executes if the block of code is false
 * If a condition resolved to true, the first expression will run.  If the condition is 
 * false, the second expression runs. 
 */
 
 //1. Assignment Operators//
 /**
  * When using the assignment operator, a value can be assigned to a variable.
  * The same operator also helps reassign values.
  */
  var funnyNumber = 24;
  funnyNumber = 25;
  console.log(funnyNumber); //prints => 25
  
  let numeral = 10;
  let divOperator = numeral /= 5;
  console.log(divOperator);  // prints => 2
  
  let oneNumber = 20;
  let mulitplyByTwo = oneNumber *= 2;
  console.log(mulitplyByTwo); // prints => 40
  
  let thisRemains = 22/4;
  thisRemains %= 5;  // prints => 0.5
  //NOTE: The remainder assignment operator takes the remainder of the calculation
   
 //2. Arithmetic Operators//
 /**
  * Arithmetic operators can solve complex problems and follow the order of operations.
  */
  var bigMath = 23 + (2 * 4 / (45+ 87 - 63 * (4/2)));
  console.log(bigMath); // prints => 24.333333333333332
   
 //3.  Comparison Operators//
 /**
  * Comparison operators with two equal signs represent equality signs (==).  
  * Using strict equality signs (===) is recommended to prevent unusual 
  * outcomes in code.
  */
  console.log(0 == false);  // prints => true
  console.log(0 === false); // prints => false
   
 //4. Logical Operators//
 /**
  * Double ampersand (&&) operands must contain true on  both sides.
  * Double pipe (||) operators depend on the truthiness of only one value.
  * Bang operators convert the value to the opposite boolean
  */
  console.log(4 + 4 > 2 && 26 <14);  // prints => false
  //NOTE: since both conditions are not true, the statement is false
  console.log(4 + 4 > 2 || 26 <14);  //prints => true 
  //NOTE: only one condition needed to be true to return a true value
  console.log(!(4)); // prints => false
  /**
   * NOTE: Since 4 is a nonzero number, it has a truthy value, but the bang operator
   * flips the truthy value to false.
   */
    
 //5. Unary Operators//
 /**
  * A unary operator will take in a single operand to perform an operation.  The proper
  * syntax for this operator is placing the operand before or after the operator, depending 
  * on the operator. 
  */
  //typeof//
  function returnValue(value){
      return value + 5;
  }
  returnValue(5);
  console.log(typeof returnValue); // prints => function
  //NOTE: Using the typeof operator will return the data type of the value 
  //negate//
  var negate = -true;
  console.log(negate); // prints => -1
  /**
   * NOTE: The unary negation operator will convert a non-number data type to an
   * actual number with the prescence of a negative sign as an input and output.
   */
  
 //6. Ternary Operators//
 /**
  * This conditional operator is similar to if else if statements.  Using the syntax 
  * stated earlier will check if a value is true or false and determine the execution 
  * of code.
  */
  var weather = 'sunny';
  console.log(weather ? 'beautiful day' : 'it\'s raining');
  // prints => beautiful day
  /**
   * NOTE: '?' represents 'if' and ':' represents 'else'.
   * Since the condition resolves to true, the first section of code will execute.
   * If a different value were assigned to weather, the second section of code would
   * have executed.
   */
  
   