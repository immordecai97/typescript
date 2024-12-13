// Tipos de datos inferidos en TypeScript
let myProductName = 'Acme Corporation'; // string
let myProductPrice = 800; // number

// myProductName = 555; // Error: Type '555' no es assignable al tipo 'string'
myProductName = 'New Corporation';
console.log(myProductName.toLocaleUpperCase()) // NEW CORPORATION
myProductPrice.toFixed(5); // 800.00000


// Cuando es una constante TypeScript no infiere el tipo de dato, por lo tanto se debe especificar el tipo de dato
const myProductStock = 1000; // number





// Tipos de datos explícitos en TypeScript

// Tipos de datos inferidos en TypeScript
let myProductNameExplicito: string = 'Acme Corporation'; // string
let myProductPriceExplicito: number = 800; // number

// myProductNameExplicito = 555; // Error: Type '555' no es assignable al tipo 'string'
myProductNameExplicito = 'New Corporation';
console.log(myProductNameExplicito.toLocaleUpperCase()) // NEW CORPORATION
myProductPriceExplicito.toFixed(5); // 800.00000


// Cuando es una constante TypeScript no infiere el tipo de dato, por lo tanto se debe especificar el tipo de dato
const myProductStockExplicito: number = 1000; // number