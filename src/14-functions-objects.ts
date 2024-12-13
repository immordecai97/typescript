(() => {

	// Esta seria la forma más básica de usar una funcion
	// const login = (email: string, pass: string) => {
	// 	console.log(email, pass);
	// }

	// login("carlos@gmail.com", "asdasd");

	// Ahora apliquemos la misma funcion pero pasando como argumento un objeto
	const login = (data: {email: string, pass: string}) => {
		const {email, pass} = data;
		console.log(email, pass);
	}

	login({
		email: "carlos@gmail.com", 
		pass: "asdasd"
	});


	// Hagamoslo más interesante!!!
	type Sizes = 'S' | 'M' | 'L' | 'XL';
	const productsList: any[] = [];
	const addProduct = (data: {
		title: string,
		createdAt: Date,
		stock: number,
		size?: Sizes
	}) => {
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

	console.log(productsList);
})()