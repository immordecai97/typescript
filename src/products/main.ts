import { addProduct, calcStock, productsList } from "./product.service";

addProduct({
	title: "Camisa",
	createdAt: new Date(),
	stock: 4,
	size: 'M'
})

addProduct({
	title: "Pantalon",
	createdAt: new Date(),
	stock: 6
})

console.log(productsList);
const total = calcStock();
console.log("Total stock: ", total);