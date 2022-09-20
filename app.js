// const { saludar, saludarHolaMundo } = require('./saludos.js');

// //console.log(saludo.saludar('freeCodeCamp'));
// //console.log(saludo.saludarHolaMundo());

// console.log(saludarHolaMundo());
// console.log(saludar('freeCodeCamp'));

// console.log('Hola Mundo');
// console.warn('Ocurrio un error');
// console.error('Ocurrio un error!!');

//Modulo Process

//console.log(process.argv);

console.log('Uso de memoria');
console.log(process.memoryUsage());

//console.log('modulo de sistema operativo');
//console.log(process.platform);

const os = require('os');

console.log(os.type());
console.log(os.homedir());
console.log(os.uptime());

console.log(os.userInfo());
console.log(os.platform());
console.log(os.release());
console.log(os.totalmem());
console.log(os.freemem());



