console.log('hola mundo');

// comentario de una línea --> aquí sigue el comentario

/* 
comentario de una
varias
líneas


aquí continua el comantario
*/

//mostrar mensajes en el documento

//document.write('hola "mundo" ');

// definición de variable (asignación, inicializacion)

let numero = 8; //el signo = se llama operador ded asignación

console.log(numero);

let numero2 = 10;

console.log(numero2);

numero2 = numero; // re asignando un valor a una variable

console.log(numero2);

//al definir una variables no usen caracteres especiales (@, ñ, -, no use espacio)

let anio = 2023;

let anio_pasado = 2022;

let anioSiguiente = 2024 //usar camelCase

//constantes

const palabra = 'hola'; // las constantes son inmutables es decir no se puede reasignarle un nuevo valor

console.log(palabra);

// palabra = 'chau'

console.log(palabra);

//scope: el ambito deonde vale una variable

// var numero = 25;

//Tipos de datos

// tipo string

//defino un string

let stringVacio = '';

let numberString = '8';

let numeroString = '10';

console.log(numberString);
console.log(numeroString);

document.write(numberString + numeroString); //cuando se trata de strings el signo + se llama concatenación
//concatenar es unir

document.write('<br>' + numberString + '  ' + numeroString);

//Tipo number

let num = 10

let number = 20

console.log(num + number); //en el caso de tipo number el signo + es operador de suma

//Tipo booleno

let verdadero = true;

let falso = false;

console.log(!verdadero); //el signo ! operador de negación


let comision = '66i'

document.write('<br>Comision' + '  ' + comision)

//mostrar un cartel de alerta al usuario

alert('Mensaje de alerta')
