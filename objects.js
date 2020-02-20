// const character = [
// 	{ name: 'Gandalf', health: 40 },
// 	{ name: 'Dumbledore', health: 50 },
// 	{ name: 'Merlin', health: 25 },
// ];

// const opponent = {name: 'Morgana', health: 75},

const character = [
	{ name: 'Gandalf', health: 40 },
	{ name: 'Dumbledore', health: 50 },
	{ name: 'Merlin', health: 25 },
];

const opponent = { name: 'Morgana', health: 75 };

const nameList = (...names) => {
	for (let i of names) {
		console.log(`Name is ${i.name} and their health is ${i.health}`);
	}
};

nameList(...character);
nameList(opponent);
let char;

function startCombat() {
	function chooseChar() {
		let chooseChar = prompt(`Choose a charactern\nChoose between Gandalf [1], Dumbledore [2] or Merlin [3]`);

		if (chooseChar === null || chooseChar === '') {
			alert('please try again');
			chooseChar();
			return;
		}

		switch (chooseChar) {
			case '1':
				char = { name: 'Gandalf', health: 40 };
				return;
			case '2':
				char = { name: 'Dumbledore', health: 50 };
				return;
			case '3':
				char = { name: 'Merlin', health: 25 };
				return;
		}
		chooseChar();
	}

	let battleDamage = Math.floor(Math.random() * 5 + 1);

	let heroesHP = chooseChar(char.health) - battleDamage;
	let opponentHP = opponent.health - battleDamage;

	while (opponentHP > 0) console.warn(`${chooseChar(char.name)}'s health is ${heroesHP}`);
	console.error(`${opponent.name}'s health is ${opponentHP}`);
}
startCombat();
