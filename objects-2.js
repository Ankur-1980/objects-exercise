// list of characters
const character = [
	{ name: 'Gandalf', health: 40 },
	{ name: 'Dumbledore', health: 50 },
	{ name: 'Merlin', health: 25 },
];
// opponent
const opponent = { name: 'Morgana', health: 100 };
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
		);

		choose = Number(choose);
		// if (choose === null || choose > character.length || choose < character.length) {
		// 	prompt(`please try again`);
		// 	pickMe();
		// }
		battleChar = character[choose - 1];
		console.log(`You have chosen ${battleChar.name} and they have ${battleChar.health} health`);
	}
	pickMe();

	while (opponent.health > 0 && battleChar.health > 0) {
		let battleDamage = Math.floor(Math.random() * 5 + 1);

		battleChar.health -= battleDamage;
		opponent.health -= battleDamage;

		if (battleChar.health > 0) {
			console.log(`After the battle ${battleChar.name}'s health is ${battleChar.health}`);
		} else if (battleChar.health <= 0) {
			console.error('You Lose');
			break;
		}

		if (opponent.health > 0) {
			console.log(`After the battle ${opponent.name} is ${opponent.health}`);
		} else if (opponent.health <= 0) {
			console.error(`You Win`);
		}
	}
}
startCombat();
