/**
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use 
 * variables. Variables are named identifiers that can point to values of a
 * particular type, like a Number, String, Boolean, Array, Object or another 
 * data-type.  Variables are called so because once created, we can CHANGE the 
 * value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keywords var, const, or let, followed 
 * by a name (id or alias) for our variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization 
 * (or assignment).
 *
 * 3. Hoisting is the idea that variables and declarations are 'lifted' to 
 * the top of the scope.  Javascript sets up memory space for the variables
 * and functions.
 */

// 1. declaration //
/**
 * At the declaration phase, the variable myName is undefined because we have 
 * NOT initialized it to anything
 */

//using var//
// var myName;
// console.log(myName); // prints => undefined


//using const//
// const myAge;
//console.log(myAge); // prints => Syntax error
//There is a syntax error in the declaration phase because const must be initialized//
 
 
//using let//
 // let favoriteColor;
 // console.log(favoriteColor); // prints => undefined


// 2. initialization or assignment //
/** 
 * The assignment phase gives a value to the variable with the 
 * use of an assignment = operatior
 */

//using var//
var myName = "maegan";
console.log(myName); // prints => maegan


//using const//
const myAge = 24; 
console.log(myAge); // prints => 24;


//using let//
let favoriteColor = "orange";
console.log(favoriteColor); // prints => orange


// 3. re-assignment //
/**
 * The re-assignment phase gives another value to
 * a previously assigned variable. In this phase, values
 * for var and let can be reassigned, but const is not 
 * allowed to have a changed value.
 */
 
//using var//
myName = "jene";
console.log(myName); // prints => jene


//using const//
// myAge = 25;
// console.log(myAge); // prints => Type error
//const does not allow the changing of values once assigned


//using let//
favoriteColor = "green";
console.log(favoriteColor); // prints => green


// 4. hoisting //
/**
 * Var, const, and let declarations are hoisted but not initialized.
 * Var is the only variable to be initialized with undefined. 
 * Const and let cannot be accessed before initialization.
 */
 
//using var//
console.log(goodShow); // prints => undefined
 var goodShow = "Ozark";
 
 
//using const//
// console.log(goodMovie); //prints => Reference Error
// const goodMovie = "Toy Story 4";


//using let//
// console.log(hobby); //prints => Reference Error
// let hobby = 'dancing';


 