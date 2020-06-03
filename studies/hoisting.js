/**
 * HOISTING:
 * 
 * 0. Hoisting is the idea that variables and functions are lifted to the top
 * of code at runtime, which stores memory.  Even if functions and variables are 
 * local or global scoped, they will still be hoisted. Hoisting occurs before 
 * the execution of code.
 * 
 * 1. The declarations of the var variables are hoisted without their value.  
 * When console logged before the variable is assigned, undefined will print 
 * to the screen because the variable has not been given a value yet.  
 * 
 * 2. let and const access the temporal dead zone because these variables cannot 
 * be accessed before they are created.  If attempting to access either variable 
 * before the code runs through their assigned errors, a reference error will be
 * thrown to the console.
 * 
 * 3. All of the information from function declarations are hoisted.  This includes 
 * the execution of the code, so a function can be called before the function is 
 * declared.
 * 
 * 4. Function expressions are hoisted like a var variable.  This code will return
 * undefined if there are attempts to access it before creation.  The variable is 
 * hoisted, but the function definition is not.
 * 
 * 5. The JS interpreter reads through code to interpret what the programmer 
 * intends to do.  As the interpreter scans through code, it will throw any errors 
 * it comes across, providing a location.  JS interpreter's take code from the
 * programmers end and translates into the binary system that the computer 
 * recognized.
 */
 
 //1. var hoisting//
 
//console.log(hoistingExample);             // prints => undefined
//var hoistingExample = "I'm hoisted to the top!"; 
/**
 * NOTE: Even though the declaration for var is hoisted for memory, the assigned 
 * value is not hoisted with it.
 */
 
 //2. let and const hoisting//

// console.log(foodTaste);   //prints => Reference Error
// let foodTaste = 'hibachi';
/**
 * NOTE: The interpreter does not yet have access to the foodTaste information
 * before it has been initialized.

//console.log(cardioExercise);   //prints => Reference Error
//const cardioExercise = 'jump rope';
/**
 * NOTE: Just like in the let example, the interpreter cannot access the value for
 * const before it is assigned.
 */
 
 //3. Function declaration hoisting//
 var lostVar = 'Here I am!';
 console.log(searchingForVar());  // prints => Here I am!
 function searchingForVar(){

 return lostVar;
 }
 /**
  * NOTE: Because function declarations are hoisted with their values, the
  * interpreter is able to run through all information.
  */
  
 //4.Function expression hoisting//
 console.log(topHoist);             // prints => undefined
 var topHoist = function(){
  console.log('Did I get hoisted?');
 }
 /**
  * NOTE: Just as a function expression acts as variable when hoisting,
  * undefined prints to the console.  During runtime, only the declaration
  * is hoisted in memory for the interpreter to run through the rest of the 
  * code later.
  */

 
 

 