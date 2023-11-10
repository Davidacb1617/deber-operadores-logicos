'use strict'
let promedio = Number(prompt("Ingrese su Promedio General"));
let ingresos = Number(prompt("Digite los ingresos mensuales familiares"));
 if(promedio>= 8.5 && ingresos<= 600){
    alert("Aprobado");
 }else{
    alert("Desaprobado");
 }