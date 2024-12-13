import { subDays, format } from 'date-fns';
// subDays: lo que hace es restar días a una fecha
// format: lo que hace es formatear una fecha, o sea que la convierte en un string con el formato que le pasemos


const date = new Date(1998, 1, 28) // 28 de febrero de 1998
const rta = subDays(date, 10); // 18 de febrero de 1998
console.log(rta);
console.log(format(rta, 'dd/MM/yyyy')); // 18/02/1998