const fs = require('fs');

// fs.readFile('index.html', 'utf-8', (err, contenido) => {
//     if (err) {
//         console.log('Error al leer el archivo');
//     } else {
//         console.log(contenido);
//     }
// });

// RENOMBRA ARCHIVO

// fs.rename('main.html', 'index.html', (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Archivo renombrado');

// });

//agregar contenido a un archivo

// fs.appendFile('index.html', '<p> Append </p>', (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Contenido agregado');
// });

//reemplazar todo el contenido del archivo

// fs.writeFile('index.html', '<p> Reemplazo </p>', (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Contenido reemplazado');
// });

// Eliminar archivo
fs.unlink('index.html', (err) => {
    if (err) {
        throw err;
    }
    console.log('Archivo eliminado');
});
