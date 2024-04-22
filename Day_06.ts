/*🚀 Day 6 Challenge: Start Coding! 🚀

Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.

Explain & TIP: When you have more space, you can add more guests to your list. You can add guests at the beginning, middle, and end of an array.*/

let guests1: string[] = ["Imran Khan", "Asif Ali Zardari", "Kamran Tessori"];
console.log(`Great news! I found a bigger dinner table!`);

//adding more guests
guests1.unshift("Nawaz Sharif");
guests1.splice(guests1.length / 2, 0, "Showbaz Shareef");
guests1.push("Tariq jameel");

guests1.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

/*Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.

Explain & TIP: Sometimes plans change, and you'll need to adjust your guest list. Removing guests from your list is straightforward but should be done thoughtfully.*/

console.log("Unfortunately, I can only invite two people for dinner.");

while (guests1.length > 2) {
    let removedGuest = guests1.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guests1.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

guests1.splice(0, guests1.length);
console.log(guests1); // Shows an empty list

/*Question 18: Seeing the World: Think of at least five places you’d like to visit.

Explain & TIP: Arrays can be ordered and reordered in various ways without altering the original list, useful for planning and organizing information.*/

let places: string[] = ["New Zealand", "Iceland", "Japan", "Switzerland", "Norway", "Pakistan", "India"];

console.log("Original order:", places);

console.log("Alphabetical order:", [...places].sort());

console.log("Original order:", places);

console.log("Reverse alphabetical order:", [...places].sort().reverse());

console.log("Original order:", places);

places.reverse();
console.log("Reversed order:", places);

places.reverse();
console.log("Original order:", places);

places.sort();
console.log("Alphabetical order:", places);

places.reverse();
console.log("Reverse alphabetical order:", places);