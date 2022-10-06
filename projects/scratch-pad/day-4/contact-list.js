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
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) { //FACTORY FUNCTIONS

    //factory function returns a contact object 
    return {
            id: id, 
            nameFirst: nameFirst,
            nameLast: nameLast,
            };
} 


function makeContactList() { //FACTORY FUNCTION b/c the return statement at line 48 is returning an object 
    /*
     * You need something here to hold contacts. See length api for a hint:
     */

    //this is our contacts array, where a list of our contacts will be stored 
    var contactList= [];
    

    //returning an object that contains methods that can interact with the contacts array 
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contactList.length;
        },
            addContact: function(contact) {
                contactList.push(contact);
            }, 
            findContact: function(string) { // takes a full-Name string
                //looking through array's, called contactList, values, which contains the contact objects, to see 
                // if any objects have the full-Name string 
                for (var i = 0; i < contactList.length; i++) {
                    //if the first name and the lastname in each object matches the strings, it 
                    //wiil return: 
                   if (contactList[i].nameFirst + " " + contactList[i].nameLast === string) {
                    //returning contact object if found
                    return contactList[i];
                   }
                    //returning contact object if not found
                    return undefined;
        
                }
            },
            removeContact: function(contact) {
                return contactList.pop(contact);
            },
            printAllContactNames: function() {
                for (var i = 0; i < contactList.length; i++){
                 return (console.log(contactList[i].nameFirst + " " + contactList[i].nameLast + "/n"));  
                }
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
