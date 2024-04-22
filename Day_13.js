"use strict";
/*
 Day 13 Challenge: Start Coding!

Question 37: Large Shirts: Default values in make_shirt().

Explain & TIP: Modify functions to have default parameters, simplifying calls for common use cases. This introduces default function parameters.*/
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
make_shirt(); // Default large and message
make_shirt("medium"); // Default message, medium size
make_shirt("small", "Dive into Coding"); // Custom message, small size
/*Question 38: Cities: Describing cities with a function.

Explain & TIP: Use functions with default parameters to handle cases where certain data might not change often. This helps in making your code more flexible.*/
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo", "Japan");
/*Question 39: City Names: Formatting city-country pairs.

Explain & TIP: Returning formatted strings from functions can simplify data presentation. This exercise practices string formatting and returning values from functions.*/
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
