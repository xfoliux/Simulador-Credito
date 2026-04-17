function calcular() {
    let ingresos = parseFloat(document.getElementById("txtIngresos").value) || 0;
    let egresos = parseFloat(document.getElementById("txtEgresos").value) || 0;

    let disponible = calcularDisponible(ingresos, egresos);
    mostrarEnSpan("spnDisponible", disponible.toFixed(2));

    let capacidadPagoMensual = calcularCapacidadPago(disponible);
    mostrarEnSpan("spnCapacidadPago", capacidadPagoMensual.toFixed(2));

    let monto = parseFloat(mostrarEnTxt("txtMonto")) || 0;
    let plazo = parseFloat(document.getElementById("txtPlazo").value) || 0;
    let tasa = parseFloat(document.getElementById("txtTasaInteres").value) || 0;

    let interes = calcularInteresSimple(monto, tasa, plazo);
    mostrarEnSpan("spnInteresPagar", interes.toFixed(2));

    let totalPagar = calcularTotalPagar(monto, interes);
    mostrarEnSpan("spnTotalPrestamo", totalPagar.toFixed(2));

    let cuotaMensual = calcularCuotaMensual(totalPagar, plazo);
    mostrarEnSpan("spnCuotaMensual", cuotaMensual.toFixed(2));

    let aprobado = analizarCredito(capacidadPagoMensual, cuotaMensual);

    if (aprobado) {
        mostrarEnSpan("spnEstadoCredito", "CREDITO APROBADO");
    } else {
        mostrarEnSpan("spnEstadoCredito", "CREDITO RECHAZADO");
    }
}


