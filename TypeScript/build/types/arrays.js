let numeros = [1, 2, 3, 4, 5];
console.log(numeros, 'numeros');
let nombres = [1, 2, 3, 4, 5];
console.log(nombres, 'nombres');
const nombresArray = ['Juan', 'John'];
console.log(nombresArray, 'nombresArray');
let mixedArray = [1, 'two', 3, true, { name: 'John' }];
console.log(mixedArray, 'mixedArray');
numeros.push(6);
numeros.pop();
numeros.shift();
numeros.unshift(0);
numeros.splice(2, 1);
let slicedArray = numeros.slice(1, 3);
let indexOfTwo = numeros.indexOf(2);
let mappedArray = numeros.map((num) => num * 2);
let filteredArray = numeros.filter((num) => num > 2);
let reducedArray = numeros.reduce((acc, num) => acc + num, 0);
//# sourceMappingURL=arrays.js.map