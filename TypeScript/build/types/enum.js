var Color;
(function (Color) {
    Color["Rojo"] = "Rojo";
    Color["Verde"] = "Verde";
    Color["Azul"] = "Azul";
})(Color || (Color = {}));
let colorFavorito = Color.Rojo;
console.log(colorFavorito);
function getColor(color) {
    return `Color: ${color}`;
}
console.log(getColor(Color.Verde));
//# sourceMappingURL=enum.js.map