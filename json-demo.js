// const curso = require('./curso.json');

// console.log(curso.temas);

let infoCurso = {
    nombre: 'Node.js',
    duracion: 32
};

//Objeto -> Cadena de Caracteres
//cadena de caracteres en formato JSON
let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

//Cadena de Caracteres -> Objeto
let infoCursoObjeto = JSON.parse(infoCursoJSON);
console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);
console.log(infoCurso.nombre);
