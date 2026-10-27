function guardar1() {
    const nombre = document.getElementById("nombre").value;
    const ciudad = document.getElementById("ciudad").value;

    if (nombre === "" || ciudad === "") {
        alert("Completa todos los campos");
    } else {
        sessionStorage.setItem("nombre", nombre);
        sessionStorage.setItem("ciudad", ciudad);
        window.location.href = "segundapagina.html";
    }
}

function mostrarDatos() {
    const nom = sessionStorage.getItem("nombre");
    const ciu = sessionStorage.getItem("ciudad");

    if (nom === null || ciu === null) {
        document.getElementById("nom").textContent =
            "No hay datos guardados";
        document.getElementById("ciu").textContent = "";
    } else {
        document.getElementById("nom").textContent =
            "Su nombre es: " + nom;
        document.getElementById("ciu").textContent =
            "Su ciudad es: " + ciu;
    }
}

function limpiarTodo() {
    sessionStorage.clear();
    mostrarDatos();
}

const guardar = document.getElementById("guardar");
const borrarTodo = document.getElementById("borrarTodo");
const nom = document.getElementById("nom");

if (guardar === null) {
    console.log("No hay botón guardar en esta página");
} else {
    guardar.addEventListener("click", guardar1);
}

if (borrarTodo === null) {
    console.log("No hay botón borrar todo en esta página");
} else {
    borrarTodo.addEventListener("click", limpiarTodo);
}

if (nom === null) {
    console.log("No hay espacio para mostrar los datos");
} else {
    mostrarDatos();
}