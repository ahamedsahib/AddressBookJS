//getting the addressbook from another js file
const {Person} = require('./Person');

var prompt = require('prompt-sync')();
//creating object for the class
let person = new Person();
try
{
person.firstName = prompt('Enter first name : ');
person.lastName = prompt('Enter last name : ');
person.address = prompt('Enter address : ');
person.City = prompt('Enter city name : ');
person.State = prompt('Enter state name : ');
person.zip = prompt('Enter ZipCode: ')
person.phone = prompt('Enter phone number : ');
person.email = prompt('Enter email Id : ');
console.log(person.toString());
}
catch(ex)
{
    console.log(ex);
}