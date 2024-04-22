"use strict";
/*
🚀 Day 9 Challenge: Start Coding! 🚀

Question 25: Alien Colors #1: Imagine an alien was just shot down in a game. Assign 'green', 'yellow', or 'red' to a variable called alien_color.

Explain & TIP: Use an if statement to check the alien's color. This introduces you to simple conditionals.*/
Object.defineProperty(exports, "__esModule", { value: true });
let alien_color = "Green";
if (alien_color === "Green") {
    console.log("You just earned 5 points!");
}
;
alien_color = "Red";
if (alien_color === "Green") {
}
/*
Question 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain.

Explain & TIP: Expanding on the previous exercise, if-else chains allow you to handle multiple conditions.*/
alien_color = "Green";
if (alien_color == "Green") {
    console.log("You just earned 5 points for shooting the alien!");
}
else {
    console.log("You just earned 10 points.");
}
alien_color = "Yellow";
if (alien_color == "Green") {
    console.log("You just earned 5 points for shooting the alien!");
}
else {
    console.log("You just earned 10 points.");
}
/*Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.

Explain & TIP: This exercise introduces you to handling multiple specific conditions in an if-else chain.*/
//Green Alein version
alien_color = "Green";
if (alien_color == "Green") {
    console.log("You just earned 5 points for shooting the alien!");
}
else if (alien_color == "Yellow") {
    console.log("you just earned 10 points for shooting the alein!");
}
else if (alien_color == "Red") {
    console.log("You just earned 15 points for shooting the alein!");
}
//Yellow alein version
alien_color = "Yellow";
if (alien_color == "Green") {
    console.log("You just earned 5 points for shooting the alien!");
}
else if (alien_color == "Yellow") {
    console.log("you just earned 10 points for shooting the alein!");
}
else if (alien_color == "Red") {
    console.log("You just earned 15 points for shooting the alein!");
}
//Red alein version
alien_color = "Red";
if (alien_color == "Green") {
    console.log("You just earned 5 points for shooting the alien!");
}
else if (alien_color == "Yellow") {
    console.log("you just earned 10 points for shooting the alein!");
}
else if (alien_color == "Red") {
    console.log("You just earned 15 points for shooting the alein!");
}
