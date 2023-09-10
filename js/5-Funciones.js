//Declarar una función
/* 

 fuction nombreDeFuncion(){

    código a ejecutar
 } 
 
 */

function holaMundo() {
  console.log('Hola mundo, como estás?');
}

//invocar, ejecutar, llamar a un afunción

holaMundo();

//funciones con parámetros

/* 
 function nombreDeFuncion(parametro1, parametro2){

    codigo a ejecutar usando los parametros
 }

*/
/* 
let nombre = 'Pepe'
let apellido = 'Perez'

nombre ='abel' */

function saludar(nombre, apellido) {
  console.log(`Hola ${nombre} ${apellido}, como estás?`);
}

saludar('Abel', 'Perez');

//funciones que nos returnen un valor

function convertirDolaresPesos(dolares) {
  let pesos = dolares * 600;
  return pesos;
}

let precioCelular = convertirDolaresPesos(100);
console.log(precioCelular);

console.log(`el precios de la play 5 es ${convertirDolaresPesos(800)}`);

//ejemplo de función con parametros y return

function sumarValores(valor1, valor2) {
  if (typeof valor1 !== 'number' || typeof valor2 !== 'number') {
    console.error('Debe ingresar valores numericos');
  } else {
    return `${valor1} + ${valor2} = ${valor1 + valor2}`;
  }
}

console.log(sumarValores(8, 2));

console.log(sumarValores(4, 'chau'));

//Funciones flechas o Arrows Fuctions: son funciones anonimas
// se las puede definir asingandolas a varibles de tipo let o const
//pero lo más común será definirlas con const.
//let se usaría si quiero reasignarle su valor por gral se unsa const

/* 
 
const nombreFuncion = () => {
    código a ejucutar
}

*/

//Permiten obviar en algunos casos las {} y el return
/* 
const sumar = (num1, num2) => {
    return num1 + num2
}
 */

const sumar = (num1, num2) => num1 + num2;

console.log(sumar(8, 5));

//Una diferencia con als tradicionales es que no se pueden invocar antes de su incializacion

//Scope (alcance):
//Las variables dentro de un bloque de código {} nacen y mueren allí

let heroe = 'Batman';

function mostrarHeroe() {
  let heroe = 'Superman';
  console.log(heroe);

  return `Bienvenido ${heroe}`;
}

console.log(mostrarHeroe());

console.log(heroe);

//Tarea realizar un funcion que nos permita realizar las funciones de suma, resta, multiplicacion y division

const calculadora = (valor1, valor2, operador = '+') => {
  if (typeof valor1 !== 'number' || typeof valor2 !== 'number') {
    console.error('Debe ingresar valores numericos');
  }
  switch (operador) {
    case '+':
      return `${valor1} + ${valor2} = ${valor1 + valor2}`;
    case '-':
      return `${valor1} - ${valor2} = ${valor1 - valor2}`;
    case '*':
      return `${valor1} * ${valor2} = ${valor1 * valor2}`;
    case '/':
      return valor2 !== 0 ? `${valor1} / ${valor2} = ${valor1 / valor2}` : 'Ingrese un valor distinto de 0';
    case '%':
      return `${valor1} % ${valor2} = ${valor1 % valor2}`;
    default:
      return 'Ingrese un operador valido';
  }
};

console.log(calculadora(4, 0, '/'));

/* case '/':
      if (valor2 === 0) {
        return 'Ingrese un valor distinto de 0';
      } else {
        return `${valor1} / ${valor2} = ${valor1 / valor2}`;
      } */

// operador ternario
// cond ? se ejecuta cuando true : se ejecuta cuando false

