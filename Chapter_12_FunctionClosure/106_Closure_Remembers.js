function makeCounter(start = 0) {
    let count = start;
    return{
        // return { must be on the same line as return when you're returning an object.
        // because JavaScript's Automatic Semicolon Insertion can turn 
        // return
        // {     
        //into return; and the object will not be returned.(in this case undefined)
        increment()
        {
            count++;
        },
        decrement()
        {
            count--;
        },
        get()
        {
            return count;
        }
    };
}
//console.log(count); // count is not defined here, it is only defined in the closure of makeCounter function
let counter = makeCounter(0);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get()); //3
counter.decrement();
console.log(counter.get());//2
counter();

// increment();//Reference Error: increment is not defined, because increment is defined in the closure of makeCounter function and it is not accessible outside of it.

/**
 * Returns an object
 * return {
    increment() {}
};
Call increment() and return whatever that function gives back.
return increment();
 */

/**
 * increment     → function
increment()   → execute function
return {...}  → return object
return increment → return function
return increment() → execute function, return its result
 */