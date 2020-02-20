// list of characters
let character = [
	{ name: 'Gandalf', health: 15 },
	{ name: 'Dumbledore', health: 20 },
	{ name: 'Merlin', health: 12 },
];
// opponent
const opponent = { name: 'Morgana', health: 50 };
// create function to display list of all combatants
const nameList = (...names) => {
	for (let i of names) {
		console.log(`${i.name}'s health is ${i.health}`);
	}
};

// display list of all combatants
nameList(...character);
nameList(opponent);
function startCombat() {
	function pickMe() {
		let choose = prompt(
			`Choose a wizard to battle Morgana\nChoose between \n${character[0].name} [1], \n${character[1].name} [2] or \n${character[2].name} [3]`
			// `${nameList(...character)}`
		);

		choose = Number(choose);
		// why is this alerting "Run away coward"???
		// also when I enter a wrong number, then a correct one, it breaks the code.

		if (choose === '' || choose > character.length || choose <= 0) {
			alert(`please try again`);
			pickMe();
		} else if (choose === null) {
			console.warn(`Run away cowards`);
		}

		battleChar = character[choose - 1];
		console.warn(`You have chosen ${battleChar.name} and they have ${battleChar.health} health`);
	}
	pickMe();

	while (opponent.health > 0 && character.every(x => x <= 0) === false) {
		let battleDamage = Math.floor(Math.random() * 5 + 1);

		battleChar.health -= battleDamage;
		opponent.health -= battleDamage;

		// console.log(`The index of ${battleChar.name} is ${character.indexOf(battleChar)}`);

		// console.log(character.every(x => x <= 0));

		if (battleChar.health > 0) {
			console.log(`After the battle ${battleChar.name}'s health is ${battleChar.health}`);
			pickMe();
		} else if (battleChar.health <= 0) {
			console.error(`${battleChar.name} has died.`);
			character.splice(character.indexOf(battleChar), 1, battleChar);
		} else if (character.every(x => x <= 0) === true) {
			console.error(`You lose`);
		}

		if (opponent.health > 0) {
			console.log(`After the battle ${opponent.name} is ${opponent.health}`);
		} else if (opponent.health <= 0) {
			console.error(`You Win`);
		}
	}
}
startCombat();
