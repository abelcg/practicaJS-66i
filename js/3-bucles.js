/* document.write('Elemento 1 <br>')
document.write('Elemento 2 <br>')
document.write('Elemento 3 <br>')
document.write('Elemento 4 <br>')
document.write('Elemento 5 <br>')
document.write('Elemento 6 <br>')

 */

//Bucles

//while

/* 
 while(condición lógica){

    código a ajecutar mientras se cumpla la condición

    variable p/ cambiar la condición lógica
 }

*/

let contador = 1;
//let contador = 21;

while (contador <= 20) {
  document.write('Elemento' + contador + '<br>');
  //contador = contador + 2;
  contador++;
}

//do while

/* 
    do{
        
       código a ajecutar al menos una vez y mietras se cumpla la condición
       
       variable p/ cambiar la condición lógica

    }while(condición lógica)

*/

let cont = 50;
//let cont = 19;

do {
  //codigo a ejecutar
  document.write('Elemento' + cont + '<br>');
  //cont = cont - 1
  cont--;
} while (cont >= 20);

//for

/* 
  for(definir una variable; condición lógica; incremental o decremental){
    código a ejecutar tantas veces como se cumpla la condición
  }

*/

for (let i = 1; i <= 20; i++) {
  document.write('Estructura for vuelta ' + i + '<br>');
}


//strings son ieterables es decir se pueden recorrer caracter a caracter

//recorrer el string usando un bucle

let verduras = 'lechugas y tomates';

//para saber la cantidad de caracteres de un string
console.log(verduras.length);

for(let c = 0; c < verduras.length; c++) {
    document.write(verduras.charAt(c) + '<br>')
}

