// 1. agregarle al array por medio del push = 10,12,15,16,17
//eliminar el ultimo elemento con pop
// encontrar el indice un elemento , en este caso el 1,4,7 con index off
// extraer una parte de la array del 2 asta el 9
//verificar si todos los elementos son mayores por uno con every = boolean
// verificar si algun elemento sea mayor o igual a 7 con son.
//2. agregar al array por medio de un push el 10 al 14 por medio de push
// encontrar el indice de un elemento en este caso el 10 11 14
//3. dividir la cadena en unn array de palabras donde el separador sea el espacio por split  a la salida de este vamos a tomar este resultado y le aplicamos un join
//4.dividir la cadena en una array de palabras donde el separador sea la comas por split
// a esta array aplicar el join donde separe las palabras por espacios
//5. vamos a filtrar en unas constante donde el price sea mayor de 900 por medio de fylter y por medio de un for 
// encontrar el primer objeto de la array donde el priceDiscount sea mayor a 500 
// encontrar el indice del primer elemento de la array donde el price sea mayor que 1000
//6. concatenar el array 1 con el array 2 por medio de concaf y push 
// a la costante generada vamos a ordenar de menor a mayor por medio del sort 
// a la costante generada vamos a ordenar decendente medio del revers
// 7 al cuarto punto vamos agregarle un nuevo objeto  por medio de push.

//punto 1

const auxNumber : number[]=[1,2,3,4,5,6,7,8,9];

// agregarle al array por medio del push = 10,12,15,16,17
auxNumber.push(10, 12, 15, 16, 17);
console.log('push', auxNumber);

//eliminar el ultimo elemento con pop
auxNumber.pop();
console.log('pop', auxNumber);

// encontrar el indice un elemento , en este caso el 1,4,7 con indexof
const index1 = auxNumber.indexOf(1);
const index4 = auxNumber.indexOf(4);
const index7 = auxNumber.indexOf(7);
console.log('indexOf 1:', index1);
console.log('indexOf 4:', index4);
console.log('indexOf 7:', index7);

// extraer una parte de la array del 2 asta el 9
const extractedArray = auxNumber.slice(2, 9); 
console.log('slice del 2 a 9', extractedArray);

//verificar si todos los elementos son mayores que 1 con every = boolean
const GreaterOne = auxNumber.every(num => num > 1);
console.log('every mayor que 1', GreaterOne);

// verificar si algun elemento sea mayor o igual a 7 con some
const GreaterThanOrEqual = auxNumber.some(num => num >= 7);
console.log('some mayor o igual a 7:', GreaterThanOrEqual);



//punto 2

const auxString : string[]=['1','2','3','4','5','6','7','8','9'];

// agregar al array por medio de un push el 10 al 14 por medio de push
auxString.push('10', '11', '12', '13', '14');
console.log('push', auxString);

// encontrar el indice de un elemento en este caso el 10 11 14
const index10 = auxString.indexOf('10');
const index11 = auxString.indexOf('11');
const index14 = auxString.indexOf('14');
console.log('indexOf 10:', index10);
console.log('indexOf 11:', index11); 
console.log('indexOf 14:', index14);

//punto 3

const mensaje: string= 'Bienvenidos al ITP';


// Dividir la cadena en un array de palabras usando split
const palabras = mensaje.split(' ');
console.log('split', palabras); 


// Volver a unir el array de palabras usando join
const resultado = palabras.join(',');
console.log('join',resultado);  



//punto 4

const names : string = 'michael,anderson,yadir,kevin,emerson';

//dividir la cadena en una array de palabras donde el separador sea la comas por split
const namesArray = names.split(',');
console.log('Array dividido por comas:', namesArray);

// a esta array aplicar el join donde separe las palabras por espacios
const joinedNamesBySpace = namesArray.join(' ');
console.log('Cadena unida por espacios:', joinedNamesBySpace);

//punto 5
const arrayproducts : any []=[
    {
        id:1,
        name:'arroz',
        price:1000,
        priceDiscont: 700,
    },

    {
        id:2,
        name:'atun',
        price:2500,
        priceDiscont: 1500,
    }
]

// Filtrar los productos donde el price sea mayor de 900 usando filter
const filteredByPrice = arrayproducts.filter(product => product.price > 900);
console.log('Filtrado por price mayor a 900 (con filter):', filteredByPrice);

// Filtrar los productos donde el price sea mayor de 900 usando un for
const filteredByPriceFor: any[] = [];
for (let i = 0; i<arrayproducts.length; i++) {
  if (arrayproducts[i].price > 900) {
    filteredByPriceFor.push(arrayproducts[i]);
  }
}
console.log('Filtrado por price mayor a 900 (con for):', filteredByPriceFor);

//Encontrar el primer objeto donde el priceDiscont sea mayor a 500.
const firstDiscountOver500 = arrayproducts.find(product => product.priceDiscont > 500);
console.log('Primer producto con priceDiscount mayor a 500:', firstDiscountOver500);

// Encontrar el índice del primer producto donde el price sea mayor que 1000.
const indexPriceOver1000 = arrayproducts.findIndex(product => product.price > 1000);
console.log('Índice del primer producto con price mayor a 1000:', indexPriceOver1000);


//punto 6

const arrayO1: number[] = [1,2,3,4];
const arrayO2: number[] = [6,7,8,9];

//concatenar el array 1 con array 2 por medio de concat
const concat = arrayO1.concat(arrayO2);
console.log(concat, 'concatenacion');

//concatenar el array 1 con array 2 por medio de push
arrayO1.push(...arrayO2); //operador propagacion
console.log(arrayO1, 'arrayO1');

// Ordenar de forma ascendente usando sort
const sorted = concat.sort();
console.log(sorted, 'ordenar de forma ascendente');

// Ordenar de forma descendente usando reverse
concat.reverse();
console.log(concat, 'ordenar de forma descendente');

  //punto 7

  //al cuarto punto vamos agregarle un nuevo objeto  por medio de push.
  arrayproducts.push(
    {
      id: 3,
      name: 'mani',
      price: 1300,
      priceDiscont: 800,
    },
    {
      id: 4,
      name: 'jamon',
      price: 1400,
      priceDiscont: 500,
    },
    {
      id: 5,
      name: 'salchicha',
      price: 1800,
      priceDiscont: 800,
    }
  );
  
  console.log('Array de productos actualizado:', arrayproducts);

