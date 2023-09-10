//callbacks:son funciones que se pasan o envia por parámetro en una función
//Tambien se le llama funciones de primer orden
//Callback: llamado a la función

//Metodo sort

let abecedario = ['c', 'a', 'd', 'f', 'z', 'x', 'e', 'i', 'o', 'b'];

console.log(abecedario.sort());

let vocales = ['E', 'I', 'A', 'U', 'O'];

console.log(vocales.sort());

let letras = ['E', 'i', 'o', 'A', 'U', 'O', 'a', 'e'];

console.log(letras.sort());

let numeros = [-37, 11, -2, 15, -26, 52, 48, 78, 8, 105, 257];
console.log(numeros);

console.log(numeros.sort());

console.log(numeros);

//metodos mutables: son los que cambian al arreglo original
//sort muta al arreglo original

console.log(
  numeros.sort(function (a, b) {
    return a - b;
  })
);

console.log(numeros);

//Tarea: en un curso queremos ordenar alfabeticamente los alumnos para tomar asistencia

let students = [
  'Juan',
  'Carlos',
  'Carla',
  'Ezequiel',
  'Ana',
  'Omar',
  'Soe',
  'Abel',
];

const orderStudents = (array) => {
  let studentsOrdered = array.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });

  return studentsOrdered;
};

console.log(orderStudents(students));

console.log(students.reverse());

//reverse

let palabras = ['hola', 'chau', 'bue dia'];

console.log(palabras.reverse());

//Ejemplo: si ingresa una palabra por ej 'hola' ---> 'aloh'

const revertirPalabra = (palabra) => {
  return palabra.split('').reverse().join('');
};

console.log(revertirPalabra('hola'));

//Tarea
/* 
Métodos básicos de arreglos
Declara un array que vamos a llamar “clasificaciones” 
con los siguientes valores: Ana, Oswaldo, Raúl, Celia, María, Antonio 
(vamos a suponer que es el orden de clasificación de un concurso, en un momento dado)
Imprime la clasificación actual
El concurso continua, y se van modificando esas posiciones anteriores. Debemos cambiar en el array:

Celia adelanta a Raúl
Antonio es descalificado y se elimina del concurso
Detrás de Ana y antes de Oswaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden
Hay una nueva participante que pasa a encabezar la clasificación: Marta
Imprime la clasificación actualizada y comprueba que se ha hecho correctamente

*/

let clasificaciones = ['Ana', 'Oswaldo', 'Raúl', 'Celia', 'María', 'Antonio'];
//Imprime la clasificación actual
console.log(clasificaciones);

//Celia adelanta a Raúl
clasificaciones.splice(2, 2, 'Celia', 'Raúl');
console.log(clasificaciones);

//Antonio es descalificado y se elimina del concurso
clasificaciones.pop();
console.log(clasificaciones);

//Detrás de Ana y antes de Oswaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden
clasificaciones.splice(1, 0, 'Roberto', 'Amaya');
console.log(clasificaciones);

//Hay una nueva participante que pasa a encabezar la clasificación: Marta
clasificaciones.unshift('Marta');
//Imprime la clasificación actualizada y comprueba que se ha hecho correctamente
console.log(clasificaciones);

//Eliminar concursante conociendo su posición

const eliminarConcursante = (arr, name) => {
  let posicion = arr.findIndex((concursante) => {
    return concursante === name;
  });

  if (posicion > -1) {
    arr.splice(posicion, 1);
  } else {
    console.log('Nos e encontró ningún concursante');
  }
};

eliminarConcursante(clasificaciones, 'Ana')

console.log(clasificaciones);

//filter
//Es mutable: modifica el array original
//Recorre el array y te devuelve uno co el resultado de la cond dada en el callback

//ejemplo: devolver un array de numeros pares positivos

let pares = numeros.filter((num) => {
  return num % 2 === 0 && num > 0;
});

console.log(pares);

//Ejemplo: filtrar solo los numeros mayores a 10

let mayor10 = numeros.filter((numero) => numero > 10);

console.log(mayor10);

//ejercicio: Filtrar de un lista de personas los nombres que contengan la letra 'm'
//contemplar los casos en que la letra 'm' sea mayuscula y en los casos donde
// se ingresa espacios al comienzo o final de la letra

//trim(): metodo de string que elimina los espacios (strings vacios) al inicio y final de la
// cadena ed caracteres

let personas = [
  'Joaquin',
  'Abel',
  'Mariano',
  'Emmanuel',
  'Mirta',
  'Ambar',
  'Horacio',
];

const nombresFiltrados = (letra, arrayPersonas) => {
  let nombres = arrayPersonas.filter((nombre) => {
    return nombre.toUpperCase().trim().includes(letra.toUpperCase().trim());
  });

  return nombres;
};

console.log(nombresFiltrados('M', personas));

console.log(nombresFiltrados('Quin', personas));

//Esto se puede usar en un search para buscar

//find
//devuelve es el 1er elemento que cunpla con al condicion dada o undefined

let alumnos = ['Juan', 'Pedro', 'Maria', 'Pablo', 'Juan', 'Juan Cruz', 'Juan'];

let resultadoBusqueda = alumnos.find((alumno) => alumno === 'Juan');

console.log(resultadoBusqueda);

//Metodos inmutables: no cambian al array original
//map ---> devuelve un nuevo array con los resultados de aplicar el llamado a la función (callback)
//a cada elemento del array

let numerosDoble = numeros.map((num) => num * 2);

numeros;
numerosDoble;
numeros;

//map sierve para hacer una copia o 'clon' del array original

let copyStudents = alumnos.map((alumno) => alumno);

copyStudents;
alumnos;

//forEach --> no muta el arreglo original y no genera un nuevo array
//si quiero guardar / copiar en un nuevo array uso map si no uso forEach
//forEach nos permite también recorrer el array a olicando una función a c/ elemento

alumnos.forEach((alumno) => {
  let nameToUpperCase = alumno.toUpperCase();
  console.log(nameToUpperCase);
});

//concatenar dos o má arryas usando spread operator

let arrayJoin = [...alumnos, ...letras];

arrayJoin;

//some --> devuelve true si encuentra un elemento que cumpla con la condicón, si no false

let fruits = ['🍉', '🍌', '🍐', '🍇'];

console.log(fruits.some((fruit) => fruit === '🍎'));

//fill --> llena el array con lo que le pase por parámetro
//fill es mutable!!

let apples = ['🍉', '🍌', '🍐', '🍇'];
apples.fill('🍎');

apples;

//every --> devuelve true si todos los elementos cumplen con la condición, si no false

console.log(apples.every((apple) => apple === '🍎'));


//reduce: metodo devuelve un valor resultado de aplicar a cada elemnto un callback.
//devuelve el acumulador

let numbers = [1, 2, 5, 6, 10]

let sum = numbers.reduce((acc, curr)=>{
  return acc + curr
}, 0)

console.log(sum);

sum;
