/**
 * STRING MANIPULATION:
 * 
 * 0. String manipulation is the use of properties and methods on strings
 * to manipulate values.  
 * 
 * 1. Properties are the characteristic values of an object.  They are the
 * key-value pairs.  Since keys and values create a property, they can be 
 * deleted, altered, and added to. In other words property is the information
 * an object has.  
 * 
 * 2. Methods are actions that can change an object.  They are functions that 
 * belong to an object.
 * 
 * 3. Even though strings are primitive values, when they are incorporated 
 * into methods and properties, the computer now recognizes the new value 
 * as an object.
 * 
 * 4. The use of operators will manipulate a string by altering the previous
 * value in some type of way.
 */
 
 //1.String Manipulation With Operators//
 
 /**
  * Using operators can create and manipulate strings.  
  */
  
  let expo = 4;
  expo **= 2;
  console.log(expo); // prints => 16
  /**
   * NOTE: The exponentiation assignment operator takes the exponent of
   * a chosen value.
   */
   
  let compare = (4 !== 2);
  console.log(compare);   // prints => true
  //NOTE: the bang operator gives the opposite boolean value
 
  var pieceOfSentence = 'It\'s a nice day';
  var fullSentence = pieceOfSentence + ' ' + 'for a walk in the park';
  console.log(fullSentence); // prints => It's a nice day for a walk in the park
  /**
   * NOTE: The concatenation/string operator (+) combines the string values 
   * from pieceOfSentence with the values of fullSentence variable.  Creating 
   * a space between two quotation marks forms an empty string that provides 
   * separation for the newly introduced values.
   */
   
  //2. String Manipulation Using Methods (String Methods)//
  
  
  var summerTime = "Time for a crawfish boil!";
  console.log(summerTime.search('crawfish')); // prints => 11
 /**
   * NOTE: An example of string methods is using a method such as search() that
   * will locate and return the position of the value of a string. 
   */
 
  var crawfishBoil = ['crawfish', 'shrimp', 'potatoes', 'corn'];
  console.log(crawfishBoil.slice(0,2)); // returns => [ 'crawfish', 'shrimp' ]
 /**
  * Slice method will take out a string and return the pulled values.
  * The first parameter represents the starting value that will be returned to
  * the console.  The second parameter is the final value.  The value before the
  * end parameter is pulled.
  */
 
  const rep = 'replace me';
  rep.replace('me', 'this'); //returns => replace this
  /**
   * NOTE: The replace method does not change the original value of the string.
   * It simply returns a new string.
   */
  
  const toUpper = 'uppercase';
  toUpper.toUpperCase();  // returns => UPPERCASE
 //NOTE: this method changes the value to all uppercase letters
 
 const toLower = 'LOWERCASE';
 toLower.toLowerCase();  // returns => lowercase
 //NOTE: this method changes the value to all lowercase letters
 
 
 let char = 'What character will be returned from this string?'
 char.charAt(8);  // prints => r
 //NOTE: charAt() returns the character from a string depending on the chosen index
 
 const string = 'Take out a character from this string';
 string.substring(0, 8);  // returns => Take out
 