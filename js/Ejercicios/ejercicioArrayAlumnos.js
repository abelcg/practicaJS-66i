/* 
Pedir por pantalla el nombre de 5 alumnos usando bucle while
Guardarlos en un arreglo llamada o alumnos
Usando el array de alumnos mostrar por consola un mje de bienvenida pa c/u

*/

let alumnos = []

while (alumnos.length < 5 ) {
    //let nombre = prompt('Ingrese el nombre de un alumno')
    alumnos.push(prompt('Ingrese el nombre de un alumno'))
}

console.log(alumnos);

for (let i = 0; i < alumnos.length; i++) {
 console.log(`Hola ${alumnos[i]} binvenido/a al curso de fullstack 😁`);    
}

for(let alumno of alumnos){
    console.log(`Hola ${alumno} bienvenido al curso`);
}

