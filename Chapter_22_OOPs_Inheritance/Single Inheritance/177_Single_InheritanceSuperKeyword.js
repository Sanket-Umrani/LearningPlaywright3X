class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " is eating");
    }
    sleep() {
        console.log(this.name + " is sleeping");
    }
    foo(){
        console.log("Foo Called!");
    }
}
class Dog extends Animal {
    constructor(name, breed) {
        super(name); //. It is used for the parent constructor.
        this.breed = breed;
    }
    bark() {
        super.foo();//non static public method bark() from child class is calling the parent class non static public method foo();
        console.log(this.name, " is barking!")
        console.log(super.name); ///non static public method bark() from child class cannot call the name paramter from the parent class constructor
    }
}
let dog = new Dog("Rex", "Labrador");
dog.eat();
dog.sleep();
dog.bark();
console.log(dog.breed);