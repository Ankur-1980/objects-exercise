// // Count to twenty
// for (let twenty = 0; twenty <= 20; twenty++) {
// 	console.log(twenty);
// }

// Evens up to twenty
// for (let twenty = 0; twenty <= 20; twenty++) {
// 	if (twenty % 2 === 0) {
// 		console.log(twenty);
// 	}
// }

// // Odds up to twenty
// for (let twenty = 0; twenty <= 20; twenty++) {
// 	if (twenty % 2 === 1) {
// 		console.log(twenty);
// 	}
// }

// // Count from 1 -10
// // Multiply each iteration by 3
// for (let timesThree = 0; timesThree <= 10; timesThree++) {
// 	let triples = timesThree * 3;
// 	console.log(triples);
// }

// Count from 1 -10
// Multiply each iteration by 3
// multiply last loop number by second loop's number
// for (let timesThree = 0; timesThree <= 10; timesThree++)
// 	let triples = timesThree * 3;
// 	for (let seconds = 0); seconds <= 10; seconds++)
// 		let twoLoops = seconds * triples;
// 	console.log(twoLoops);

// FizzBuzz
// if divisible by 3 = Fizz
// if divisible by 5 = Buzz
// if divisible by both 3 & 5 = FizzBuzz

// for (let i = 0; i <= 50; i++) {
// 	if (i % 3 === 0 && i % 5 === 0) {
// 		console.log(`FizzBuzz`);
// 	} else if (i % 3 === 0) {
// 		console.log(`Fizz`);
// 	} else if (i % 5 === 0) {
// 		console.log(`Buzz`);
// 	} else console.log(i);
// }

// count to 10
// for (ten = 0; ten <= 10; ten++) {
// 	console.log(ten);
// }

// countdown from 10
// for (ten = 10; ten >= 0; ten--) {
// 	console.log(ten);
// }

// While loop - count to ten
// let ten = 0;
// while (ten <= 10) {
// 	console.log(`${ten}`);
// 	ten++;
// }

// do-While loop - countdown from ten
// let ten = 10;
// do {
// 	console.log(`${ten}`);
// 	ten--;
// } while (ten >= 0);

// log array values
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let num of numbers) {
// 	console.log(num);
// }

// add spaces to the front of a string to nake string 10 characters

// function padding(word) {
// 	while (word.length < 10) {
// 		word = '0' + word;
// 	}
// 	console.log(word);
// }
// padding('hi');

// give letter grade for the class
// Student Name  Marks
// David                 80
// Vinoth                77
// Divya                 88
// Ishitha               95
// Thomas             68

let classRoom = [
	{ name: 'David', grade: 80 },
	{ name: 'Vinoth', grade: 77 },
	{ name: 'Divya', grade: 88 },
	{ name: 'Ishitha', grade: 95 },
	{ name: 'Thomas', grade: 68 },
];

// function classAverage() {
// 	// number of students in the class
// 	console.log(classRoom.length);
// 	// total of all their grades
// 	let sum = classRoom.reduce(function(prev, cur) {
// 		return prev + cur.grade;
// 	}, 0);
// 	console.log(sum);
// 	let average = sum / classRoom.length;
// 	console.log(`Number of students: ${classRoom.length}\nTotal score ${sum}\nAverage is ${average}`);
// }
// classAverage();

function classGrade() {
	console.log(`Number of Students: ${classRoom.length}`);
	let sum = classRoom.reduce(function(prev, cur) {
		return prev + cur.grade;
	}, 0);
	let average = sum / classRoom.length;
	if (average < 100 && average >= 90) {
		console.log(`Average grade is ${average}\n
		Letter Grade: A`);
	} else if (average < 90 && average >= 80) {
		console.log(`Average grade is ${average}\n
		Letter Grade: B`);
	} else if (average < 80 && average >= 70) {
		console.log(`Average grade is ${average}\n
		Letter Grade: C`);
	} else if (average < 70 && average >= 60) {
		console.log(`Average grade is ${average}\n
		Letter Grade: D`);
	} else
		console.log(`Average grade is ${average}\n
	Letter Grade: F`);
}
classGrade();
// var msgTotal = accounts.reduce(function(prev, cur) {
// 	return prev + cur.msgCount;
// }, 0);
