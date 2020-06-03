// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.C
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
return {
    id: id,
    nameFirst: nameFirst,
    nameLast: nameLast,
};
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        //1
        //create length function key
        length: function() {
        //this function will return how many contacts are
            return contacts.length;  //this will return how many items are in the list
        },
        //2. addContact(contact)
        //create a way to add an object with a function that holds a contact
        addContact: function(contact){
        //return an array with the contacts  
            return contacts.push(contact);
        },
        //3. findContact(fullName)
        //create an object with a function that holds a value
        findContact: function(fullName){
        //go through all contacts 
            for(var i = 0; i <= contacts.length; i++){
            //if the first and last name is found within the contacts list
                if(fullName === contacts[i]['nameFirst'] + ' ' + contacts[i]['nameLast']){
                //return the contact object   
                    return contacts[i];
            //return undefined by default
                }else {
                   
                    return undefined;
                }
            }
        },
        //4. removeContact(contact)
        //remove a contact object from the contact list
        removeContact: function(contact){
            for (var i = 0; i <= contacts.length; i++){
            //if a contact object is matching an item in the contact list
                if(contacts[i] === contact){
                //use a method that will have a starting index and state how many to cut off
                    return contacts.splice(i, 1);
                }
            }
        },
        
        
        //add another function to chain
        printAllContactNames: function(){
            //run through all names of the contact list
            for(var i = 0; i < contacts.length; i++){
            //return contact full names separated by line breaks
             contacts[i] + '\n';
            }return contacts;
        }   
    }       
}           





// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
