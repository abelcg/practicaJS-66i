let nombre = 'Abel';
let apellido = 'Córdoba';
let email = 'abel@gmail.com';
let dni = 32651894;

//definir o declarar un objeto en forma literal.

let usuario = {
  //clave: valor | key: value ... las claves se les llama propiedades. Describen al objeto
  nombre: 'Abel',
  apellido: 'Cordoba',
  email: 'abel@gamil.com',
  dni: 321654987,
 /*  roles: ['admin', 'super user', 'moderador'],
  curso: {
    nombre: 'Fullstack',
    esPresencial: false,
  } */

  //metodos
  saludar(){
    return `Hola ${this.nombre} ${this.apellido}`
  },
  isLogged(){
    return true
  }

};

//objeto es una forma de modelar algo de la realidad y puede ser intangible o tangible

//definir un objeto vacio de forma literal

let objVacio = {};

// mostrar el objeto en el documento

//document.write(usuario);

//mostrar por consola el objeto

console.log(usuario);

//mostrar una propiedad del objeto. Forma 1.  nombreObjecto.propiedad

document.write('El nombre del usuario es: ' + usuario.nombre);

//mostrar una propiedad del objeto. Forma 2. nombreObjecto['propiedad']

document.write('<br>El apellido del usuario es: ' + usuario['apellido']);

//si queremos aplicar for...of a un objeto ---> nos dirá que el mismo no es iterable

/* for(const ele of usuario){
    console.log('hola');
} */

//podemos usar en cambio for...in

document.write('<h5>User</h5>');

for (const prop in usuario) {
  document.write(`<br>${prop} : ${usuario[prop]}`);
}

//mostrar un objeto usando un bucle tradicional

const mostrarObjeto = ()=> {
    //usando el método keys del objeto para obtener un array con sus claves
    let claves = Object.keys(usuario);
    console.log(claves.length);

    document.write("<h5>User</h5>")

    for(let i = 0; i < claves.length; i++){
        let clave = claves[i];
        let valor = usuario[clave]
        //obtengo el nombre de c/u de las claves y con ellas puedo obtener c/u de los valores

        document.write(`<br> ${clave}: ${valor}`)
    }
}


mostrarObjeto()

//mostrar el objeto usando su array de keys con un for..of

let keys = Object.keys(usuario);

for(const key of keys){
    const value = usuario[key]
    console.log(key, value);
}

//mostrar solo los valores del objeto usando el método values --> devuelve un array de valores
console.log(Object.values(usuario));

//mostrar objeto usando su array de keys y mapear el mismo

const mapObjt = Object.keys(usuario).map((key) => {
    const value = usuario[key]
    console.log(key, value);
})

//mostrar el o jeto usando el método entries --> devuelve un array de arrays
//formado con los pares key value

Object.entries(usuario).map(entry => {
    const [key, value] = entry
    console.log(key, value);
})

//modificar una propiedad

usuario.nombre = 'Pepe'

mostrarObjeto()

//agregar una propiedad
usuario.roles = ['admin', 'super user', 'moderador']

mostrarObjeto()

console.log(usuario.roles);

//eliminar una propiedad

delete usuario.dni

mostrarObjeto()

//métodos son las cosas que puede hacer un objeto, sus acciones 
//y la forma en que se relaciona con otros objetos

//se definen como si fueran propiedades cuyo valor son funciones anónimas

//llamar o invocar un método: nombreObjecto.metodo()

console.log(usuario.saludar());

console.log(usuario.isLogged());
