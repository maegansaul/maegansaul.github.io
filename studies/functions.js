/**
 * FUNCTIONS:
 * 
 * 0. First we must create a function.  Next, we can execute, 
 * or call/invoke a function by stating the function name and passing in arguments.
 * 
 * 1. A function's parameters serve as a placeholder, while arguments are the actual 
 * values passed into the function.  
 * 
 * 2. Syntax for a named function: function name(){};
 * 
 * 3. A function is assigned to a variable by creating a function expression:
 * var name = function(){}
 * 
 * 4. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. 
 * We specify inputs by choosing which data type will be passed.
 * Outputs specifiy what the function should return.
 * 
 * 5. Closures: Functions form closures around the data they house. If an object 
 * returned from the Function and is held in memory somewhere (referenced), that closure
 * stays ALIVE, and data can continue to exist in these closures! (See: our meeting-room
 * app for an example!) (ALSO, see: Understanding JavaScript Closures with Ease)
 */
 
 // 1. Call a function //
 function addMeUp(num1, num2){
  return num1 + num2;
 }
    addMeUp(22, 25); // returns => 47
 //NOTE: The function takes two parameters and once called, adds the arguments
 
 // 2. Function expression //
  let time = function(){
   console.log('It is 1:00 pm!');
  }
    time(); // ptints => It is 1:00 pm!
 /**
  * NOTE: This function expression executes code the same way as a regular function would.
  * The syntax is just a bit different.  This function expression takes no inputs and only
  * prints a message to the screen.
  */