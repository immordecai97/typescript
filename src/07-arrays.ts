(() => {
	// Arrays: Los arrays tienen varias formas de ser declarados

	// Array de números -> number[]
	const arrayNumbers = [10, 20, 75, 100];
	console.log('arrayNumbers', arrayNumbers);

	// Array de strings -> string[]
	const arrayStrings = ['Hello', 'World', 'Typescript'];
	console.log('arrayStrings', arrayStrings);

	// Array de booleanos -> boolean[]
	const arrayBooleans = [true, false, true, true];
	console.log('arrayBooleans', arrayBooleans);

	// Array de objetos -> object[]
	const arrayObjects = [{ name: 'John' }, { name: 'Jane' }];
	console.log('arrayObjects', arrayObjects);

	// Array de arrays -> number[][]
	const arrayArrays = [[10, 20], [30, 40]];
	console.log('arrayArrays', arrayArrays);

	// Array de cualquier tipo -> any[]
	const arrayAny = [10, 'Hello', true, { name: 'John' }];
	console.log('arrayAny', arrayAny);

	// Array de cualquier tipo -> Array<any>
	const arrayAny2 = [10, 'Hello', true, { name: 'John' }];
	console.log('arrayAny2', arrayAny2);

	// Array de cualquier tipo -> (number | string | boolean | object)[]
	const arrayAny3 = [10, 'Hello', true, { name: 'John' }];
	console.log('arrayAny3', arrayAny3);

	// Array de cualquier tipo -> (number | string | boolean | object)[]  (Forma explícita, recomendada)
	const arrayAny4: (number | string | boolean | object)[] = [10, 'Hello', true, { name: 'John' }];

	// Insertar valores en un array
	// Solo podrás insertar valores del mismo tipo de dato o datos que se le han definido al array

	// Array de números -> number[]
	arrayNumbers.push(50);
	console.log('arrayNumbers', arrayNumbers);

	// Array de strings -> string[]
	arrayStrings.push('Typescript');
	console.log('arrayStrings', arrayStrings);

	// Array de booleanos -> boolean[]
	arrayBooleans.push(false);
	console.log('arrayBooleans', arrayBooleans);

	// Array de objetos -> object[]
	arrayObjects.push({ name: 'Alice' });
	console.log('arrayObjects', arrayObjects);

	// Array de arrays -> number[][]
	arrayArrays.push([50, 60]);
	console.log('arrayArrays', arrayArrays);

	// Array de cualquier tipo -> any[]
	arrayAny.push(100);
	console.log('arrayAny', arrayAny);

	// Array de cualquier tipo -> Array<any>
	arrayAny2.push(100);
	console.log('arrayAny2', arrayAny2);

	// Array de cualquier tipo -> (number | string | boolean | object)[]
	arrayAny3.push(true);
	console.log('arrayAny3', arrayAny3);

	// Array de cualquier tipo -> (number | string | boolean | object)[]  (Forma explícita, recomendada)
	arrayAny4.push({ name: 'Alice' });
	console.log('arrayAny4', arrayAny4);

	// Eliminar valores de un array
	// Solo podrás eliminar valores del mismo tipo de dato o datos que se le han definido al array
})()