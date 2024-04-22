"use strict";
/* 🚀 Day 8 Challenge: Start Coding! 🚀

Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.

Explain & TIP: Array index errors happen when you try to access a position in the array that doesn’t exist. Experimenting with this helps you understand array boundaries.*/
Object.defineProperty(exports, "__esModule", { value: true });
let friends = ["Mudasser", "Sabir", "Zain"];
console.log(friends[3]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
friends[2] = "Zain"; // Correcting the error by accessing a valid index.
/*Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.

Explain & TIP: Conditional tests check if something is true or false. Writing different tests helps you understand how conditions work in programming.*/
let car = "Honda";
console.log("Is car == 'Honda'? I predict True.");
console.log(car == "Honda"); // True
console.log("Is car == 'Toyota'? I predict False.");
console.log(car == "Toyota"); // False
console.log("Is car != 'Toyota'? I predict True.");
console.log(car != "Toyota"); // True
console.log("Is car === 'Honda'? I predict True.");
console.log(car === "Honda"); // True
console.log("Is car !== 'Toyota'? I predict True.");
console.log(car !== "Toyota"); // True
console.log("Is car === 'honda'? I predict False.");
console.log(car === "honda"); // False
console.log("Is car !== 'Honda'? I predict False.");
console.log(car !== "Honda"); // False
console.log("Is car.length > 4? I predict True.");
console.log(car.length > 4); // True
console.log("Is car.length < 6? I predict False.");
console.log(car.length < 6); // False
console.log("Is car.startsWith('Hon')? I predict True.");
console.log(car.startsWith("Hon")); // True
console.log("Is car.endsWith('a')? I predict True.");
console.log(car.endsWith("a")); // True
// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
/*Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.

Explain & TIP: Experiment with different types of conditions to see how they work. This builds a deeper understanding of logic in programming.*/
// Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple"); // True
console.log("Apple".toLowerCase() == "apple"); // True
// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True
// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False
// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True
// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True
// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True
