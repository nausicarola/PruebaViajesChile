// boton avisa que que los datos ingresador por el visitante fueron enviados correctamente
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $("#enviarCorreo").click(function () {
        alert("Viajes Chile\n\nSu mensaje fue correctamente...");
    });
});