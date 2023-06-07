
//console.log("funciona")

formulario = document.querySelector("#formulario");



/*Creando evento*/
formulario.addEventListener("submit", validar);

/*Funciones*/

function validar(e) {
    e.preventDefault();

    nombre = document.querySelector("#nombre").value;
    email = document.querySelector("#email").value;
    telefono = document.querySelector("#telefono").value;
    sueldo = document.querySelector("#sueldo").value;


    if (nombre == "") {
        document.querySelector("#nombre").focus();
    } else if (email == "") {
        document.querySelector("#email").focus();
    } else if (email == "") {
        document.querySelector("#email").focus();
    } else if (email == "") {
        document.querySelector("#email").focus();
    } else {
        sueldoEuro = sueldo / 259;
        sueldoDolar = sueldo / 251;



        // respuestas = document.querySelector("#respuestas");
        oferta = new Array();
        oferta.push("Nombre: "+ nombre+'<br>');
        oferta.push("Email: "+ email+'<br>');
        oferta.push("Telefono: "+ telefono+'<br>');
        oferta.push("Sueldo ofrecido: "+ sueldo+'<br>');
        oferta.push("Sueldo en euros: "+sueldoEuro+'<br>');
        oferta.push("Sueldo en dolares: "+ sueldoDolar+'<br>');

        carga = new Array();

        if (sueldo > 100000) {
            carga.push(oferta);
            //ofertas="";

            for (var i = 0; i < carga.length; i++) {
                respuestas = document.querySelector("#respuestas").innerHTML += oferta + '<br>';
            }
        }else{
            alert("El sueldo ofrecido no esta dentro del minimo pretendido");
        }


        /* respuestas.textContent = "Nombre: " + nombre + " email: " + email + " telefono: " + telefono
             + " sueldo: $" + sueldo + " sueldo en Euros: $" + sueldoEuro + " sueldo en dolares: $" + sueldoDolar;*/



        nombre = document.querySelector("#nombre").value = "";
        email = document.querySelector("#email").value = "";
        telefono = document.querySelector("#telefono").value = "";
        sueldo = document.querySelector("#sueldo").value = "";
        document.querySelector("#nombre").focus();
    }
}







