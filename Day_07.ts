/*🚀 Day 7 Challenge: Start Coding! 🚀

Question 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are inviting to dinner.

Explain & TIP: Arrays have a length property that tells you how many items are in the list. Use this to inform your guests how big the party will be.*/


let guests2: string[] = ["Imran Khan", "Nawaz Sharif", "Kamran Tessori", "Showbaz Shareef", "Arif Alvi"];
console.log(`I am inviting ${guests2.length} people to dinner.`);

/*Question 20: Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

Explain & TIP: Arrays are perfect for keeping a collection of similar items. Choose a theme you like and list several examples.*/


let countries: string[] = ["Saudi Arabia", "Pakistan", "India", "USA", "Canada", "Australia"];
console.log("Countries I'd like to visit:", countries);

/*Question 21: Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

Explain & TIP: Objects in TypeScript can store various related data about a single entity. Think of an object as a container for characteristics of something, like a book or a car.*/

let book: { title: string; author: string; yearPublished: number } = {
    title: "Mastering TypeScript: A Comprehensive Guide to Modern JavaScript Development",
    author: "Jane Smith",
    yearPublished: 2023
};
console.log(`Book Info: ${book.title} by ${book.author}, published in ${book.yearPublished}`);

