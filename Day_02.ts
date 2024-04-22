//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// "Albert Einstein once said, “A person who never made a mistake never tried anything new.”"

let author1 : string = "Albert Einstein";
let famousQuote: string = "A person who never made a mistake never tried anything new.";
console.log(`${author1} once said, "${famousQuote}."`);

//Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famous_person: string = "Albert Einstein";
let message: string = `${famous_person} once said, “A person who never made a mistake never tried anything new.”`;

console.log(message);


//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.

let name2: string = "\t\n Mudasser \t\n"; // This saves the name with whitespace

console.log(name2); // Shows the name with whitespace
console.log(name2.trim()); // Shows the name without whitespace
