class TestCase{
    constructor(name,status,priority)
    {
        //objects name=paramter name
        this.name=name;
        this.status=status;
        this.priority=priority;
    }
    display()
{
    console.log(this.name + "->" + this.status + "->" + this.priority);
}
}

let loginTestRef=new TestCase("LOGIN","PASS","P0");
let signupTestRef=new TestCase("SIGN UP","FAIL","P1");
loginTestRef.display();
signupTestRef.display();


