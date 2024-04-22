/*🚀 Day 10 Challenge: Start Coding! 🚀

Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.

Explain & TIP: Use age to check the life stage. This practice shows how to handle multiple conditions with an if-else chain.*/

let age: number = 25;
if (age < 2) {
  console.log("The person is baby!");
} else if (age < 4) {
  console.log("The person is toddler!");
} else if (age < 13) {
  console.log("The person is kid!");
} else if (age < 20) {
  console.log("The person is teenager!");
} else if (age < 65) {
  console.log("The person is adult!");
} else {
  console.log("The person is elder!");
}

/*Question 29: Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.

Explain & TIP: Arrays can store multiple items like fruit names. Use if statements to check for specific fruits.*/

let favoriteFruit: string[] = ["Apple", "Mango", "Strawberry"];
if (favoriteFruit.includes("Apple")) {
  console.log("You realy like apple!");
}

if (favoriteFruit.includes("Mango")) {
  console.log("You realy like mango");
}

/*Question 30: Hello Admin: Greet users differently, especially 'admin'.

Explain & TIP: Loop through usernames to personalize greetings. This introduces looping and conditional logic together.*/

let usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];

usernames.forEach((username) => {
  if (username === "admin") {
    console.log("Hello! Admin would you like to see status reports.");
  } else {
    console.log(`Hello! ${username}, thankyou for loggin in again.`);
  }
});

