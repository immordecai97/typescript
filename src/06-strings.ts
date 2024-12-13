(() => {

	let productTitle = 'iPhone 12 Pro Max';
	// productTitle = null; // Error
	// productTitle = () => {}; // Error
	// productTitle = 888; // Error

	productTitle = 'iPhone 14 Pro Max';
	console.log('productTitle', productTitle);

	const productDescription = "bla bla bla bla";
	console.log('productDescription', productDescription);

	let productPrice = 999.99;

	const summary = `
	Bloque de texto.
	Title: ${productTitle}
	Description: ${productDescription}
	Price: ${productPrice}
	`;

	console.log('summary', summary);
})()