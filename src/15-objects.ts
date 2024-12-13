(() => {
	// Object
	// HAGAMOSLO AHORA MUCHOS MÁS INTERESANTE!!!
	type Sizes = 'S' | 'M' | 'L' | 'XL';
	// Definimos un tipo de dato llamado Product
	type Product = {
		title: string,
		createdAt: Date,
		stock: number,
		size?: Sizes
	}

	// const productsList: any[] = []; // Antes era un array de any que aceptaba pushear cualquier cosa dentro... pero ya no!
	const productsList: Product[] = []; // Ahora, asignamos un array de tipo Product[], lo que establece que solo se pueden pushear objetos de tipo Product

	// Además, ahora la función addProduct recibe un objeto de tipo Product en lugar de un objeto genérico (Más bonito, más elegante)
	const addProduct = (data: Product) => {
		productsList.push(data);
	}

	addProduct({
		title: "Camisa",
		createdAt: new Date(),
		stock: 10,
		size: 'M'
	});

	addProduct({
		title: "Pantalon",
		createdAt: new Date(),
		stock: 10
	});

	// addProduct('Perreo intenso'); // Esto ya no es posible, porque el array solo acepta objetos de tipo Product

	console.log(productsList);
})()