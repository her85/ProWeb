
formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", validar);

ofertas = [];

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


        if (sueldo < 100000) {
            alert("El sueldo ofrecido no esta dentro del minimo pretendido");

        } else {
            oferta = { nombre, email, telefono, sueldo, sueldoEuro, sueldoDolar };
            ofertas.push(oferta);

            llenarTabla();
        }

        nombre = document.querySelector("#nombre").value = "";
        email = document.querySelector("#email").value = "";
        telefono = document.querySelector("#telefono").value = "";
        sueldo = document.querySelector("#sueldo").value = "";
        document.querySelector("#nombre").focus();
    }
}


function llenarTabla() {
    tableBody = document.querySelector("#respuestas");
    tableBody.innerHTML = "";

    ofertas.forEach(dato => {
        fila = document.createElement("tr");
        nombreColumna = document.createElement("td");
        emailColumna = document.createElement("td");
        telefonoColumna = document.createElement("td");
        sueldoColumna = document.createElement("td");
        sueldoEuroColumna = document.createElement("td");
        sueldoDolarColumna = document.createElement("td");

        nombreColumna.textContent = dato.nombre;
        emailColumna.textContent = dato.email;
        telefonoColumna.textContent = dato.telefono;
        sueldoColumna.textContent = dato.sueldo;
        sueldoEuroColumna.textContent = dato.sueldoEuro;
        sueldoDolarColumna.textContent = dato.sueldoDolar;


        fila.appendChild(nombreColumna);
        fila.appendChild(emailColumna);
        fila.appendChild(telefonoColumna);
        fila.appendChild(sueldoColumna);
        fila.appendChild(sueldoEuroColumna);
        fila.appendChild(sueldoDolarColumna);
        tableBody.appendChild(fila);
    });
}


