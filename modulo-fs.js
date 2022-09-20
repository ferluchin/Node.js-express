const fs = require('fs');

fs.readFile('index.html', 'utf-8', (err, contenido) => {
    if (err) {
        console.log('Error al leer el archivo');
    } else {
        console.log(contenido);
    }
});