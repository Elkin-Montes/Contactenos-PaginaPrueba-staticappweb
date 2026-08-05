const modal = document.getElementById("modalContactar");

const nombre = document.getElementById("name");
const correo = document.getElementById("email");
const telefono = document.getElementById("telefonoID");
const asunto = document.getElementById("asuntoID");
const mensaje = document.getElementById("message");

const btnEnviar = document.getElementById("btnEnviar");



function abrirModal() {
    modal.classList.add("activo");
}



function limpiarFormulario() {

    nombre.value = "";
    correo.value = "";
    telefono.value = "";
    asunto.value = "";
    mensaje.value = "";

}



function hayDatos() {

    return (
        nombre.value.trim() !== "" ||
        correo.value.trim() !== "" ||
        telefono.value.trim() !== "" ||
        asunto.value.trim() !== "" ||
        mensaje.value.trim() !== ""
    );

}



function cerrarModal() {

    if (hayDatos()) {

        let respuesta = confirm("Hay información escrita.\n\n¿Deseas cerrar el formulario?");

        if (!respuesta) {
            return;
        }

    }

    limpiarFormulario();

    modal.classList.remove("activo");

}


btnEnviar.addEventListener("click", function () {

    if (
        nombre.value.trim() === "" ||
        correo.value.trim() === "" ||
        telefono.value.trim() === "" ||
        asunto.value.trim() === "" ||
        mensaje.value.trim() === ""
    ) {

        alert("Debe completar todos los campos.");

        return;

    }


    alert("✅ Mensaje enviado correctamente.\n\nNos pondremos en contacto contigo.");

    limpiarFormulario();

    modal.classList.remove("activo");

});