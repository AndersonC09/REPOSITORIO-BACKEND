const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.use(express.static('public'));

// Ruta principal para enviar el archivo index.js
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
