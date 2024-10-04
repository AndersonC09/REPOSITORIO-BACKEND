// tuplas es un tipo de dato que permite expresar un arreglo con un numero fijo de elementos

let empleado: [string, number, boolean];

empleado = ['Maria', 28, true];
console.log(empleado[0]);
console.log(empleado[1]);
console.log(empleado[2]);

// Desestructuracion de la tupla
const [nombre, edad, activo] = empleado;
console.log(nombre);
console.log(edad);
console.log(activo);