let a=10;
class TestRunner{
    static totalTests=0;
    static passCount=0;
    constructor(name,passed){
        this.name=name;
        TestRunner.totalTests++; //4
        if(passed)
        {
            TestRunner.passCount++; //3
        }
        console.log(a); //L 10 S10,C10,CH 10
    }
    //non static function
    sanket_fn()
    {
        return this.name
    }
    static summary()
    {
        return TestRunner.passCount + "/" + TestRunner.totalTests + " passed";
    }
}
new TestRunner("Login", true);
new TestRunner("Signup", false);
new TestRunner("Cart", true);
new TestRunner("Checkout", true);
console.log(TestRunner.totalTests);
console.log(TestRunner.passCount);
console.log(TestRunner.summary()); //static method can be called with ClassName
//console.log(TestRunner.sanket_fn()); 
// Type Error //A non-static method normally cannot be called directly with the ClassName. It belongs to an instance/object, not the class.
//if you still want to access sanket_fn() then create an Object
let superTest=new TestRunner("Bar Graph");
console.log(superTest.sanket_fn());