//Accessing & Modifying
let statuses=["pass","fail","skip"];
console.log(statuses[0]);
console.log(statuses[2])
console.log(statuses.at(-1));//.at(-1) is the clean modern way to get the last item.
console.log(statuses.at(-2));//Read items by index, and use .at() to count from the end with negative numbers
console.log(statuses.at(-4)); //undefined as Javascript does not throw error for out of bound index
//Modify
statuses[1]="blocked";
console.log(statuses);
//length
console.log(statuses.length);