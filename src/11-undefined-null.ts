(() => {
	// Uso de Undefined y Null
	// Cuando utilizamos datos undefined y null de manera inferida en TypeScript,
	// se les asigna por defecto el tipo de dato any a las variables con estos valores.
	// let myNull = null; // -> Any
	// let myUNdefined = undefined; // -> Any

	// la manera correcta de definir una variable con estos valores seria de la manera explicita:
	let myNull: null = null;
	let myUndefined: undefined = undefined;

	// Funcion de ejemplo:
	// primera forma
	function hi(name: string | null) {
		if (name) {
			return console.log(`Hola ${name.toUpperCase()}`);
		}
		console.log("Hola usuario");
	}

	// segunda forma
	function hiV2(name: string | null) {
		// Aquí podemos usar el operador de fusión de nulos o Nullish Coalescing Operator (??) tambien conocido como operador de fusión de nulos
		// Pero utilizamos el operador de acceso seguro o Optional Chaining Operator (?.) para acceder a la propiedad toUpperCase() de la variable name
		let hello = name?.toUpperCase() || "usuario";
		console.log(`Hola ${hello}`);
	}

	hi('Carlos');
	hi(null);

	hiV2('Carlos');
	hiV2(null);
})()