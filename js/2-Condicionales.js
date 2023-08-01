// Estructuras condicionales

// if

/* 
 if(condicion logica){

   código a ejecutar cuando sea true

 }

*/

let numero = 8;

let number = '8';

// comparación estricta => da false
if (numero === number) {
  console.log('son iguales');
}

// comparación no estricta => da true
if (numero == number) {
  console.log('son iguales');
}

let saludo = 'hola';
let despedida = 'chau';

if (saludo !== despedida) {
  console.log('son distitos mensajes');
} else {
  console.log('son el mismo mensaje');
}

let edadPablo = 45;
let edadMarcos = 20;
let edadMaria = 10;

if (edadPablo > edadMarcos && edadPablo > edadMaria) {
  document.write('Pablo es el mayor');
} else if (edadMarcos > edadPablo && edadMarcos > edadMaria) {
  document.write('Marcos es el mayor');
} else {
  document.write('Maria es la mayor');
}

//OR: Con que solo 1 de las dos condiciones sea true devuelve true
//AND: Ambas condiciones deben ser true para que la comparación sea true
