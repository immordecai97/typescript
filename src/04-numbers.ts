// scope: Esto se utiliza para que el código se ejecute en un scope diferente al global
// y no se mezcle con el código de otros archivos.
(() => {
	// Trabajando de forma inferida (sin definir el tipo de dato)
	let productPrice = 100
	productPrice = 12;
	console.log('productPrice: ',productPrice);

	// Trabajando de forma explicita (definiendo el tipo de dato)
	let constumerAge: number = 28;
	// constumerAge = constumerAge + '1' // Error porque no se puede concatenar un número con un string (En JS si funcionaría y retornaría -> "281")
	constumerAge = constumerAge + 1; // Esto si funcionaría y retornaría -> 29
	console.log('constumerAge: ',constumerAge);

	// Cuando no quieras asignar un valor a una variable, en TypeScript deberías asignarle explicitamente el tipo de dato que va a tener la variable
	let productInStock: number;
	console.log('productInStock: ',productInStock); // (En JS retornaría -> undefined) En TypeScript avisa que la variable no tiene un valor asignado (pero si un tipo de dato)
	if(productInStock > 10) {
		console.log('Tenemos stock del producto');
	}


	// como parseInt retorna un número, inplisitamente se le asigna el tipo de dato number a la variable discount
	let discount = parseInt('Enviamos cualquier cosa para que devuelva NaN (Curiosidad: NaN, como no es un tipo de dato en sí mismo, sino un valor especial dentro del tipo de dato number en Javascript, pertenece al conjunto de números pero, representa un error numérico -> Se produce cuando una operación matemática no resulta en un número válido)');
	if(discount <= 200){
		console.log('Descuento aplicado');
	}else{
		console.log('Descuento no aplicado'); // En este caso se ejecutaría este console.log porque el valor de discount es NaN (a menos que se le asigne un valor numérico que cumpla la condición)
	}


	// En TypeScript támbien se pueden trabajar con números binarios, octales y hexadecimales. Por ejemplo:
	// Hexadecimal: Para definir un número hexadecimal se debe anteponer 0x al número
	let hexadecimal = 0xfff; // color blanco
	console.log('hexadecimal: ',hexadecimal); // Retorna 4095

	// Binario: Para definir un número binario se debe anteponer 0b al número
	let binary = 0b101010101;
	console.log('binary: ',binary); // Retorna 341

	// Octal: Para definir un número octal se debe anteponer 0o al número
	let octal = 0o755;
	console.log('octal: ',octal); // Retorna 493

	// -------------------------------------------
	// Aclaración: En JavaScript, existen los tipos de datos number como objetos, por lo tanto,
	// NO ES LO MISMO declarar el tipo de dato en TypeScript con Number (Objeto) que con number (Tipo de dato primitivo)
	// Ejemplo:
	// (MALA FORMA DE DECLARAR UN TIPO DE DATO EN TYPESCRIPT)
	let numberObject1: Number = 10; // Si bien, funciona, no es lo correcto, ya que se está asignando un tipo de dato primitivo a un objeto
	// es básicamente lo mismo que hacer esto:
	let numberObject2 = new Number(10); // Esto es un objeto. Te devuelve un objeto Number con el valor 10

	// (CORRECTA FORMA DE DECLARAR UN TIPO DE DATO EN TYPESCRIPT)
	// La manera correcta de declarar un número en TypeScript es:
	let numberPrimitive: number = 10; // Esto es un tipo de dato primitivo, aquí se está declarando el dato como un número primitivo
	// -------------------------------------------
})()