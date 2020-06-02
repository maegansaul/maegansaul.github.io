// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
//input: value
//output: boolean value 
//if the value is truly an array, return true
if (Array.isArray(value)){
    return true;
}else{
//return false if the value is not strictly an array
    return false;
}
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
//create conditional statement 
//input: any value
//output: boolean value true or false
//C/E: typeof operator will return 'object' for array, null, objects, and Dates
 
 //use strict comparison operator to determine if the value is an array
if (Array.isArray(value) === true){    //if the value is truly an array, return false
    return false;
}else if (value === null){          //if value is null, return false 
    return false;
}else if (value instanceof Date === true){  //if value is strictly a date, return false
    return false;
}else if (typeof value === "object"){    //if the value is strictly an object, return true
    return true;
}else{
    return false;   //return false if none of the requirements apply
}
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
//input: value
//output: boolean 
//if the value is either an array or object, return true
if(isArray(value) === true || isObject(value) === true){ 
    return true;
}else{      
//return false if the value is neither an array or object
    return false;
}
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
//input: value
//output: returned value as a string
//if the value is an array
 if(isArray(value) === true){
//return 'array'
     return 'array';
//if the value is an object
 }else if(isObject(value) === true){
//return 'object'
     return 'object';
//if the value is null
 }else if(value === null){
//return 'null'
     return 'null';
//if the value is a date
 }else if(value instanceof Date){
//return 'date'
     return 'date';
 }else{
//if value is none of the previous values, return the type of value it is 
     return typeof value;
 }

 
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
