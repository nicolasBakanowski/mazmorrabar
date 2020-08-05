$(document).ready(function() {
   
    $("#faqs").click(function(){
        $("#centro").load("paginaFaqs.html");
    });
    $("#tyc").click(function(){
        $("#centro").load("paginaTermCond.html");
    });
    $("#inicio").click(function(){
        $("#centro").load("inicio.html");
    });
    $('#centro').load('inicio.html');
    
    $("#btncompra").click(function(){
        $("#centro").load("compraExitosa.html");
    });
});