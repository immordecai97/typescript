(() => {
	// Any type: es un tipo de dato que puede ser cualquier cosa y se debe evitar su uso
	// Para declararlo se utiliza la palabra reservada any
	let myDynamicVar: any;
	myDynamicVar = 'Hello';
	myDynamicVar = 10;
	myDynamicVar = true;
	myDynamicVar = { name: 'John' };
	console.log('myDynamicVar', myDynamicVar);

	// ------------------------------
	// Se debe evitar el uso de any, ya que se pierde el tipado estático de Typescript
	// Normalmente se utiliza any cuando no se conoce el tipo de dato que se va a utilizar
	// o cuando se necesita trabajar con una librería que no está fuertemente tipada
	// ------------------------------


	// Cast en variables any
	// Cast: es la conversión de un tipo de dato a otro,
	// es como decirle a Typescript que defina un tipo de dato específico para una variable
	// y así Typescript pueda validaro tener un contexto de lo que se está haciendo con esa variable
	// Existen dos formas de hacer cast en Typescript.
	// (1) Primera forma:
	// Para hacer un cast se utiliza la palabra reservada as seguida del tipo de dato al que se quiere convertir
	// as: es una palabra reservada de Typescript que se utiliza para hacer cast en español significa "como"
	// NOTA: A estos se les suele llamar Type Assertion o Type Casting o Type Coercion o Type Conversion 
	// Ejemplo:

	// Cast a string -> (variableTipoAny as tipoDato) -> se lee como: variableTipoAny como tipoDato
	// lo interesante de hacer cast es que asi Typescript puede validar el tipo de dato que se está utilizando
	// por lo tanto, puedes acceder a los métodos y propiedades del tipo de dato al que se está convirtiendo
	// Por ejemplo, si se convierte a string, se puede acceder a los métodos y propiedades de un string

	const rta = (myDynamicVar as string).toUpperCase(); // en este caso, siendo string se puede acceder al método toUpperCase()


	// (2) Segunda forma:
	// Es utilizando <> (corchetes angulares) en lugar de as
	// A estos <> (corchetes angulares) se les conoce como Generics en Typescript
	// Son utilizados para hacer cast de un tipo de dato a otro y para trabajar con colecciones de datos
	// Ejemplo:

	// Cast a number -> <tipoDato>variableTipoAny -> se lee como: tipoDato variableTipoAny
	const rta2 = (<number>myDynamicVar).toFixed(2); // en este caso, siendo number se puede acceder al método toFixed()

})()