'use strict'
let no = new Boolean(false);
let edad = Number(prompt("Ingrese su Edad"));
let licencia_profesional = Boolean(prompt("¿Cuenta con una Licencia Profesional? "));
alert(licencia_profesional);

if((edad >=25) && (licencia_profesional==true)){
    alert("Apto");
}else{
    alert("No Apto");
}
