"use strict";
// Personal Message 
//Personal Message: Store a person’s name in a variable and print a message to them, like “Hello Asharib, would you like to learn some TypeScript today?”
Object.defineProperty(exports, "__esModule", { value: true });
let name1 = "Mudasser";
console.log(`Hello ${name1}, would you like to learn some Typescript today?`);
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// name variable already saved so its not need to redeclare again
console.log(name1.toLowerCase()); // Shows the name in all small letters
console.log(name1.toUpperCase()); // Shows the name in ALL BIG LETTERS
console.log(name1.charAt(0).toUpperCase() + name1.slice(1).toLowerCase()); // Shows the name with the First Letter Big
