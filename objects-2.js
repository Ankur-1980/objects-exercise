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
//  parseInt("string", 10)
function startCombat() {
	function pickMe() {
		let choose = parseInt(
			prompt(
				`Choose a wizard to battle Morgana\nChoose between \n${character[0].name} [1], \n${character[1].name} [2] or \n${character[2].name} [3]`
				// `${nameList(...character)}`
			),
			10
		);

		// also when I enter a wrong number, then a correct one, it breaks the code.

		if (choose === '' || choose > character.length) {
			// alert(`please try again`);
			pickMe();
		} else if (choose === 0) {
			alert(`Run away cowards`);
		}

		battleChar = character[choose - 1];
		console.warn(`You have chosen ${battleChar.name} and they have ${battleChar.health} health`);
	}
	pickMe();
	// can't figure out how to keep the loop going after a character has died I feel like I'm on the right track.
	while (opponent.health > 0 && !character.every(x => x.health <= 0)) {
		let battleDamage = Math.floor(Math.random() * 5 + 1);

		battleChar.health -= battleDamage;
		opponent.health -= battleDamage;

		// console.log(`The index of ${battleChar.name} is ${character.indexOf(battleChar)}`);

		// console.log(character.every(x => x <= 0));

		if (battleChar.health > 0) {
			console.log(`After the battle ${battleChar.name}'s health is ${battleChar.health}`);
			pickMe();
		} else if (character.every(x => x.health <= 0)) {
			console.error(`You lose`);
		} else if (battleChar.health <= 0) {
			console.error(`${battleChar.name} has died.`);
			character.splice(character.indexOf(battleChar), 1, battleChar);
			// Array.splice(start index, number of deletions, what is going in )
			pickMe();
		}

		if (opponent.health > 0) {
			console.log(`After the battle ${opponent.name} is ${opponent.health}`);
		} else if (opponent.health <= 0) {
			console.error(`You Win`);
		}
	}
}
startCombat();
