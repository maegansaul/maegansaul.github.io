/**
 * SCOPES:
 * 
 * 0. Scoping is finding where functions, variables, and objects are accessible
 * in code at runtime.  
 * 
 * 1. In JavaScript, there are global and local scopes.  Variables that are global 
 * scopes can be accessible everywhere.  Variables bound to a function become local
 * scopes. Local scopes can also branch off into block and function scopes.  
 * 
 * 2. With varibles var, const, and let, all have different characterstics.  Var is 
 * the most lenient of the three.  It is global scoped and is allowed access outside 
 * conditional and loop blocks of code.  However, it becomes function scoped when placed
 * in a function.  It will not be accessible to outside code unless it is placed before
 * the function.
 * 
 * 3. Const and let are different in that const cannot be reassigned and let can.  When
 * it comes to scopes, both are blocked scoped.  If placed in the block of a function, 
 * conditional statement, or loop, variable is accessible to outside code.  They are 
 * 'blocked' in.
 * 
 * 4. If there is a variable in the global scope and a parameter with the same name in 
 * the function body, the parameter will take priority.  When inside the function body,
 * the local scope has more importance.  If the variable is in the global scope, the 
 * variable in the global scope will be accessed.  Any variable that is in the function 
 * will not be able to be reached outside the function.  
 */
 
 //1. Using var//
 if(1 === 1){
  var strictComparison = 'This is a strict comparison';
}
    console.log(strictComparison);  // prints => This is a strict comparison
//NOTE: var is able to print to the console because it is not block scoped.

for(var i = 1; i <= 4; i++){
  console.log(i);
}
/**
 * prints => 1
 *           2
 *           3
 *           4
 */
 //NOTE: Since var is not capable of being block scope, the code runs and var is read
 
 var number = 5;
function whichVariable(number){
return number;
}
console.log(whichVariable(6)); // prints => 6
//NOTE: The parameter takes priority even though there is a variable in the global scope.

// function searchingForVar(){
//   var lostVar = 'Here I am!';
//   return lostVar;
// }
// console.log(lostVar);  // prints => Reference Error
/**
 * NOTE: A reference error is shown on the console because var is stuck in the local scope
 * of the function; it is function scoped.
 */

//2. using const and let//
let videoGames = ['Spyro', 'Mortal Kombat', 'Mario Cart'];
for(let i = 0; i <= videoGames.length-1; i++){
 videoGames[i];
}
console.log(videoGames); // prints => [ 'Spyro', 'Mortal Kombat', 'Mario Cart' ]
/**
 * NOTE: Since let is global scoped, the variable can be accessed inside as well as 
 * outside the code block.
 */

// if(typeof {} === 'object'){
//   const stringSentence = 'let\'s use an object' 
//   console.log()
// }

// console.log(stringSentence); // prints => Reference Error
/**
 * NOTE: const is block scoped inside the if statement.  stringSentence is searched for,
 * but never found.
 */

 

