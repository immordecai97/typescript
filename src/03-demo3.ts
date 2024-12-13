// TypeScript analiza el código de manera modular, por lo tanto al crear una variable con el mismo nombre en otro archivo,
// TypeScript arrojará un error de redeclaración de variable.
// Esto se debe a que TypeScript no sabe si la variable es la misma o si es otra variable diferente.
// Por lo tanto, se debe usar estas variables en un scope o usar export para exportarlas a otro archivo.

//---------------------------------------------
// NOTA: En otras palabras, básicamente TypeScript se da cuenta de que hay una variable con el mismo nombre en otro archivo
// y no sabe si es la misma variable o si es otra variable diferente.
//---------------------------------------------

// Descomenta si quieres ver el error de redeclaración de variable:
// let myProductName = 'Acme Rockets';
// let myProductPrice = 19.99;

// Encerrando el código en una función anónima, se evita la redeclaración de variables. (scope)
(function () {
	let myProductName = 'Acme Rockets';
	let myProductPrice = 19.99;

	myProductName = 'Acme Rockets 2';
	myProductName.toLocaleUpperCase(); // ACME ROCKETS 2

	myProductPrice.toFixed(8) // 19.99000000

	const myProductStock = 1000;
	const myProductName2 = 'Acme Rockets 7';
})()