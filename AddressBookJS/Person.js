class Person{
    get firstName(){
        return this._firstName;
    }
    set firstName(value){
        let firstNamePattern = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(firstNamePattern.test(value))
        this._firstName = value;
        else
        throw 'First name is invalid';
    }
    get lastName(){
        return this._lastName;
    }
    set lastName(value){
        let LastNamePattern = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(LastNamePattern.test(value))
        this._lastName = value;
        else
        throw 'Last name is invalid';
    }
    get address(){
        return this._address;
    }
    set address(value){
        let addressPattern = RegExp("^[A-Z a-z]{4,}$");
        if(addressPattern.test(value))
        this._address = value;
        else
        throw 'Address is invalid';
    }
    get City(){
        return this._City;
    }
    set City(value){
        let cityPattern = RegExp("^[A-Z a-z]{2,}$");
        if(cityPattern.test(value))
        this._City = value;
        else
        throw 'City is invalid';
    }
    get State(){
        return this._State;
    }
    set State(value){
        let statePattern = RegExp("^[A-Z a-z]{3,}$");
        if(statePattern.test(value))
        this._State = value;
        else
        throw 'State is invalid';

    }
    get zip(){
        return this._zip;
    }
    set zip(value){
        let zipPattern = RegExp("^[1-9][0-9]{2}\\s?[0-9]{3}$");
        if(zipPattern.test(value))
        this._zip = value;
        else
        throw 'Zip is invalid';
    }
    get phone(){
        return this._phone;
    }
    set phone(value){
        let phonePattern = RegExp("[0-9]{1,2}[ ][0-9]{10}$");
        if(phonePattern.test(value))
        this._phone = value;
        else
        throw 'Invalid Phone Number';
    }
    get email(){
        return this._email;
    }
    set email(value){
        let emailPattern = /^[a-z]{3,}([+.-_]{1}\w+)?@[a-z0-9]+\.[a-z]{2,3}(\.[a-z]{2})?$/;
        if(emailPattern.test(value))
        this._email = value;
        else
        throw 'Invalid Email Id';
    }
    toString(){
        return `First Name : ${this.firstName}\nSecondName : ${this.lastName}\nAddress : ${this.address}\nCity : ${this.City}\nState : ${this.State}\nZip : ${this.zip}\nPhone : ${this.phone}\nemail : ${this.email}`
    }

}
//exporting this class to use the make use in another file
module.exports = {Person};