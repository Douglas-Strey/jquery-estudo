function animationTitle() {
    $("h1.teste-title").fadeIn("slow");
    $("h2.jquery-title").hide().show(1000);
    $("img.jquery-logo").hide().show(600);

    return;
};

function mostrarListaEmpresas() {
    $("li").hide().parent().before("<section><a href='#'>Mostrar Empresas Gigantes</a></section>");
    $("a").click(function () {
        $("li").show("slow");

        $(".description section:first a").addClass("fechar");
        $(".fechar").click(function () {
            $("li").hide("slow");
        });
    });

    return;
};

animationTitle();
mostrarListaEmpresas();
