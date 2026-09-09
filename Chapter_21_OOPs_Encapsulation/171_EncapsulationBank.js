class ICICI{
    #balance;
    constructor(name,balance)
    {
this.#balance=balance;
this.name=name;
    }
    getBalance()
    {
        return this.#balance;
    }
    setBalance(balance,isCashier)
    {
        if(isCashier)
        {
            this.#balance=balance;
        }
        else{
            console.log("Not Allowed")
        }

    }
}
let bank1=new ICICI("Sanket",10000)
console.log(bank1.getBalance());
bank1.setBalance(15000,true);
console.log(bank1.getBalance())
console.log("*************")
let bank2=new ICICI("Sanket",10000)
console.log(bank2.getBalance());
bank2.setBalance(15000,false);
console.log(bank2.getBalance())