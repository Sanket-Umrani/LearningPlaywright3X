let order = new Promise(function(resolve, reject){
    //Create a Promise and give me two functions: resolve and reject

        let foodready = false;
        if(foodready){
            resolve("Pizza is delivered!");
        }
        else{
            reject("Order cancelled");
        }


});

console.log(order);//prints the Promise object, not simply the final string.

/**
 * Think of a Promise as an order ticket. You place an order and get a ticket. The ticket is a promise that your order will be fulfilled.
 * When you create:

new Promise(...)

JavaScript creates a Promise object.
resolve("Pizza is delivered!") means Success
reject("Order cancelled"); means Failure

The Promise object has three states:

1. Pending: The initial state, neither fulfilled nor rejected.
2. Fulfilled: The operation completed successfully.
3. Rejected: The operation failed.

 */