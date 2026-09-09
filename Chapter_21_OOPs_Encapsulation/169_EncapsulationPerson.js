class Person{
    #child1;
    #child2;

    constructor(name,ch1,ch2)
    {
        this.name=name;
        this.#child1=ch1;
        this.#child2=ch2;

    }
    getchild1(){
        return this.#child1;
    }
    setchild1(changed_name){
        this.#child1=changed_name
    }

}
let p=new Person("Sanket","Swara","Swarali");
//console.log(p.#child1) //Property '#child1' is not accessible outside class 'Person' because it has a private identifier
console.log(p.getchild1());
p.setchild1("SWASTIK");
console.log(p.getchild1());