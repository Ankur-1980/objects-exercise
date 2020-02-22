// created a person
class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	greeting() {
		return `Hello ${this.firstName} ${this.lastName}`;
	}
}
// create a person
// const ankur = new Person('Ankur', 'Vasavada');
// console.log(ankur.greeting());

// create class - bankAccount
class bankAccount extends Person {
	constructor(firstName, lastName, balance, interestRate) {
		super(firstName, lastName);
		// with properties - balance, interestRate
		this.balance = balance;
		this.interestRate = interestRate;
	}
	// method - addInterest - increases the interest rate by adding appropriate interest
	addInterest() {
		return this.balance * this.interestRate + this.balance;
	}

	// Greeting
	greeting() {
		return (
			// uses the greeting from the Person class and adds to it the bankAccount class
			super.greeting() +
			`\nWelcome to the Bank of Grand Chirpus\n Your starting balance is $${
				this.balance
			}.\nYou have a monthly interest rate of ${
				this.interestRate
			}%\nYour balance after one month is $${this.addInterest()}`
		);
	}
}

// create bankAccount
const grace = new bankAccount('Grace', 'Mullins', 500, 0.05);
// check to see if everything was created properly for the bankAccount
// console.log(grace);
// check if add interest works
// console.log(grace.addInterest());
//
console.log(grace.greeting());

// create subclass - bankAccountWithFee
class bankAccountWithFee extends bankAccount {
	constructor(firstName, lastName, balance, interestRate, fee) {
		super(firstName, lastName, balance, interestRate);

		this.fee = fee;
	}

	// method - applyFee - subtracts from the balance
	applyFee() {
		// uses the addInterest forumalu from the bankAccount Class
		return super.addInterest() - this.fee;
	}

	greeting() {
		// adds onto the greeting from the bankAccount class
		return super.greeting() + `\nThere is a minimum monthly fee of ${this.fee}`;
	}
}

// create a bankAccountWithFee
// const janna = new bankAccountWithFee('Janna', 'Lodwick', 1000, 0.1, 5);
// const chelsea = new bankAccountWithFee('Chelsea', 'Wylie', 400, 0.04, 5);
// console.log(janna.greeting());
// console.log(chelsea.greeting());
