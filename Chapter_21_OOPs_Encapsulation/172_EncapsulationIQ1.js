class TestCase {
    #status = "not run"; //#status is private instance field that means each test case object get its own copy
    static #count = 0; //static #count is private static field that means one shared copy belong to the class i. e TestCase

    constructor(name) {
        this.name = name;
        TestCase.#count++;//To access a private static field ClassName is needed to provide
    //Here #status is not declared so A field does NOT need to be written inside the constructor to belong to each object.
    
}
    run(pass) {
       this.#status = pass ? "PASSED" : "FAILED";
    }
    getStatus() 
    { 
        return this.#status; 
    }

    static getCount() { 
        return TestCase.#count; 
    }
    static setCount(v) { //because #count is private, this is not allowed outside the class: and therefore public method is given
        TestCase.#count = v;
    }
}

const tc = new TestCase("login"); //Every time someone creates a TestCase object, that object should get its own #status."
tc.run(true);
console.log(tc.getStatus());
new TestCase("login");
new TestCase("login");
new TestCase("login");
console.log(TestCase.getCount());
TestCase.setCount(10);
console.log(TestCase.getCount());




/**
 * There are two different private fields:

#status
   ↓
private INSTANCE field
   ↓
each TestCase object gets its own copy


static #count
   ↓
private STATIC field
   ↓
one shared copy belongs to TestCase class */

// Program Flow

// When JavaScript loads the class:
// static #count = 0;
// No TestCase object exists yet.
// First object:
// const tc = new TestCase("login");
// new creates an object and calls: constructor("login")
// Inside:this.name = name;
// Since this refers to the new object:tc.name = "login"
// TestCase.#count++;
// Before:TestCase.#count = 0
// After:TestCase.#count = 1
// TestCase
// │
// └── #count = 1

// tc
// ├── name = "login"
// └── #status = "not run"
// #status belongs to tc, while #count belongs to the Class
// Run the Tests:
// tc.run(true); //run() is a non-static method, so we call it using the object:
// In non static run method, this means tc:
// tc.#status=PASSED
// tc
// ├── name = "login"
// └── #status = "PASSED"
// Get the status: console.log(tc.getStatus()); //getStatus() is non-static, so we call it using the object.
// return this.#status  is equal to tc.#status which is PASSED
// Create Object2,Object3,Object4 but do not store in a variable
// console.log(TestCase.getCount()); //as getCount is static method so TestCase.getCount() is used 
// current #count after 4 object creation is 4 ,so TestCase.#count=4
// Final Output will be :PASSED 4