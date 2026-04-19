function calcular() {

    let v1 = validarIngresos();
    let v2 = validarEgresos();
    let v3 = validarMonto();
    let v4 = validarPlazo();
    let v5 = validarTasaInteres();

    if (!v1 || !v2 || !v3 || !v4 || !v5) {
        return;
    }

    let ingresos = parseFloat(document.getElementById("txtIngresos").value) || 0;
    let egresos = parseFloat(document.getElementById("txtEgresos").value) || 0;
    let monto = parseFloat(document.getElementById("txtMonto").value) || 0;
    let plazo = parseFloat(document.getElementById("txtPlazo").value) || 0;
    let tasa = parseFloat(document.getElementById("txtTasaInteres").value) || 0;

    // VALIDACIÓN EXTRA
    if (plazo === 0) {
        document.getElementById("errorPlazo").textContent = "El plazo debe ser mayor a 0";
        return;
    }

    let disponible = calcularDisponible(ingresos, egresos);
    mostrarEnSpan("spnDisponible", disponible.toFixed(2));

    let capacidadPagoMensual = calcularCapacidadPago(disponible);
    mostrarEnSpan("spnCapacidadPago", capacidadPagoMensual.toFixed(2));

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