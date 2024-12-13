// Usando librerias que no soportan Typescript
// var _ = require('lodash'); // Error, porque Typescript no reconoce la sintaxis de require
import _ from 'lodash';

// Como Lodash no soporta Typescript, debemos instalar las definiciones de tipos de Lodash
// Typescript ha creado módulos para librearías que no soportan Typescript
// En este caso, debemos instalar las definiciones de Lodash -> npm i --save-dev @types/lodash

// Luego de eso ya lo podemos utilizar sin problemas

const data = [
	{
		username: 'Carlos',
		role: 'admin'
	},
	{
		username: 'Valentina',
		role: 'seller'
	},
	{
		username: 'Zulema',
		role: 'seller'
	},
	{
		username: 'Santiago',
		role: 'customer'
	},
];

const rta = _.groupBy(data, (item) => item.role); // Agrupa los elementos de un array según una condición
console.log(rta); // { admin: [ { username: 'Carlos', role: 'admin' } ], seller: [ { username: 'Valentina', role: 'seller' }, { username: 'Zulema', role: 'seller' } ], customer: [ { username: 'Santiago', role: 'customer' } ] }