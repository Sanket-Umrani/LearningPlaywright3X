const prompt=require("prompt-sync")();
let name=prompt("Enter your name:");
console.log("Hello,"+name+"!");
//With the code runner extension installed, it does not allow to take input from the editor.So to make this possible follow these steps
// 1.Open the Terminal in VS code and navigate to the path where rhe current js file is located with cd PracticePrograms and hit enter
// 2.The updated path will be displayed in the terminal
// 3.Type node 02_TakeInputFromUsers.js and hit enter
// 4. The program will run and you can enter your name in the terminal to see the output.