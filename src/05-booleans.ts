(() => {
	// Forma inferida o implicita
	let isEnable = true;
	// No te permitirá asignar otro valor que no sea boolean
	// isEnable = "asdasd";
	// isEnable = 1235;
	// isEnable = null;
	// isEnable = undefined;


	// Forma explicita
	let isNew: boolean = false;
	console.log('isNew: ',isNew);

	const random = Math.random();
	// El motor de TypeScript es capaz de analizar el código y darse cuenta de que la variable isNew es de tipo boolean,
	// por lo tanto, no se puede asignar un string a una variable de tipo boolean
	// isNew = random > 0.5 ? "true" : "false"; // -> Errado, no puedes asignar un string a una variable de tipo boolean
	// isNew = random > 0.5 ? "true" : false; // -> Errado, no puedes asignar un string a una variable de tipo boolean
	isNew = random > 0.5 ? true : false; // -> Correcto, ya que el resultado de la operación es un boolean
	console.log('random: ',random);
})()