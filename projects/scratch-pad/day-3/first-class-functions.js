// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //input: base
    //output: boolean value on a passed or failed test
    //return a function that determines if a value is greater than the base
        return function (value){
    //if the value is greater than the base, return true
            if (value > base){
                return true;
    //return false if otherwise
            }else{
                return false;
            }
        }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //input: base
    //output: boolean value 
    //return a function that tests whether the value is less than the base
    return function (value){
    //if the value is less than the base
        if (value < base){
    //return true
            return true;
    //return false if the previous statement is not true
        }else{
            return false;
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
//input: startsWith character
//output: boolean value 
//return a function that determines whether a string starts with the charcter from startsWith  
  return function (string){
  //create if else statement to determine if the first letter of string starts with the startWith character
        if(string[0].toLowerCase() === startsWith.toLowerCase()){
            return true;
        } else {
            return false;
        
    }
  
  } 
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    //input: endsWith character
    //output: boolean value that determines if the string ends with the endsWith character
    //return function that decides if the string ends with the endsWith character
    return function (string){
        if (string[string.length-1].toLowerCase() === endsWith.toLowerCase()){
            return true;
        }else{
            return false;
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
//input: two parameters
//output: array of modified strings
//return an array of the strings modified
var arrayToHoldModifiedStrings = [];
//for loop will go through all values of the string
    for (var i = 0; i <= strings.length-1; i++){
//push the modified strings (modified from the loop) into the array
        arrayToHoldModifiedStrings.push(modify(strings[i]));
    }
//return new array 
    return arrayToHoldModifiedStrings;
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
//input: two parameters
//output: boolean value based on if all strings passed the test
//index starts at 0 and ends at the last element of the string
    for(var i = 0; i < strings.length; i++){
 // if the string does not pass the test, return false
        if (test(strings[i]) === false){
            return false;
        }
    }
    return true;
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}