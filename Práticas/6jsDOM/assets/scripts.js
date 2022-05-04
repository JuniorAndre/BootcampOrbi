const botao = document.getElementById("mode-selector");
botao.addEventListener("click", modoDark);

function modoDark(){
    const titulo = document.getElementById("h1");
    const rodape = document.getElementsByTagName("footer");
    const corpo = document.getElementsByTagName("body");
    titulo.classList.toggle("dark-mode");
    rodape.classList.toggle("dark-mode");
    botao.classList.toggle("dark-mode");
    corpo.classList.toggle("dark-mode");
}