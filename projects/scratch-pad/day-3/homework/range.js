// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
//input: two parameters
//output:range of numbers
//create an loop that will run through all numbers from begining using the parameters
//make an array literal to hold information for later
var rangeArray = [];
//begin loop with start parameter and finish with the end
if (start < end){ 
for (var i = start; i <= end; i++){
//push the values from the loop into the array literal
     rangeArray.push(i);
 
}
//if start is greater than end
}else if (start > end){
//begin from start and finish at end by decrementing 
for (var i = start; i >= end; i--){
//push the values from i into the created rangeArray
   rangeArray.push(i);
}



}    
  return rangeArray;  
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}