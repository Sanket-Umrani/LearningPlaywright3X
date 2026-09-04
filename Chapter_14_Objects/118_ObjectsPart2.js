const user = {
    name : "Pramod", 
    //Quotes around the key are optional in many JavaScript objects, but quotes around a string value are required.
    printName(){
        return this.name; //This creates a method named printName.
    }
    //this.name does not mean "find a variable named name.", 
    // it means "find the name property of this object." 
    // The this keyword refers to the object that is calling the method. In this case, it refers to the user object.
}
console.log(user.printName()); //Pramod