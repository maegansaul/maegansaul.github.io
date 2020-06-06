/**
 * LOOPS:
 * 
 * 0. Loops are used to repeat an action until the conditions are no longer valid,
 * or there are no more values.  A loop can return a different value everytime the 
 * code iterates.  The most common loops are for, while, and for-in loops.  
 * 
 * 1. For loops run through a block of code and have a starting and stopping index. 
 * For loops are good to use in functions and arrays.  This loop begins with the 
 * keyword for, followed by a starting condition, stopping condition, and incrementor.
 * Underneath the condition is a code block.
 * 
 * 2. While loops are used less that for loops since they serve the same purpose.
 *They have a code block that will run as long as the condiitons are valid.
 *The keyword while starts the loop followed by the condition and a code block. 
 * 
 * 3. For-in loops are used to collect properties from an object.  They should only 
 * be used with objects.  Console.log(key) accesses the keys to the object.
 * Console.log(Object[key]) accesses the values.
 */
 
 //1. Looping forward and backward//
 for(var i = 0; i <=10; i++){
  console.log(i);            
}
 /**
  * prints =>    0
  *              1
  *              2
  *              3
  *              4
  *              5
  *              6
  *              7
  *              8
  *              9
  *              10
  */
  
  
 for(var i = 10; i >=0; i--){
  console.log(i);
  }
  /**
   * prints => 10
   *            9
   *            8
   *            7
   *            6
   *            5
   *            4   
   *            3
   *            2
   *            1
   *            0
   */

 //2. Looping over an array//
 
 //loop forward//
 var theLoopingArray = [];
 for(var index = 0; index <= 8; index++){
   theLoopingArray.push(index);
 }
   console.log(theLoopingArray); // prints => [0, 1, 2, 3, 4, 5, 6, 7, 8]

//loop reverse//
  var boardGames = ['Sorry', 'Trouble', 'Taboo', 'Compatibility', 'Operation'];
    for (var i = boardGames.length -1; i >= 0; i--){
    console.log(boardGames[i]);
  }
  /**
   * prints => Operation
   *           Compatibility
   *           Taboo
   *           Trouble
   *           Sorry
   */  

//3. Loop over an object

  var carInfo = {
   make: 'Chevrolet',
   model: 'Impala',
   color: 'pearl'
  
  };
  
   for(var key in carInfo){
     console.log(key);
 }
 /**
  * prints => make
  *           model
  *           color
  */
  
  for(var key in carInfo){
    console.log(carInfo[key]);
 }
 /** prints => Chevrolet
  *            Impala
  *            pearl
  */

  
 
 