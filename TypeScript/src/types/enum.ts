// enum es un tipo de dato que permite definir un conjunto de constantes con nombre

enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul',
}

// Uso de enum
let colorFavorito: Color = Color.Rojo;
console.log(colorFavorito);

// Uso de enum con funciones
function getColor(color: Color): string {
    return `Color: ${color}`;
}
console.log(getColor(Color.Verde));