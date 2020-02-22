// prompt for information
let account = [];
// first name
let first = prompt(`What is your first name?`);
console.log(first);
console.log(typeof first);

// last name
let last = prompt(`What is your last name?`);
console.log(last);
console.log(typeof last);

// balance
let amount = parseFloat(prompt(`What is the starting total in your bank?`));
console.log(amount);
console.log(typeof amount);

// interest rate
let interest = parseFloat(prompt(`What is the interest rate on your account?`));
console.log(interest);
console.log(typeof interest);

// fee
let service = parseFloat(
	prompt(`What is the monthly service fee 
on your account? `)
);
console.log(service);
console.log(typeof service);
