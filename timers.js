//Modulo Timers

// setTimeout(funcion, retraso, argumento);

function mostrarTema(tema) {
  console.log(`Estoy aprendiendo ${tema}`);
}

//mostrarTema('Node.js');

setTimeout(mostrarTema, 1000, 'Node.js');

function sumar(a, b) {
  console.log(a + b);
}

setTimeout(sumar, 2000, 5, 6);

//setImmediate() //ejecuta la funcion inmediatamente
// setImmediate(funcion, argumento1, argumento2);

// Intervalos
//setInterval(function, intervalo, argumento1, argumento2);

setInterval(sumar, 2000, 5, 6);

//do while 1 - 10
let i = 1;
let contador = 0;
do {

  console.log(i);
  i = i * 2;
  contador++;
} while (contador < 64);