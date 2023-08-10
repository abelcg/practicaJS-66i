//Arrays o arreglos

//definimos o creamos un arreglo vacio de forma literal

let arreglo = [];

//crear o definir un array con datos de forma literal

let series = ['Naruto', 'Juegos de tronos', 4,5, true]

console.log(series);

//crear o definir un array vacio usando el constructor de arrays

let array = new Array();

console.log(array);

//crear o definir un array conndatos usando el constructor de arrays

let array2 = new Array(1,5,4,3)

console.log(array2);

let array3 = [1,2,3]

//cantidad de elementos del arreglo

console.log(array3.length);

//obtener o mostrar un elemento del array

console.log(array3[5]);

//obtener el ultimo elemento del array

console.log(array3[array3.length - 1]);

//reasingnar el valor a un determinado elemento del array

array3[0] = 4;

console.log(array3);

array3[5] = 'hola';

console.log(array3);

console.log(array3.length);

//agregar uno varios elementos al final o en la última posicion del array

array3.push('chau')

console.log(array3);

//eliminar o sacr del arreglo el ultimo elemento

array3.pop()

console.log(array3);

//agregar elementos en la primera posicion

array3.unshift('martes')

console.log(array3);

//eliminar o sacar el elemento de la primera posiciom

array3.shift();

console.log(array3);

//agregar elementos en una determinada posicion

array3.splice(3, 0, 5)

console.log(array3);

//eliminar elementos en una determinada posisicion

array3.splice(4,2)

console.log(array3);

//eliminar todos los elementos desde una determianda posicion

array3.splice(1);

console.log(array3);

//agregar elmentos en una determianda posicion sin borrar niguno

array3.splice(1, 0, 3,2,1)

console.log(array3);

//agregar elmentos en una determianda posicion sin modificar el array original

/* let newArray3 = array3.toSpliced(4, 0, 6,7)

console.log(newArray3);

console.log(array3); */

// selccionar elementos de un array

console.log(array3.slice(1,4));

//recorrer y/o mostrar los elementos del array 

for(let i = 0; i < array3.length; i++){
    console.log(array3[i]);
}

//recorrer y/o mostrar los elementos del array usando for..of

for(let elemento of array3){
    console.log(elemento);
}

//recorrer y/o mostrar los caracteres de un string usando for..of

let word = 'palabra'

for(let letter of word){
    console.log(letter);
}

//operador spread o spread operator

console.log(...array3);

console.log(...word);

//dado un arreglo de edades encontrar el mayor

let edades = ['45', '12', '88', '41']

console.log(Math.max(...edades));

//encontrar el minimom


console.log(Math.min(...edades));

//clonar un array 

console.log([...array3]);

//concatenar o unir dos o más arrays osando spread operator

let vocales = ['a', 'e', 'i', 'o', 'u'];

console.log([...edades, ...vocales])

//concatenar o unir arrays

console.log(array3.concat(vocales));

//convertir array a string
//convertir string a array

//indexOf

//includes

