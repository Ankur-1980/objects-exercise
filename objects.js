// const character = [
// 	{ name: 'Gandalf', health: 40 },
// 	{ name: 'Dumbledore', health: 50 },
// 	{ name: 'Merlin', health: 25 },
// ];

// const opponent = {name: 'Morgana', health: 75},

function startCombat() {
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
	// display list of all combtants
	nameList(...character);
	nameList(opponent);

	// how damage is dealt in battle
	let battleDamage = Math.floor(Math.random() * 5 + 1);
	char.health = pickMe(char.health) - battleDamage;
	opponent.health = opponent.health - battleDamage;

	// choosing a character for battle
	let char = pickMe();
	function pickMe() {
		let pickMe = prompt(
			'Choose a wizard to battle Morgana\nChoose between Gandalf [1], Dumbledore [2] or Merlin [3]'
		);
		if (pickMe === null) {
			alert('Seriously!? Just answer the question');
			pickMe();
			return;
		}
		let char;
		switch (pickMe) {
			case '1':
				char = { name: 'Gandalf', health: 40 };
				break;
			case '2':
				char = { name: 'Dumbledore', health: 50 };
				break;
			case '3':
				char = { name: 'Merlin', health: 25 };
				break;
		}
		console.log(`${char.name} has ${char.health} health`);
		return char;
	}

	console.log(`After the battle ${char.name}'s health is ${char.health}`);
	console.log(`After the battle ${opponent.name} is ${opponent.health}`);
}

startCombat();

// loop for battle
