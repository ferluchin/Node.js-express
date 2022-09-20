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