class Car {
     assigned_name: string;
    // Parameterized Constructor
    constructor(assigned_name:string) {
        this.assigned_name = assigned_name;
    }

    eat():void{
        console.log(this.assigned_name + " is eating");
    }
}

let hyundai_i10 = new Car("i10");
console.log(hyundai_i10.assigned_name);
hyundai_i10.eat();  

let hyundai_creta = new Car("creta");
console.log(hyundai_creta.assigned_name);


