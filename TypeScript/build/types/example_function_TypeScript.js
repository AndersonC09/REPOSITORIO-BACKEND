const auxNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
auxNumber.push(10, 12, 15, 16, 17);
console.log('push', auxNumber);
auxNumber.pop();
console.log('pop', auxNumber);
const index1 = auxNumber.indexOf(1);
const index4 = auxNumber.indexOf(4);
const index7 = auxNumber.indexOf(7);
console.log('indexOf 1:', index1);
console.log('indexOf 4:', index4);
console.log('indexOf 7:', index7);
const extractedArray = auxNumber.slice(2, 9);
console.log('slice del 2 a 9', extractedArray);
const GreaterOne = auxNumber.every(num => num > 1);
console.log('every mayor que 1', GreaterOne);
const GreaterThanOrEqual = auxNumber.some(num => num >= 7);
console.log('some mayor o igual a 7:', GreaterThanOrEqual);
const auxString = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
auxString.push('10', '11', '12', '13', '14');
console.log('push', auxString);
const index10 = auxString.indexOf('10');
const index11 = auxString.indexOf('11');
const index14 = auxString.indexOf('14');
console.log('indexOf 10:', index10);
console.log('indexOf 11:', index11);
console.log('indexOf 14:', index14);
const mensaje = 'Bienvenidos al ITP';
const palabras = mensaje.split(' ');
console.log('split', palabras);
const resultado = palabras.join(',');
console.log('join', resultado);
const names = 'michael,anderson,yadir,kevin,emerson';
const namesArray = names.split(',');
console.log('Array dividido por comas:', namesArray);
const joinedNamesBySpace = namesArray.join(' ');
console.log('Cadena unida por espacios:', joinedNamesBySpace);
const arrayproducts = [
    {
        id: 1,
        name: 'arroz',
        price: 1000,
        priceDiscont: 700,
    },
    {
        id: 2,
        name: 'atun',
        price: 2500,
        priceDiscont: 1500,
    }
];
const filteredByPrice = arrayproducts.filter(product => product.price > 900);
console.log('Filtrado por price mayor a 900 (con filter):', filteredByPrice);
const filteredByPriceFor = [];
for (let i = 0; i < arrayproducts.length; i++) {
    if (arrayproducts[i].price > 900) {
        filteredByPriceFor.push(arrayproducts[i]);
    }
}
console.log('Filtrado por price mayor a 900 (con for):', filteredByPriceFor);
const firstDiscountOver500 = arrayproducts.find(product => product.priceDiscont > 500);
console.log('Primer producto con priceDiscount mayor a 500:', firstDiscountOver500);
const indexPriceOver1000 = arrayproducts.findIndex(product => product.price > 1000);
console.log('Índice del primer producto con price mayor a 1000:', indexPriceOver1000);
const arrayO1 = [1, 2, 3, 4];
const arrayO2 = [6, 7, 8, 9];
const concat = arrayO1.concat(arrayO2);
console.log(concat, 'concatenacion');
arrayO1.push(...arrayO2);
console.log(arrayO1, 'arrayO1');
const sorted = concat.sort();
console.log(sorted, 'ordenar de forma ascendente');
concat.reverse();
console.log(concat, 'ordenar de forma descendente');
arrayproducts.push({
    id: 3,
    name: 'mani',
    price: 1300,
    priceDiscont: 800,
}, {
    id: 4,
    name: 'jamon',
    price: 1400,
    priceDiscont: 500,
}, {
    id: 5,
    name: 'salchicha',
    price: 1800,
    priceDiscont: 800,
});
console.log('Array de productos actualizado:', arrayproducts);
//# sourceMappingURL=example_function_TypeScript.js.map