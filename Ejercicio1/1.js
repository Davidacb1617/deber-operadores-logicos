'use strict'
let edad = Number(prompt("Ingrese su Edad"));
let licencia_profesional = confirm("¿Cuenta con una Licencia Profesional?");

if((edad >=25) && (licencia_profesional)){
    alert("Apto");
}else{
    alert("No Apto");
}