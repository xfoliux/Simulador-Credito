// AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO

function calcularDisponible(ingresos, egresos) {
    let disponible = ingresos - egresos;
    if (disponible < 0) {
        disponible = 0;
    }
    return disponible;
}

function mostrarEnSpan(idSpan, valor) {
    let componente = document.getElementById(idSpan);
    componente.textContent = valor;
}

function mostrarEnTxt(idTxt) {
    let componente = document.getElementById(idTxt);
    return componente.value;
}

function calcularCapacidadPago(montoDisponible) {
    return montoDisponible / 2;
}

function calcularInteresSimple(monto, tasa, plazoAnios) {
    return plazoAnios * monto * (tasa / 100);
}

function calcularTotalPagar(monto, interes) {
    const SOLCA = 100;
    return parseFloat(monto) + parseFloat(interes) + SOLCA;
}

function calcularCuotaMensual(total, plazoAnios) {
    let plazoMeses = plazoAnios * 12;
    if (plazoMeses === 0) return 0; // evitar división por 0
    return total / plazoMeses;
}

function aprobarCredito(capacidadPago, cuotaMensual) {
    return capacidadPago >= cuotaMensual;
}

function analizarCredito(capacidadPago, cuotaMensual) {
    return aprobarCredito(capacidadPago, cuotaMensual);
}

function reiniciar() {

    // LIMPIAR INPUTS
    document.getElementById("txtIngresos").value = "";
    document.getElementById("txtEgresos").value = "";
    document.getElementById("txtMonto").value = "";
    document.getElementById("txtPlazo").value = "";
    document.getElementById("txtTasaInteres").value = "";

    // LIMPIAR ERRORES
    document.getElementById("errorIngresos").textContent = "";
    document.getElementById("errorEgresos").textContent = "";
    document.getElementById("errorMonto").textContent = "";
    document.getElementById("errorPlazo").textContent = "";
    document.getElementById("errorTasaInteres").textContent = "";

    // LIMPIAR RESULTADOS
    document.getElementById("spnDisponible").textContent = "";
    document.getElementById("spnCapacidadPago").textContent = "";
    document.getElementById("spnInteresPagar").textContent = "";
    document.getElementById("spnTotalPrestamo").textContent = "";
    document.getElementById("spnCuotaMensual").textContent = "";

    // ESTADO POR DEFECTO
    document.getElementById("spnEstadoCredito").textContent = "ANALIZANDO...";
}

/* =========================
   VALIDACIONES
========================= */

function esNumero(valor) {
    return /^\d+$/.test(valor);
}

function validarCampo(idInput, idError) {
    let input = document.getElementById(idInput);
    let valor = input.value.trim();
    let error = document.getElementById(idError);

    if (valor === "") {
        error.textContent = "Este campo es obligatorio";
        return false;
    }

    if (!esNumero(valor)) {
        error.textContent = "Solo se permiten números";
        return false;
    }

    if (valor.length > 5) {
        error.textContent = "Máximo 5 dígitos";
        return false;
    }

    error.textContent = "";
    return true;
}

// VALIDACIONES INDIVIDUALES
function validarIngresos() {
    return validarCampo("txtIngresos", "errorIngresos");
}

function validarEgresos() {
    return validarCampo("txtEgresos", "errorEgresos");
}

function validarMonto() {
    return validarCampo("txtMonto", "errorMonto");
}

function validarPlazo() {
    return validarCampo("txtPlazo", "errorPlazo");
}

function validarTasaInteres() {
    return validarCampo("txtTasaInteres", "errorTasaInteres");
}