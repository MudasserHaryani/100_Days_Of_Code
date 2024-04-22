"use strict";
/*
 Day 11 Challenge: Start Coding!

Question 31: No Users: Ensure your user list isn’t empty.

Explain & TIP: Before greeting users, check if there are any. This teaches you to handle empty arrays.*/
Object.defineProperty(exports, "__esModule", { value: true });
let users = [];
if (users.length === 0) {
    console.log("We need to find some users");
}
else {
    console.log("Thankyou for loggin in again");
}
/*Question 32: Checking Usernames: Ensure uniqueness in usernames.

Explain & TIP: Checking for uniqueness is crucial in user management. Use loops and conditionals to handle case-insensitive comparisons.*/
let current_users = ["user1", "admin", "user3", "user4", "user5"];
let new_users = ["User1", "User6", "user7", "admin", "User9"];
new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available.`);
    }
});
/*Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.

Explain & TIP: Use a loop and an if-else chain to append the correct ordinal suffix to numbers. This introduces you to combining loops with conditional logic for formatting.*/
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(number => {
    let suffix = "th";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    console.log(`${number}${suffix}`);
});
