let arr=[1,2,3];
console.log(arr);
//Add to End
arr.push(4);
console.log(arr);
arr.push(5,6,7);
console.log(arr);
//Add to Start
arr.unshift(0);
console.log(arr);
arr.unshift(-1,-2,-3);
console.log(arr);
//Remove from Start
arr.shift();
console.log(arr);
arr.shift(-2,-3)
console.log(arr);
arr.splice(2,2); //no of elements to remove from the current index i.e navigate to index and remove the element at current navigated index and the next element if it is (2,2)
console.log(arr);
arr.splice(2,0,99);
console.log(arr);
arr.splice(1,2,10,20);
console.log(arr); //go to index 1 and remove current element at theat index and next element and insert 10,20
