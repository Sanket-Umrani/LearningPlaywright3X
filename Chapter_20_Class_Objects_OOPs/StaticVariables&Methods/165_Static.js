class TestRunner{
    static totalTests=0;
    static passCount=0;
    constructor (name,passed)
    {
        this.name=name;
        this.passed=passed;
        //totalTests++;// Reference Error Because totalTests is not a local variable inside the constructor.It's a property of the class: SO You need TestRunner.totalTests
        TestRunner.totalTests++;
        if(passed)
        {
            //passCount++;// Reference Error Because passCount is not a local variable inside the constructor.It's a property of the class: SO You need TestRunner.passCount
            TestRunner.passCount++;
        }
    }

}
let t1 = new TestRunner("loginTest", true);
let t2 = new TestRunner("signTest", false);
let t3 = new TestRunner("dashboardTest",true);
let t4 = new TestRunner("supportTest", true);
console.log(TestRunner.totalTests);
console.log(TestRunner.passCount);
console.log(t1.name);
console.log(t2.name);
console.log(t3.name);
console.log(t4.name);
// name - non static
// totalTests - static