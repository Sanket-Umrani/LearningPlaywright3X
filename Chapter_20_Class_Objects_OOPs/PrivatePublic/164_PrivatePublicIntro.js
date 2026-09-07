// Private Fields (#) — Hidden Data
// PUBIC Fields 
let v = 10;
class Credentials {
    #apiKey; // private field Because every object gets its own #apiKey.
    user; //public instance fields
    constructor(user, key) {
        this.user = user; // public
        this.#apiKey = key; //stores the key inside the object as private data.
    
        /**
         * user → public and directly accessible
           #apiKey → private and only accessible from inside the class
           this.#apiKey → accesses that private field for the current object.
         */
    
    }
    // Custom made fuction by us
    pramodgetAuthHeader() { 
        //This above method is inside the class, so it is allowed to access from outside the class with object reference cred
        return "Bearer " + this.#apiKey + " && " + " User Details " + this.user;
    }
    //  #pramodgetAuthHeader() { 
    //     //This above method is inside the class, so it is allowed to access from outside the class with object reference cred
    //     return "Bearer " + this.#apiKey + " && " + " User Details " + this.user;
    // }
}
//Code outside the class cannot directly access #apiKey.
let cred = new Credentials("admin", "scret_key_1234");
console.log(cred.user);
console.log(cred.pramodgetAuthHeader());
//console.log(cred.#pramodgetAuthHeader()); Method '#pramodgetAuthHeader' is not accessible  outside class 'credentials' because it has a private identifier.
//console.log(user); //Reference Error user is not defined
//console.log(cred.apiKey); //There is no public property called apiKey.
//console.log(cred.#apiKey); //JavaScript will give a SyntaxError because private fields can only be accessed from inside the class that declared them.

/**
 * The outside code cannot directly touch #apiKey, but it can call a public method that is allowed to access it.
 * Instance field = belongs to each object.
   Public/private = controls who can access it
   
   So these are two separate concepts:

#apiKey
 ↓
private + instance field

user
 ↓
public + instance field
 */