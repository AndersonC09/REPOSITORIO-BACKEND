// arrays

// declaracion
let numeros: number[] = [1, 2, 3, 4, 5];
console.log(numeros, 'numeros');
let nombres: Array<number> = [1, 2, 3, 4, 5];
console.log(nombres, 'nombres');
const nombresArray: Array<string> = ['Juan', 'John'];
console.log(nombresArray, 'nombresArray');

// any
let mixedArray: any[] = [1, 'two', 3, true, { name: 'John' }];
console.log(mixedArray, 'mixedArray');

// metodos

// push
numeros.push(6); // agreagar al final

// pop
numeros.pop(); // eliminar el ultimo

// shift
numeros.shift(); // eliminar el primero

// unshift
numeros.unshift(0); // agregar al principio

// splice
numeros.splice(2, 1); // eliminar un elemento en la posicion 2

// slice
let slicedArray = numeros.slice(1, 3); // copiar un rango de elementos

// indexOf
let indexOfTwo = numeros.indexOf(2); // obtener la posicion de un elemento

// map
let mappedArray = numeros.map((num) => num * 2); // map lo que hace es recorrer el array y por cada elemento ejecutar una funcion

// filter
let filteredArray = numeros.filter((num) => num > 2); // filtrar los elementos que cumplan con la condicion

// reduce
let reducedArray = numeros.reduce((acc, num) => acc + num, 0); // sumar todos los elementos del array