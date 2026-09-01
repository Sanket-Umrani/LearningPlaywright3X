//These methods change (mutate) the array.
let arr=[1,2,3];
console.log(arr);
//Add to End
arr.push(4); 
console.log(arr);//[1,2,3,4]
arr.push(5,6,7);
console.log(arr);//[1,2,3,4,5,6,7]
//Add to Start
arr.unshift(0);
console.log(arr);//[0,1,2,3,4,5,6,7]
arr.unshift(-1,-2,-3);
console.log(arr);//[-1,-2,-3,0,1,2,3,4,5,6,7]
//Remove from Start
arr.shift();
console.log(arr);//[-2,-3,0,1,2,3,4,5,6,7]
arr.shift(-2,-3)//JavaScript ignores those arguments and simply removes one element from the beginning so itbehaves same as shift()
console.log(arr);//[-3,0,1,2,3,4,5,6,7]
//Remove multiple elements from a particular position
arr.splice(2,2); // splice(startindex,deletecount) no of elements to remove from the current index i.e navigate to index and remove the element at current navigated index and the next element if it is (2,2)
console.log(arr);//[-3,0,3,4,5,6,7]
arr.splice(2,0,99);
console.log(arr);//[-3,0,99,3,4,5,6,7]
arr.splice(1,2,10,20);
console.log(arr);//[-3,10,20,3,4,5,6,7] //go to index 1 and remove current element at theat index and next element and insert 10,20

/**
 * push()     → add to END
pop()      → remove from END

unshift()  → add to START
shift()    → remove from START

splice()   → add/remove at ANY position
 */

/**
 *    Method	What it does	                Which end
      push	    adds item(s)	                end
      pop	    removes item	                end
      unshift   adds item(s)	                beginning
      shift	    removes item	                beginning
      splice	remove and/or insert anywhere	any position

 */