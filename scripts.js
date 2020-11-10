
$(function () {
    $("#botonCalcular").click(function () {
        $("#textoResolución").empty()

        if (levantarNumeroDeString(primerNumero) > levantarNumeroDeString(segundoNumero)) {
            a = levantarNumeroDeString(primerNumero);
            b = levantarNumeroDeString(segundoNumero);
        } else {
            a = levantarNumeroDeString(segundoNumero);
            b = levantarNumeroDeString(primerNumero);
        }

        if (levantarNumeroDeString(segundoNumero) == 0 || levantarNumeroDeString(primerNumero) == 0)
            $("#textoResolución").append("Ingrese un número distinto a 0");

        else {
            do {
                r = a % b;
                $("#textoResolución").append("A dividido B es " + a + "/" + b + ". Da como cociente " + Math.floor(a / b) + " y como resto un r igual a " + r);
                $("#textoResolución").append("<hr>");
                a = b;
                b = r;
            }
            while (r != 0);
            $("#textoResolución").append("Como el resto es 0, llegamos al final del algoritmo, dando el MCD =" + "<p style=color:red>" + a + "</p>");
        }
    });
});

function levantarNumeroDeString(idForm) {
    return parseInt($(idForm).val()) || 0;
}