function meuMenu() {
    var abrirAside = document.querySelector("aside");
    abrirAside.classList.toggle("ativoAside");

    var abrirMain = document.querySelector("main");    
    abrirMain.classList.toggle("ativoMain")

    var deslMenu = document.querySelector("label");
    deslMenu.classList.toggle("ativoMenu")

    var deslLogo = document.querySelector("#logo");
    deslLogo.classList.toggle("ativoLogo")
}