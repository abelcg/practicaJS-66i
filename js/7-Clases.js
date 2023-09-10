//Clases son como moldes de objetos
//Podemos crear o instanciar objetos a partir de su clase
//Si quremos abstraernos a la hora de crear usuarios y clientes por ej uno podría decir
//que tienen en comín que son personas => podemos crear la clase Persona

/* function Person(){
    this.name = 'John',
    this.lastName = 'Doe',
    this.age = 54
} */

//Es importante que el nombre de la clase se escriba con la primera letra en mayúscula

class Person {
  //la función constructor es la 1er método que se invoca cdo creo creo un obj por medio de la clase
  //los parámetros q le paso al constructor son las propiedades q tendrá el obj a crear
  constructor(nombre, apellido, edad, dni, email, tel) {
    (this.name = nombre),
      (this.lastName = apellido),
      (this.age = edad),
      (this.dni = dni),
      (this.email = email),
      (this.tel = tel);
  }

  //los métodos se definen fuera del constructor.
  //pero al invocarlos al no encontrarlo en su objeti lo buscará en su clase

  greet() {
    return `Hello, Im ${this.name} ${this.lastName}`;
  }

  showData() {
    document.write(`<h5>Person: ${this.name} </h5>
                   Name: ${this.name}
                   <br>LastName: ${this.lastName}
                   <br>Age: ${this.age}
                   <br>dni: ${this.dni}
                   <br>email: ${this.email}
                   <br>Tel: ${this.tel}     
    `);
  }

  //propiedades conmutadas p getters y setters
  //get sirve para mostrar las propiedades del objeto

  get showName() {
    return this.name;
  }

  get showLastName() {
    return this.lastName;
  }

  //a continuación de los getters se definen los setters
  //set sirve para modificar propiedades del objeto

  set updateName(newName) {
    this.name = newName;
  }
  set updateLastName(newLastName) {
    this.lastName = newLastName;
  }
}

//Instanciar o crear un objeto: se usa la palabra reservada new seguido del nombre de la clase
//es importante respetar el orden de lo parámetros

const Pepe = new Person(
  'Pepe',
  'Argento',
  54,
  6458468,
  'pepearg@gmail.com',
  11548466665
);

console.log(Pepe);

//Invocamos el método que se encuentra en su clase

console.log(Pepe.greet());
Pepe.showData();

Pepe.name = 'Jose'; //mala practica

console.log(Pepe);

//utilizando las propiedades conmutadas. Figuran como propiedades pero se comportan como métodos
//usando getter

document.write('<br><br>' + Pepe.showName + ' ' + Pepe.showLastName);

//usando setter

Pepe.updateName = 'Pedro';
Pepe.updateLastName = 'Picapiedra';

Pepe.showData();

//Herencia: se heredan propiedades y métodos

class Alumno extends Person {
  //contructor toma todos los parámetros de su constructor padre agregando su propios parámetros
  constructor(
    nombre,
    apellido,
    edad,
    dni,
    email,
    tel,
    curso,
    comision,
    coutaDia
  ) {
    //invoca al constructor de la clase padre con super()
    super(nombre, apellido, edad, dni, email, tel);
    this.curso = curso;
    this.comision = comision;
    this.coutaDia = coutaDia;
  }

  //si invocamos showdata sin definirlo lo busca en la clase padre y grafica hasta las prop del padre
  //si quiero que muestre comision, curso, debo SOBRE-ESCRIBIR (over write) el método en la clase hija

  showData() {
    document.write(`<h5>Person: ${this.name} </h5>
                   Name: ${this.name}
                   <br>LastName: ${this.lastName}
                   <br>Age: ${this.age}
                   <br>dni: ${this.dni}
                   <br>email: ${this.email}
                   <br>Tel: ${this.tel}     
                   <br>Curso: ${this.curso}     
                   <br>Comision: ${this.comision}     
    `);
  }

  //definimos los getter y setters de las propiedades del objeto hijo. No hace falta definir las de las prop heredadas

  get mostrarCurso() {
    return this.curso;
  }

  get mostrarComision() {
    return this.comision;
  }

  set modificarCurso(nuevoCurso) {
    this.curso = nuevoCurso;
  }
}

//crear o instanciar un alumno

let Eduardo = new Alumno(
  'Eduardo',
  'Arias',
  36,
  32458558,
  'edua@gmail.com',
  3815475685,
  'Fullstack',
  '66i',
  true
);

console.log(Eduardo);

Eduardo.showData();

//crear calse Mentor

class Mentor extends Person {
  constructor(
    nombre,
    apellido,
    edad,
    dni,
    email,
    tel,
    comision,
    legajo,
    antiguedad
  ) {
    super(nombre, apellido, edad, dni, email, tel);
    this.comision = comision;
    this.legajo = legajo;
    this.antiguedad = antiguedad;
  }

  //getter y setters

  showData() {
    document.write(`<h5>Person: ${this.name} </h5>
                   Name: ${this.name}
                   <br>LastName: ${this.lastName}
                   <br>Age: ${this.age}
                   <br>dni: ${this.dni}
                   <br>email: ${this.email}
                   <br>Tel: ${this.tel}         
                   <br>Comision: ${this.comision}     
                   <br>Legajo: ${this.legajo}     
                   <br>Antiguedad: ${this.antiguedad}     
    `);
  }
}

let Abel = new Mentor(
  'Abel',
  'Cordoba',
  36,
  32145558,
  'abel@gmail.com',
  3815457855,
  '65i',
  5456454,
  2
);

console.log(Abel);

Abel.showData();

//Polimorfismo: el mismo nombre del método con respuestas diferentes dependiendo del objeto
//por el cual se invoca
