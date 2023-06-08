
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


    // Resto del código de llenado de la tabla
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

// Obtener referencias a las columnas de encabezado
columnaNombre = document.querySelector("#nombre-header");
columnaEmail = document.querySelector("#email-header");
columnaTelefono = document.querySelector("#telefono-header");
columnaSueldo = document.querySelector("#sueldo-header");
columnaSueldoEuro = document.querySelector("#sueldoEuro-header");
columnaSueldoDolar = document.querySelector("#sueldoDolar-header");

// Agregar eventos de clic a las columnas de encabezado
columnaNombre.addEventListener("click", () => ordenarTabla("nombre"));
columnaEmail.addEventListener("click", () => ordenarTabla("email"));
columnaTelefono.addEventListener("click", () => ordenarTabla("telefono"));
columnaSueldo.addEventListener("click", () => ordenarTabla("sueldo"));
columnaSueldoEuro.addEventListener("click", () => ordenarTabla("sueldoEuro"));
columnaSueldoDolar.addEventListener("click", () => ordenarTabla("sueldoDolar"));

columnaActual = ""; // Variable para almacenar la columna actualmente ordenada
ordenAscendente = true; // Variable para almacenar el orden actual (ascendente o descendente)

function ordenarTabla(columna) {
    // Verificar si se está ordenando por la misma columna
    if (columna === columnaActual) {
        // Cambiar el orden de ascendente a descendente y viceversa
        ordenAscendente = !ordenAscendente;
    } else {
        // Establecer la nueva columna de ordenamiento y el orden ascendente
        columnaActual = columna;
        ordenAscendente = true;
    }

    // Ordenar la tabla según la columna seleccionada y el orden actual
    ofertas.sort((a, b) => {
        if (a[columna] < b[columna]) {
            return ordenAscendente ? -1 : 1;
        } else if (a[columna] > b[columna]) {
            return ordenAscendente ? 1 : -1;
        } else {
            return 0;
        }
    });

    llenarTabla();
}
