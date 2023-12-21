'use strict'

let student=(nombre,correo,promedio){
  this.nombre= nombre;
  this.correo= correo;
  this.promedio= promedio;
  
  function validarPromedio(student) {
    let maxPromedio=100;
    let isPast=maxPromedio-promedio;
    if(isPast<=70){
        alert("Pasa")
    }
    else{
        alert("No pasa")
    }
}
}

let thatStudent =  new student('Juan Alto','Juanito13@gmail.com','86');
alert(thatStudent.correo)
