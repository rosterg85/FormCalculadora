function validarNombre(){
    var nombre = document.getElementById("nombre").value;
    console.log(nombre);
    let formato=/^[a-zA-z]+$/;
    if(nombre == ""){
       document.getElementById("errorNombre").style.display="block";
       document.getElementById("errorNombre").innerHTML="El campo es obligattorio";
    } 
    else  if(!formato.test(nombre)){
        document.getElementById("errorNombre").style.display="block"; 
        document.getElementById("errorNombre").innerHTML="Ingrese carácteres validos";

    }
    else{ 
       document.getElementById("errorNombre").style.display="none";
    }
}
function validarTelefono(){
    let telefono = document.getElementById("telefono").value;
    console.log(telefono);
    let formato=/^3[0-9]{2}-[0-9]{4}-[0-9]{3}$/;
    if(telefono == ""){
       document.getElementById("errorTelefono").style.display="block";
       document.getElementById("errorTelefono").innerHTML="El campo es obligattorio";
    } 
    else if(!formato.test(telefono)){
        document.getElementById("errorTelefono").style.display="block"; 
        document.getElementById("errorTelefono").innerHTML="El formato debe ser 3XX-XXXX-XXX";
    }
    else{ 
       document.getElementById("errorTelefono").style.display="none";
    }
}

function validarCedula(){
    let cedula = document.getElementById("cedula").value;
    console.log(cedula);
    let formato=/^[0-9]$/;
    if(cedula == ""){
       document.getElementById("errorTelefono").style.display="block";
       document.getElementById("errorTelefono").innerHTML="El campo es obligattorio";
    } 
    else if(!formato.test(cedula)){
        document.getElementById("errorCedula").style.display="block"; 
        document.getElementById("errorCedula").innerHTML="Ingrese carácteres validos sin puntos ni comas";
    }
    else{ 
       document.getElementById("errorCedula").style.display="none";
    }
}

function calcularCosto(){
const pcorriente = 6000;
const pdecorado = 5000;
const ptradicional = 2000;
const pcupcake = 1000;
const pbrazo = 5500;
let total=0;
let tcorriente = document.getElementById("corriente").value;
let tdecorado = document.getElementById("decorado").value;
let ttradicional = document.getElementById("tradicional").value;
let tcupcake = document.getElementById("cupcake").value;
let tbrazo = document.getElementById("brazo").value;

total = (pcorriente * tcorriente) + (pdecorado*tdecorado)+(ptradicional*ttradicional)+(pcupcake*tcupcake)+(pbrazo*tbrazo);
document.getElementById("total").value=total;
}


document.getElementById("nombre").addEventListener("blur",validarNombre);
document.getElementById("telefono").addEventListener("blur",validarTelefono);
document.getElementById("cedula").addEventListener("blur",validarCedula);

function enviarFormulario(){
    validarEntradas();
    console.log("Enviando Formulario")

    calcularCosto();

}
function validarEntradas(){
    validarNombre();
    validarTelefono();
}
document.getElementById("btnEnviar").addEventListener("click",enviarFormulario);