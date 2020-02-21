// list of characters
let character = [
	{ name: 'Gandalf', health: 15 },
	{ name: 'Dumbledore', health: 20 },
	{ name: 'Merlin', health: 12 },
];
// opponent
const opponent = { name: 'Morgana', health: 70 };
// create function to display list of all combatants
const nameList = (...names) => {
	for (let i of names) {
		console.log(`${i.name}'s health is ${i.health}`);
	}
};

// display list of all combatants
nameList(...character);
nameList(opponent);
let battleChar;
// declare function
function startCombat() {
	function pickMe() {
		//  parseInt("string", 10) - converts a string into a number
		let choose = parseInt(
			prompt(
				`Choose a wizard to battle Morgana\nChoose between \n${character[0].name} [1], \n${character[1].name} [2] or \n${character[2].name} [3]`
			),
			10
		);

		// If the user leaves the prompt blank or enters a number too large
		if (choose === '' || choose > 3 || choose < 1) {
			pickMe();
		} else if (choose === 0) {
			alert(`Run away cowards`);
		}

		//when I enter a wrong number, then a correct one, it breaks the code.
		// takes the number entered from the prompt and finds the corresponding object from the original array.
		// creates a new object
		battleChar = character[choose - 1];
		console.warn(`You have chosen ${battleChar.name} and they have ${battleChar.health} health`);
	}
	pickMe();
	// condition for the loop to run.
	// opponent's health above 0
	// checks to see if the health of every character in the original array is zero and returns true.
	// BUT WAIT THERE'S MORE! The "!" before the condition tells it to do the opposite.
	// The loop will run as long as the opponent's health is greater than zero AND as long as all the health values in the original array are NOT less than or equal to zero
	while (opponent.health > 0 && !character.every(x => x.health <= 0)) {
		let battleDamage = Math.floor(Math.random() * 5 + 1);

		// battle damage
		battleChar.health -= battleDamage;
		opponent.health -= battleDamage;

		// conditions for the loop
		// What happens when character gets hit and health is above zero
		if (battleChar.health > 0) {
			console.log(`After the battle ${battleChar.name}'s health is ${battleChar.health}`);
			pickMe();

			// loss condition
			// checks health of characters in the original array. If all character's health is 0, you lose
		} else if (character.every(x => x.health <= 0)) {
			console.error(`You lose`);

			// what happens when a single character dies. This has to go below the loss condition, because the program will check the loss condition first. If you put this first, the character will die, but it won't check if all the character's health are zero
		} else if (battleChar.health <= 0) {
			console.error(`${battleChar.name} has died.`);

			// replaces the character object created in the prompt in the original array.
			character.splice(character.indexOf(battleChar), 1, battleChar);
			// Array.splice(start index, number of deletions, what is going in)
			pickMe();
		}
		//	what happens every loop when the opponent gets attacked.
		if (opponent.health > 0) {
			console.log(`After the battle ${opponent.name} is ${opponent.health}`);
			// win condition
		} else if (opponent.health <= 0) {
			console.error(`You Win`);
		}
	}
}
// call the function
startCombat();
