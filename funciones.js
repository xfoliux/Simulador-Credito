//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible(ingresos, egresos) {
    let disponible = ingresos - egresos;//-500
    if (disponible < 0) {// -500<0 true
        disponible = 0;//0
    }
    return disponible; //500
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
    let capacidadPago = montoDisponible / 2;
    return capacidadPago;
}

function calcularInteresSimple(monto, tasa, plazoAnios) {
    let interes = plazoAnios * monto *(tasa / 100);
    return interes;
}

function calcularTotalPagar(monto, interes) {
    const SOLCA = 100;
    let totalPagar = parseFloat(monto) + parseFloat(interes) + SOLCA;
    return totalPagar;
}

function calcularCuotaMensual(total, plazoAnios) {
    let plazoMeses = plazoAnios * 12;
    let cuotaMensual = total / plazoMeses;
    return cuotaMensual;
}

function aprobarCredito(capacidadPago, cuotaMensual) {
    if (capacidadPago >= cuotaMensual) {
        return true;
    } else {
        return false;
    }
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

    // LIMPIAR RESULTADOS
    document.getElementById("spnDisponible").textContent = "";
    document.getElementById("spnCapacidadPago").textContent = "";
    document.getElementById("spnInteresPagar").textContent = "";
    document.getElementById("spnTotalPrestamo").textContent = "";
    document.getElementById("spnCuotaMensual").textContent = "";

    // ESTADO POR DEFECTO
    document.getElementById("spnEstadoCredito").textContent = "ANALIZANDO...";
}
