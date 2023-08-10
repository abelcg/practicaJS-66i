/* 
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

*/

let resultado = '';

do {
    let palabra = prompt('Ingrese una palabra');
    if(resultado === ''){
        //si se ingresa una unica palabra la devuelvo sin concatenar el guion
        resultado = palabra;
        console.log(resultado);
    } else {
        resultado = resultado + '-' + palabra;
        console.log(resultado);
    }
    
} while (confirm('Desea seguir ingresando palabras?'));

document.write(resultado);
