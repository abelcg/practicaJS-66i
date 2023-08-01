//switch: se usan por ejemplo para reemplazar if else anidados
// varias opciones o casos para elegir

//estructra switch

/* 
 switch(opcion){
    case 1: 
           //todo lo q quiero que se ejecute para ese caso
    break;
    case 2: 
           //todo lo q quiero que se ejecute para ese caso
    break;
    ...
    
    default
          //código que se ejecuta por defecto

 }

*/

//Permitir que el usuario elija su estación del año favorita
// por ejemplo: 1-verano, 2-otoño, 3-invierno, 4-primavera

let estacion = prompt(
  'Ingrese su estación del año favorita, por ejemplo: 1-verano, 2-otoño, 3-invierno, 4-primavera'
);

switch (estacion.toLowerCase()) {
  case '1':
  case 'verano':
    document.write('Su estación favorita es verano');
    break;
  case '2':
  case 'otoño':
    document.write('Su estación favorita es otoño');
    break;
  case '3':
  case 'invierno':
    document.write('Su estación favorita es invierno');
    break;
  case '4':
  case 'primavera':
    document.write('Su estación favorita es primavera');
    break;

  default:
    alert('Ingrese una opción valida');
    break;
}
