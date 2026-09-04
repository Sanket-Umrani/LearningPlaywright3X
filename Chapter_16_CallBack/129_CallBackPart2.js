function test(dadad, callMewhenDone){
    console.log("Hi start the Testcase");
    callMewhenDone();
}

test("Verify the login page is working", async (page) =>{

});

console.log("************")
function garimaStory(item, callMeWhenStoreIsEmpty){
    console.log("Store is busy!")
    //Waiting....
    console.log("Store is empty!")
    callMeWhenStoreIsEmpty();
}

garimaStory("starting shoppping", ()=>{
     console.log("lets start shopping....")
});

/**
 * Garima enters store
       ↓
Store is busy
       ↓
Garima waits
       ↓
Store becomes empty
       ↓
CALLBACK
       ↓
"Let's start shopping!"
 */