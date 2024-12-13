(() => {
	let userID: string | number;

	function showData(userID: string | number, sizes: ShirtSize) {
		// La mágia de TypeScript nos permite saber si la variable data es de tipo string o number
		if(typeof userID === 'string') {
			// Sabiendo que data es de tipo string, entonces podemos usar métodos o propiedades de los strings
			console.log(userID.toUpperCase());
			console.log(sizes.toLocaleLowerCase());
		} else {
			// Sabiendo que data es de tipo number, entonces podemos usar métodos o propiedades de los números
			console.log(userID.toFixed(2));
			// Se ejecutaria como número gracias a que los tipos de datos ya fueron definidos en los parametros de la función
			// por lo tanto, se puede usar métodos o propiedades del tipo de dato que se está usando (en este caso number)
		}
	}


	// Literal types: Son un subconjunto de los tipos de datos de TypeScript que permiten definir un tipo de dato con un valor específico
	// Ejemplo:
	// LO que se hace es definir el tipo de dato y el valor que exclusivamente puede tener la variable
	let shirtSize: 'S' | 'M' | 'L' | 'XL';
	// Por lo tanto no le se puede agregar un valor diferente a los establecidos
	// shirtSize = 's'; // "s" es minuscula y no es un valor permitido
	// shirtSize =  8764 // 8764 no es un valor permitido
	// shirtSize = 'Otro texto'; // "Otro texto" no es un valor permitido
	// Valores permitidos:
	shirtSize = 'S';
	shirtSize = 'M';
	shirtSize = 'L';
	shirtSize = 'XL';


	// Otra forma de definir lo literal types es mediante el uso de alias o tipos personalizados
	type ShirtSize = 'S' | 'M' | 'L' | 'XL';
	let shirtSize2: ShirtSize; // Definimos la variable shirtSize2 con el tipo personalizado ShirtSize
	shirtSize2 = 'S'; // Valores permitidos
	showData('texto', shirtSize2); // Se ejecuta la función showData con los valores permitidos -> 'texto' y 'S'j
})()