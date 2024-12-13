(() => {
	// Union Types: Permite definir un tipo de dato que puede ser de varios tipos diferentes (string, number, boolean, etc)
	// Existen varias formas de definir un tipo de dato de tipo unión o Union Types

	// 1. Mediante el uso del símbolo de pipe (|) entre los tipos de datos -> string | number | boolean
	let idUser: number | string;
	// Por lo tanto, la variable idUser puede ser de tipo number o string
	idUser = 10;
	idUser = 'texto';

	// 2. Mediante el uso de un alias o tipo personalizado
	// usando la palabra reservada type -> type UserID = string | number
	type UserID = string | number | boolean;
	let idUser2: UserID;
	// Por lo tanto, la variable idUser2 puede ser de tipo number o string o boolean
	idUser2 = 10;
	idUser2 = 'texto';
	idUser2 = true;

	// 3. Mediante el uso de interfaces
	interface UserInterface {
		id: number;
		username: string;
	}
	interface AdminInterface {
		id: number;
		role: string;
	}
	type UserAdmin = UserInterface | AdminInterface;
	let user: UserAdmin;
	user = { id: 1, username: 'admin' };
	user = { id: 2, role: 'admin' };
	console.log(user);

	// Usando funciones con Union Types
	function showData(data: string | number) {
		// La mágia de TypeScript nos permite saber si la variable data es de tipo string o number
		if(typeof data === 'string') {
			// Sabiendo que data es de tipo string, entonces podemos usar métodos o propiedades de los strings
			console.log(data.toUpperCase());
		} else {
			// Sabiendo que data es de tipo number, entonces podemos usar métodos o propiedades de los números
			console.log(data.toFixed(2));
			// Se ejecutaria como número gracias a que los tipos de datos ya fueron definidos en los parametros de la función
			// por lo tanto, se puede usar métodos o propiedades del tipo de dato que se está usando (en este caso number)
		}
	}

	showData('texto');
	showData(10);
})()