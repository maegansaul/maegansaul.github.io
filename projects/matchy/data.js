/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create an animal variable with an object literal value
var animal = {};
//use dot notation to give animal species key and a corresponding value
animal.species = 'feline';
//use bracket notation to give animal a name key with a value
animal['name'] = 'Lester';
//give animal a key called noises with an empty array
animal.noises = [];
//print animal object to the console
console.log(animal);




//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a variable named noises with empty array
var noises = [];
//add noises to the array
noises.push('meow');

noises.push('meowmeow');

noises.unshift('roar');

noises.push('ROAAARR');

noises.push('Raaaer');
console.log(noises.length);

console.log(noises.length-1);
console.log(noises);



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//assign noises 
animal['noises'] = noises;
animal.noises = 'memeoww';
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * Array and bracket notation
 * 2. What are the different ways of accessing elements on arrays?
 * They can be accessed through bracket notation, pop, and shift methods.
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animal);
var duck = {
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};
animals.push(duck);
console.log(animals);
var hamster = {
    species: 'hamster',
    name: 'Totoro',
    noises: ['squeak', 'poof']
};
animals.push(hamster);
var snake = {
    species: 'reptile',
    name: 'slytherin',
    noises: ['ssss', 'silence']
};
animals.push(snake);
console.log(animals);
console.log(animals.length);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//choose an array to hold the list of frineds that will be in there
var friends = [];
//create a function called getRandom with the animals array and returns the random index
function getRandom(array){
    return array[Math.floor(Math.random() * array.length)];
}
friends.push(getRandom(animals));
console.log(friends);
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}