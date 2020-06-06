/**
 * CONTROL FLOW:
 * 
 * 0. JavaScript uses control flow to move through lines of code containing
 * statements.  A code will flow depending on truthiness or falsiness of a 
 * statement.  Code will flow through a datatype or value repeatedly as 
 * long as a condition is still true. Loops and conditional statements
 * are a part of control flow.  Conditional statements can be expressed through
 * if, else-if, else, and switch statements.
 * 
 * 1. If statements begin the condition that is to be tested. When the if 
 * statement is true, the block of code that correlates will be executed.
 * 
 * 2. When an if statement returns false, an else-if statement continues the 
 * flow with another block of code matching.  There is no limitation for the 
 * amount of else-if statements that can be created.  
 * 
 * 3. If all other statements fail, an else statement will be ran last as default.
 * With the if else condition as a whole, they are more reliable in situations 
 * that require a boolean value.
 * 
 * 4. Switch statements perform the same actions as the previous statements.
 * The conditions determine which code block will run.  Switch statements are used 
 * in situations that have fixed data values.
 */
 
//1. If statements//
/**
 * The proper syntax for an if statement is the keyword if followed by a parenthesis
 * and open and closing curly braces. The condition that will be tested on the 
 * truthiness and falsiness will be placed between the parenthesis. The block of 
 * code waiting to be executed is placed between curly braces.
 */
  
    if(3 + 3 === 7){
    console.log('This is only an if statement');
    }
  // NOTE: The code above does not run since the condition is not true 
  
//2. else-if statements//
/**
 * Else-if statements follow behind if statements and other else-if statements.
 * These statements are placed behind closing curly braces of the conditional code 
 * before them to fall next in line.  Else-if statements begin with the keyword 
 * else-if and are followed by the same set up as if statements.
 */
   
    var weather = 'sunny';
    if(weather === 'raining'){
        console.log('Take cover');
    }else if(weather === 'humid'){
        console.log('I\'ve had better weather');
    }else if(weather === 'sunny'){
        console.log('Enjoy the city!');
    }
    //prints => Enjoy the city!
    
//3. else statements//
/**
 * Serving as a default code, else statements will be ran if the previous lines 
 * of code are false.  Parenthesis are unnecessary; only curly braces are needed to 
 * execute the final code block.
 */
 
  var menuOrder = 'cheeseburger';
  if(menuOrder === 'salad'){
    console.log('I would like a salad');
  }else if(menuOrder === 'tuna steak'){
    console.log('I would like to order tuna steak');
  }else{
    console.log('I would like to order a cheeseburger');
  }  
// prints => I would like to order a cheeseburger

//4. Switch Statements//
/**
 * Switch statements begin with the keyword switch followed by parenthesis that will 
 * contain the expression.  Curly braces follow to create a code block that holds 
 * cases and breaks.  At the end of each conditional statement is a line of code that
 * will break the continuation of the code if true. 
 */

  var movieChoice = 'Toy Story 4';
  switch (movieChoice){
    case 'The Cube':
      console.log('Thriller movie choice')
      break;
    case 'Uncut Gems':
      console.log('Drama movie choice')
      break;
    case 'Toy Story 4':
      console.log('Family friendly movie choice');
      break;
    }
    // prints => Family friendly movie choice


    