/**
 * DATATYPES:
 * 
 * 0. Javascript has built in data types, a way of communicating with the computer
 * to get expected results and values. Each data type has an efficient way of 
 * completing tasks.
 * 
 * 1. Listed below are data types that are important to the javascript language.
 * 
 * 
 */
 
 
 //1. Number//
 /**
  * Numbers are data types that can be included in mathematical problem solving.
  * Numbers can be negative or positive, and have decimals.
  */
  
  var firstNumber = 6 + 4;
  console.log(firstNumber); //=> prints 10
  
  //2. String//
  /**
   * A string can store text inside single or double quotation marks.
   * With the use of contatenation, strings can be combined to form another value.
   * When characters are stored in a string, it becomes a string object.  A string
   * also has array properties, using bracket notation to access individual characters.
   */
   
  var firstName = "Maegan";
  console.log("Hello, my name is " + firstName); 
  //prints => "Hello, my name is Maegan"
  /**
   * NOTE: "Hello, my name is " will be meshed with the value of firstName
   * by using the addition operator +  to concat the two values.
   * (see 'arithmetic operators' to learn more about the addition operator)
   */
  
  //3. Boolean//
  /**
   * A boolean is a data type that returns true or false, depending on the 
   * truthiness or falsiness of the particular value.  Values can be false if
   * they are the number 0,  a null or undefined value, an empty string, and 
   * of, false.  Any other value is a true value.  Examples of true booleans are
   * negative numbers, decimals, whole numbers, positive numbers, and true. One
   * way to determine if a value is true or false is to use the Boolean function 
   * built in JavaScript.  Another way booleans can be used is by incorportating 
   * mathematical expressions.
   */
   
   var emptyString = Boolean('');
   console.log(emptyString); // prints => false
   //NOTE: An empty string is a falsy value, so the console prints false
   
   var compareNumbers = 10 + 5 > 5 + 5;
   console.log(compareNumbers); // prints => true
   
   //4. Array//
   /**
    * Arrays are also known as lists because they can hold an inventory of an 
    * unlimited amount of values.  The correct syntax for an array is a pair 
    * of brackets (one opening and one closing). A comma separates values created
    * in the array.  Arrays can hold other arrays, string values, booleans, objects, 
    * and numbers.  An array can be accessed with bracket notation to retrieve a value.
    * When retrieving a value, remember that an array is index based.  The starting 
    * value of an index is 0.  Arrays also have a length property that will return 
    * the number of values it has.
    */
    
    var groceryList = ['grains', 'fruit', 'meat', 'vegetables' ];
    console.log(groceryList); // prints => [ 'grains', 'fruit', 'meat', 'vegetables' ]
    console.log(groceryList[1]); // prints => fruit
    console.log(groceryList[1].length); // prints => 5
    /**
     * NOTE: Combining bracket notation and the length property gives the ability to 
     * access a specific value in an array while determining the number of characters a 
     * value holds.
     */
    
  //5. Object//
  /**
   * This data type goes further than simply listing values.  An object is a more effective  
   * way of pairing multiple values with a single name they have in common.  For example,
   * creating an array of movie names that fall under different genres does not match the 
   * type of formatting that will make sense in an array.  Placing this information in an
   * object will group together the correct values.  Objects can hold all other data types,
   * including itself.  Objects are created with an open and closing curly brace.  Between 
   * the braces are the key-value pairs (also called properties), separated by a colon.  
   * If there are more than one set of key-value pairs, the next set will be separated by
   * a comma. A semicolon is placed after the closing curly brace to declare the end of 
   * the object.  Objects can be accessed by bracket or dot notation, but only bracket 
   * notation can be used if more than one value needs to be accessed.
   */
   
   var movieGenres = {
    Horror: ['The Conjuring', '28 Days Later', 'Hereditary'],
    Comedy: [{'The Hangover Trilogy': ['The Hangover', 'The Hangover Part II', 
    'The Hangover Part III']}, 'Bridesmaids', 'Booksmart', 'Coneheads'],
    Action: 'Deadpool',
    SciFi: 'Ex Machina'
    
   };
   console.log(movieGenres['Comedy'][3]); // prints=> Coneheads
   
  //6. Function//
  /**
   * Functions are a special data type that has space for a block of code to be executed. 
   * They are defined by the keyword function, the name of the function, a set of opening
   * and closing parenthesis for parameters, and curly braces that serve as a code block. 
   * Functions may or may not take in parameters, which are values that serve as 
   * placeholders until the function is called with an argument(s).  In order to have an 
   * output from a function, there must be a return statement that will produce some sort 
   * of code.  The return statement should always be the last line of code run.  Once the 
   * return statement is reached, nothing after this line will be executed.  Functions are 
   * called in order to produce an output from the return statement.  To call/invoke a 
   * function, state the function name followed by parenthesis.  Between the parenthesis, 
   * input all arguments that are necessary for the function.
   */
   
   function inputName(name){
    return 'My name is ' + name;
   }
   inputName('Maegan');
   console.log(inputName('Maegan')); // prints => My name is Maegan
   
  //7. Undefined//
  /**
   * A way Javascript tells its user there is no assigned value is through the data type 
   * undefined.  Shown previously in the varible section, variables let and var will
   * return undefined if there is no assigned value. If a function is called that takes 
   * a parameter and has no argument, that value will return undefined. 
   */
   function inputName(name){
    return 'My name is ' + name;
   }
   inputName();
   console.log(inputName()); // prints => My name is undefined
   
  //8. Null//
  /**
   * The null data type was designed to create an empty space for a value.  In a way, null 
   * is nothing, or maybe even thought of as zero, since these values will return a false 
   * boolean.  Placing null as a value will not throw an error.  It will simply return 
   * null when it has been accessed.  
   */
   
   var candyNames = ['m&ms', 'reeses', null, 'turtles'];
   console.log(candyNames); // prints => [ 'm&ms', 'reeses', null, 'turtles' ]
   
  //9. NaN//
  /**
   * 'Not a number' is returned when a mathematical problem cannot be solved, or to 
   * determine if something is not a number.  
   */
   // let number = 4 + undefined;
   // console.log(number);  // prints => NaN
   
  //10. Infinity and -Infinity//
  /**
   * Infinity is a numeric value representing positive infinity and -infinity 
   * is a numeric value that represents -infinity.  When an value reaches its upper 
   * limit of floating point numers or its lower limit of floating floating point 
   * numbers, these values are displayed, respectively. 
   */
   var positiveInfinity = 1.797693134862315E+309 + 5;
   console.log(positiveInfinity);   //prints => Infinity
   
   var negativeInfinity = -1.797693134862316E+308 - 5;
   console.log(negativeInfinity);   //prints => -Infinity
   
  //11. What is the difference between primitive/simple and complex data types?
  /**
   * Primitive data types are values that can be directly contained by variables. They are
   * unchanging over time (immutable), and are copy by value. Do not confuse a primitive 
   * value with a variable that has been assigned a primitive value. Examples of primitive 
   * data types are booleans, strings, numbers, null, NaN, and undefined. Complex data types
   * are mutable data types that are indefinite in size and copy by reference.  Examples 
   * include objects, arrays, and functions.
   */
   //primitive data type//
  var primValue = 47;
  console.log(primValue); // prints => 47
   //complex data type//
  var gumBrands = ['juicy fruit', 'doublemint', 'extra'];
  console.log(gumBrands); // prints => [ 'juicy fruit', 'doublemint', 'extra' ]
   
   
  //12. What is the difference between copy by value and copy by reference?
  /**
   * As previously stated, 
   * primitive data types are copy by value, and complex data type are copy by reference.
   * Copy by value is the direct storage of memory by the variable. Since complex data types
   * take up so much memory, a variable is unable to hold them (therefore, they are copied
   * by reference). 
   */
   
  //copy by value//
  var famousPerson = 'Issa Rae';
  var famousPeople = famousPerson + ',' + " Drew Brees";
  console.log(famousPerson); //prints => Issa Rae
  console.log(famousPeople); //prints => Issa Rae, Drew Brees
   
  //copy by reference//
   var appleProducts = ['macbook', 'iphone', 'airpods', 'beats', 'ipad'];
   appleProducts.push('watch');
   var appleSalesList = appleProducts;
   console.log(appleSalesList); 
   //prints => var appleProducts = [ 'macbook', 'iphone', 'airpods', 'beats', 'ipad', 'watch' ]
  
   
   /**
    * NOTE: The appleProducts variable contains an array, which means the variable cannot
    * hold the actual value, so the variable will store a reference of the value.
    */
  