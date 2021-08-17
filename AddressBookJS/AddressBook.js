//getting the addressbook from another js file
const {Person} = require('./Person');

var prompt = require('prompt-sync')();
//initalizing array to store all contacts
var addressbook=new Array();
do
{
    console.log("Choose what u want to do \n1.Add New Contact to addressbook \n2.Display Contacts \n3.Exit\n");
    var option = parseInt(prompt('Enter the Number : '));

    switch(option)
    {
        case 1:
            console.log("-----Add Contact----");
            //calling add function to add new contact
            AddContact(addressbook);
            break;
        case 2:
            console.log("---Display Address Book----");
            Display(addressbook);
            break;
        default:
            console.log("Exited");
            break;
    }
}while(option <3)//iterate until user want to exit 
function AddContact(addressbook)
{
    let choice;
    do
    {
        //create object for person class 
        let person = new Person();
        try
        {
            //reading data from user
            person.firstName = prompt('Enter first name : ');
            person.lastName = prompt('Enter last name : ');
            person.address = prompt('Enter address : ');
            person.City = prompt('Enter city name : ');
            person.State = prompt('Enter state name : ');
            person.zip = prompt('Enter ZipCode: ')
            person.phone = prompt('Enter phone number : ');
            person.email = prompt('Enter email Id : ');
            //store the details in addressbook array
            addressbook.push(person);
            //asking user to want to add another contact 
            choice=prompt('do u want to add another Contact Say(y/n)');

        }
        catch(ex)//catch exception 
        {
            console.log(ex);
        }
    }while(choice =='Y'||choice == 'y')
}
//print the contacts in addressbook array
function Display(addressbook)
{
    if(addressbook.length>0)//check wether the contact in address book
    {
        for(let i = 0;i<addressbook.length;i++)
        {
            console.log(`Contact ${i+1} :-`)
            console.log(addressbook[i].toString()+"\n");
        }
    }
    else
        console.log("No contacts found!");
}