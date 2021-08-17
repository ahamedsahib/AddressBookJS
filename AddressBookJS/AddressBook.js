//getting the addressbook from another js file
const {Person} = require('./Person');

var prompt = require('prompt-sync')();
var choice;
//initalizing array to store all contacts
var addressbook=new Array();
do
{
    console.log("Choose what u want to do \n1.Add New Contact to addressbook \n2.Update Contact details \n3.Delete Contact\n4.Display Contacts \n5.Total Contacts in Address Book\n6.Exit\n");
    var option = parseInt(prompt('Enter the Number : '));

    switch(option)
    {
        case 1:
            console.log("-----Add Contact----");
            //calling add function to add new contact
            AddContact(addressbook);
            break;
        case 2:
            console.log('-----Edit Contact------');
            UpdateContact(addressbook);
            break;
        case 3:
            console.log("---Display Address Book----");
            Display(addressbook);
            break;
        case 4:
            console.log("---Delete Contact----");
            DeleteContact(addressbook);
            break;
        case 5:
            console.log("---Total contacts------");
            //count the number of contacts using reduce method
            console.log(`Total contacts${addressbook.reduce((totalContacts) => totalContacts+=1,0)}`);
            break;
        default:
            console.log("Exited");
            break;
    }
}while(option <6)//iterate until user want to exit 
function AddContact(addressbook)
{ 
    do
    {
        //create object for person class 
        let person = new Person();
        try
        {
            //reading data from user
            person.firstName = prompt('Enter first name : ');
            person.lastName = prompt('Enter last name : ');
            if(addressbook.find(x=>x.firstName == person.firstName && x.lastName==person.lastName)==undefined)
            {
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
            else
            {
                console.log('Name Already exists try Changing name');
            }

        }
        catch(ex)//catch exception 
        {
            console.log(ex);
        }
    }while(choice =='Y'||choice == 'y')
}
//UC-4 Modify existing details
function UpdateContact(addressbook)
{   
    var firstName = prompt('Enter first name :');
    var modifyResult = addressbook.find(x=>x.firstName == firstName);
    if(modifyResult == null)
        console.log("No Such Contact Found!")
    else
    {
        
        do
        {
        console.log("1.modify firstname \n2.modify lastname \n3.modify address \n4.modify city \n5.modify statename \n6.modify ZipCode \n7.modify Phone number \n8.modify email\n9.Back to Previous Menu");
        try{
            var option = Number(prompt('Choose Number to do modification: '));
            switch(option)
            {
                case 1:
                    modifyResult.firstName = prompt('Enter new First Name: ');
                    console.log("First Name updated");
                    break;
                case 2:
                    modifyResult.lastName = prompt('Enter new last Name: ');
                    console.log("last Name updated");
                    break;
                case 3:
                    modifyResult.address = prompt('Enter new address: ');
                    console.log("address updated");
                    break;
                case 4:
                    modifyResult.City = prompt('Enter new City Name: ');
                    console.log("City Name updated");
                    break;
                case 5:
                    modifyResult.State = prompt('Enter new State Name: ');
                    console.log("State Name updated");
                    break;
                case 6:
                    modifyResult.zip = prompt('Enter new zipCode: ');
                    console.log("Zip updated");
                    break;
                case 7:
                    modifyResult.phone = prompt('Enter new Phone Number: ');
                    console.log("Phone number updated");
                    break;
                case 8:
                    modifyResult.email = prompt('Enter new Email ID: ');
                    console.log("Email Id updated");
                    break;
                default:
                    console.log("Exited!!");
                    break;
            }
            choice=prompt(`do u want to further change anything in this ${firstName} contact Say(y/n)`);
        }
        catch(ex)
        {
            console.log(ex);
        }
        }while(choice =='Y'||choice == 'y')
    }
}
function DeleteContact(addressbook)
{
    var firstName = prompt('Enter first name :');
    //finding the name is found in address book
    var foundContact = address.find(x=>x.firstName == firstName);  
    if(foundContact != null)
    {
        //pop out the contact from addressbook
        addressbook.pop(foundContact);
        console.log("Deleted ");
    }
    else
        console.log("No Such contacts found!");
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